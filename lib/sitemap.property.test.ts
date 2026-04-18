/**
 * Property-based tests for sitemap completeness
 *
 * Property 6: Sitemap completeness
 * **Validates: Requirements 3.7, 3.8**
 *
 * For any set of published recipes in the Recipe_Store, every recipe's slug
 * SHALL appear exactly once in the generated sitemap output, and no unpublished
 * recipe's slug SHALL appear.
 */

import { describe, it, beforeAll } from 'vitest';
import * as fc from 'fast-check';
import initSqlJs, { type Database } from 'sql.js';
import { insertRecipe, getAllPublishedSlugs } from './db';
import type { RecipeRecord } from './types';

// ---------------------------------------------------------------------------
// Minimal D1-compatible wrapper around sql.js (mirrors db.property.test.ts)
// ---------------------------------------------------------------------------

type SqlJsDb = Database;

function makePreparedStatement(sqlDb: SqlJsDb, sql: string, params: unknown[]) {
  return {
    bind(...values: unknown[]) {
      return makePreparedStatement(sqlDb, sql, values);
    },
    async first<T = unknown>(colName?: string): Promise<T | null> {
      const stmt = sqlDb.prepare(sql);
      stmt.bind(params as (string | number | null | Uint8Array)[]);
      if (!stmt.step()) {
        stmt.free();
        return null;
      }
      const row = stmt.getAsObject() as Record<string, unknown>;
      stmt.free();
      if (colName !== undefined) {
        return (row[colName] ?? null) as T | null;
      }
      return row as unknown as T;
    },
    async all<T = unknown>(): Promise<{ results: T[] }> {
      const stmt = sqlDb.prepare(sql);
      stmt.bind(params as (string | number | null | Uint8Array)[]);
      const results: T[] = [];
      while (stmt.step()) {
        results.push(stmt.getAsObject() as unknown as T);
      }
      stmt.free();
      return { results };
    },
    async run(): Promise<void> {
      sqlDb.run(sql, params as (string | number | null | Uint8Array)[]);
    },
  };
}

function makeD1Database(sqlDb: SqlJsDb): D1Database {
  return {
    prepare(query: string) {
      return makePreparedStatement(sqlDb, query, []) as unknown as D1PreparedStatement;
    },
    async dump() {
      return new ArrayBuffer(0);
    },
    async batch<T>(_statements: D1PreparedStatement[]): Promise<D1Result<T>[]> {
      return [];
    },
    async exec(_query: string): Promise<D1ExecResult> {
      sqlDb.run(_query);
      return { count: 0, duration: 0 };
    },
  } as unknown as D1Database;
}

