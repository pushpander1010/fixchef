/**
 * Property-based tests for recipe record round-trip via D1
 *
 * Property 1: Recipe record round-trip
 * **Validates: Requirements 2.3**
 *
 * For any valid RecipeRecord, inserting into a local D1-compatible SQLite
 * instance and reading back via getRecipeBySlug must yield deep equality.
 *
 * Property 7: Category query completeness and exclusivity
 * **Validates: Requirements 4.1, 4.5, 8.1**
 *
 * For any set of recipes across multiple categories inserted into D1,
 * querying by each category returns all and only published recipes for that
 * category (no recipes from other categories, no unpublished recipes missing
 * or extra).
 */

import { describe, it, beforeAll } from 'vitest';
import * as fc from 'fast-check';
import initSqlJs, { type Database } from 'sql.js';
import { insertRecipe, getRecipeBySlug, getRecipesByCategory } from './db';
import type { RecipeRecord } from './types';

// ---------------------------------------------------------------------------
// Minimal D1-compatible wrapper around sql.js
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
      // Call getAsObject() without args to get all column values
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
      sqlDb.run(query);
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
// fast-check arbitraries for RecipeRecord
// ---------------------------------------------------------------------------

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

// Slug: lowercase alphanumeric + hyphens, must start/end with alphanumeric
const slugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 100);

const urlArb = fc.webUrl({ validSchemes: ['https'] });