// ---------------------------------------------------------------------------
// Schema SQL (mirrors fixchef/migrations/0001_schema.sql)
// ---------------------------------------------------------------------------

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS recipes (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  slug              TEXT UNIQUE NOT NULL,
  version           INTEGER NOT NULL DEFAULT 1,
  title             TEXT NOT NULL,
  category          TEXT NOT NULL,
  description       TEXT NOT NULL,
  hero_image_url    TEXT NOT NULL,
  meta_title        TEXT NOT NULL,
  meta_description  TEXT NOT NULL,
  keywords          TEXT NOT NULL,
  ingredients       TEXT NOT NULL,
  steps             TEXT NOT NULL,
  nutrition         TEXT NOT NULL,
  tips              TEXT NOT NULL,
  youtube_query     TEXT NOT NULL,
  youtube_video_id  TEXT,
  prep_time         TEXT,
  cook_time         TEXT,
  total_time        TEXT,
  difficulty        TEXT,
  servings          TEXT,
  related_recipes   TEXT DEFAULT '[]',
  schema_markup     TEXT,
  published         INTEGER DEFAULT 0,
  created_at        TEXT DEFAULT (datetime('now')),
  updated_at        TEXT DEFAULT (datetime('now'))
);
`;

// ---------------------------------------------------------------------------
// fast-check arbitraries
// ---------------------------------------------------------------------------

// Slug: lowercase alphanumeric + hyphens, must start/end with alphanumeric
const slugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 80);

const urlArb = fc.webUrl({ validSchemes: ['https'] });

const ingredientArb = fc.record({
  name: fc.string({ minLength: 1 }),
  quantity: fc.string({ minLength: 1 }),
  unit: fc.string({ minLength: 1 }),
});

const stepArb = fc.record({
  order: fc.integer({ min: 1, max: 100 }),
  instruction: fc.string({ minLength: 1 }),
});

const nutritionArb = fc.record({
  calories: fc.float({ min: 0, max: 5000, noNaN: true }),
  protein_g: fc.float({ min: 0, max: 500, noNaN: true }),
  carbs_g: fc.float({ min: 0, max: 500, noNaN: true }),
  fat_g: fc.float({ min: 0, max: 500, noNaN: true }),
  serving_size: fc.string({ minLength: 1 }),
});

function makeRecipeArb(slug: string, published: boolean): fc.Arbitrary<RecipeRecord> {
  return fc.record({
    version: fc.constant(1),
    slug: fc.constant(slug),
    title: fc.string({ minLength: 1 }),
    category: fc.string({ minLength: 1 }),
    description: fc.string({ minLength: 1 }),
    hero_image_url: urlArb,
    meta_title: fc.string({ minLength: 1, maxLength: 60 }),
    meta_description: fc.string({ minLength: 1, maxLength: 160 }),
    keywords: fc.array(fc.string(), { minLength: 1 }),
    ingredients: fc.array(ingredientArb, { minLength: 1 }),
    steps: fc.array(stepArb, { minLength: 1 }),
    nutrition: nutritionArb,
    tips: fc.array(fc.string()),
    youtube_query: fc.string({ minLength: 1 }),
    published: fc.constant(published),
  });
}

// Generates a set of unique slugs split into published and unpublished groups
const slugSetsArb = fc
  .uniqueArray(slugArb, { minLength: 1, maxLength: 20 })
  .chain((allSlugs) => {
    // Split into published (at least 1) and unpublished (may be 0)
    const splitIdx = fc.integer({ min: 1, max: allSlugs.length });
    return splitIdx.map((idx) => ({
      publishedSlugs: allSlugs.slice(0, idx),
      unpublishedSlugs: allSlugs.slice(idx),
    }));
  });

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

let SQL: Awaited<ReturnType<typeof initSqlJs>>;

beforeAll(async () => {
  SQL = await initSqlJs();
});

describe('Sitemap completeness property tests', () => {
  /**
   * **Validates: Requirements 3.7, 3.8**
   *
   * Property 6: Sitemap completeness
   * For any set of published and unpublished recipes inserted into the store,
   * getAllPublishedSlugs (used by the sitemap) SHALL return every published slug
   * exactly once and SHALL NOT include any unpublished slug.
   */
  it('every published slug appears exactly once and no unpublished slug appears', async () => {
    await fc.assert(
      fc.asyncProperty(slugSetsArb, async ({ publishedSlugs, unpublishedSlugs }) => {
        // Fresh in-memory DB per iteration
        const sqlDb = new SQL.Database();
        sqlDb.run(SCHEMA_SQL);
        const db = makeD1Database(sqlDb);

        // Insert published recipes
        for (const slug of publishedSlugs) {
          const recipe = await fc.sample(makeRecipeArb(slug, true), 1)[0];
          await insertRecipe(db, recipe);
        }

        // Insert unpublished recipes
        for (const slug of unpublishedSlugs) {
          const recipe = await fc.sample(makeRecipeArb(slug, false), 1)[0];
          await insertRecipe(db, recipe);
        }

        const returnedSlugs = await getAllPublishedSlugs(db);

        sqlDb.close();

        // Every published slug must appear exactly once
        for (const slug of publishedSlugs) {
          const count = returnedSlugs.filter((s) => s === slug).length;
          if (count !== 1) return false;
        }

        // No unpublished slug may appear
        for (const slug of unpublishedSlugs) {
          if (returnedSlugs.includes(slug)) return false;
        }

        // Total count must equal number of published slugs
        if (returnedSlugs.length !== publishedSlugs.length) return false;

        return true;
      }),
      { numRuns: 100 }
    );
  });
});