const validRecipeArb: fc.Arbitrary<RecipeRecord> = fc.record({
  version: fc.integer({ min: 1 }),
  slug: slugArb,
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
  published: fc.constant(true), // must be published so getRecipeBySlug returns it
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

let SQL: Awaited<ReturnType<typeof initSqlJs>>;

beforeAll(async () => {
  SQL = await initSqlJs();
});

describe('Recipe record round-trip property tests', () => {
  /**
   * **Validates: Requirements 2.3**
   *
   * Property 1: Recipe record round-trip
   * For any valid RecipeRecord, inserting into a local D1-compatible SQLite
   * instance and reading back via getRecipeBySlug must yield deep equality.
   */
  it('inserted recipe reads back with deep equality', async () => {
    await fc.assert(
      fc.asyncProperty(validRecipeArb, async (recipe) => {
        // Fresh in-memory DB per iteration
        const sqlDb = new SQL.Database();
        sqlDb.run(SCHEMA_SQL);
        const db = makeD1Database(sqlDb);

        await insertRecipe(db, recipe);
        const retrieved = await getRecipeBySlug(db, recipe.slug);

        sqlDb.close();

        if (retrieved === null) return false;

        // Compare all fields present in the original recipe
        const keysToCheck = Object.keys(recipe) as (keyof RecipeRecord)[];
        for (const key of keysToCheck) {
          const expected = recipe[key];
          const actual = retrieved[key];
          // Deep equality via JSON for arrays/objects
          if (JSON.stringify(expected) !== JSON.stringify(actual)) {
            return false;
          }
        }
        return true;
      }),
      { numRuns: 100 }
    );
  });
});

// ---------------------------------------------------------------------------
// Arbitraries for category query tests
// ---------------------------------------------------------------------------

// A small fixed set of category names to ensure overlap across recipes
const CATEGORIES = ['Sweets', 'Spicy', 'Healthy', 'Fast Foods', 'Mexican'];

const categoryArb = fc.constantFrom(...CATEGORIES);

// Slug: lowercase alphanumeric + hyphens
const catSlugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 80);

const catUrlArb = fc.webUrl({ validSchemes: ['https'] });

const catIngredientArb = fc.record({
  name: fc.string({ minLength: 1 }),
  quantity: fc.string({ minLength: 1 }),
  unit: fc.string({ minLength: 1 }),
});

const catStepArb = fc.record({
  order: fc.integer({ min: 1, max: 100 }),
  instruction: fc.string({ minLength: 1 }),
});

const catNutritionArb = fc.record({
  calories: fc.float({ min: 0, max: 5000, noNaN: true }),
  protein_g: fc.float({ min: 0, max: 500, noNaN: true }),
  carbs_g: fc.float({ min: 0, max: 500, noNaN: true }),
  fat_g: fc.float({ min: 0, max: 500, noNaN: true }),
  serving_size: fc.string({ minLength: 1 }),
});

function makeCategoryRecipeArb(
  slug: string,
  category: string,
  published: boolean
): fc.Arbitrary<RecipeRecord> {
  return fc.record({
    version: fc.constant(1),
    slug: fc.constant(slug),
    title: fc.string({ minLength: 1 }),
    category: fc.constant(category),
    description: fc.string({ minLength: 1 }),
    hero_image_url: catUrlArb,
    meta_title: fc.string({ minLength: 1, maxLength: 60 }),
    meta_description: fc.string({ minLength: 1, maxLength: 160 }),
    keywords: fc.array(fc.string(), { minLength: 1 }),
    ingredients: fc.array(catIngredientArb, { minLength: 1 }),
    steps: fc.array(catStepArb, { minLength: 1 }),
    nutrition: catNutritionArb,
    tips: fc.array(fc.string()),
    youtube_query: fc.string({ minLength: 1 }),
    published: fc.constant(published),
  });
}

// Generates a list of recipe specs: { slug, category, published }
// Slugs are unique; each recipe is assigned a random category and published flag.
const recipeSpecsArb = fc
  .uniqueArray(catSlugArb, { minLength: 2, maxLength: 15 })
  .chain((slugs) => {
    const specArbs = slugs.map((slug) =>
      fc.record({
        slug: fc.constant(slug),
        category: categoryArb,
        published: fc.boolean(),
      })
    );
    return fc.tuple(...(specArbs as [fc.Arbitrary<{ slug: string; category: string; published: boolean }>]));
  })
  .map((specs) => (Array.isArray(specs) ? specs : [specs]));

// ---------------------------------------------------------------------------
// Category query completeness and exclusivity tests
// ---------------------------------------------------------------------------

describe('Category query completeness and exclusivity property tests', () => {
  /**
   * **Validates: Requirements 4.1, 4.5, 8.1**
   *
   * Feature: fixchef-recipe-website, Property 8: category page completeness
   *
   * For any set of recipes across multiple categories inserted into D1,
   * querying by each category returns all and only published recipes for that
   * category (no recipes from other categories, no unpublished recipes).
   */
  it('getRecipesByCategory returns all and only published recipes for each category', async () => {
    await fc.assert(
      fc.asyncProperty(recipeSpecsArb, async (specs) => {
        // Fresh in-memory DB per iteration
        const sqlDb = new SQL.Database();
        sqlDb.run(SCHEMA_SQL);
        const db = makeD1Database(sqlDb);

        // Insert all recipes
        for (const spec of specs) {
          const recipe = await fc.sample(
            makeCategoryRecipeArb(spec.slug, spec.category, spec.published),
            1
          )[0];
          await insertRecipe(db, recipe);
        }

        // Collect distinct categories present in the inserted data
        const allCategories = [...new Set(specs.map((s) => s.category))];

        for (const category of allCategories) {
          // Expected: slugs of published recipes in this category
          const expectedSlugs = new Set(
            specs
              .filter((s) => s.category === category && s.published)
              .map((s) => s.slug)
          );

          // Query page 1 (up to 24 results — our test data is ≤15 recipes total)
          const results = await getRecipesByCategory(db, category, 1);
          const returnedSlugs = new Set(results.map((r) => r.slug));

          // Every expected slug must be present
          for (const slug of expectedSlugs) {
            if (!returnedSlugs.has(slug)) {
              sqlDb.close();
              return false;
            }
          }

          // No extra slugs (from other categories or unpublished)
          for (const slug of returnedSlugs) {
            if (!expectedSlugs.has(slug)) {
              sqlDb.close();
              return false;
            }
          }

          // Counts must match
          if (returnedSlugs.size !== expectedSlugs.size) {
            sqlDb.close();
            return false;
          }

          // All returned cards must have the correct category field
          for (const card of results) {
            if (card.category !== category) {
              sqlDb.close();
              return false;
            }
          }
        }

        sqlDb.close();
        return true;
      }),
      { numRuns: 100 }
    );
  });
});
