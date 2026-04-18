import type { RecipeRecord, RecipeCardData, Ingredient, Step, Nutrition } from './types';

const PAGE_SIZE = 24;

function assertDb(db: D1Database | null | undefined): asserts db is D1Database {
  if (db == null) {
    throw new Error(
      'D1 database binding (DB) not found in environment. ' +
      'Ensure the [[d1_databases]] binding is configured in wrangler.toml and the Pages dashboard.'
    );
  }
}

// Raw row shape returned by D1 queries
interface RecipeRow {
  version: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  hero_image_url: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
  ingredients: string;
  steps: string;
  nutrition: string;
  tips: string;
  youtube_query: string;
  youtube_video_id: string | null;
  prep_time: string | null;
  cook_time: string | null;
  total_time: string | null;
  difficulty: string | null;
  servings: string | null;
  related_recipes: string | null;
  schema_markup: string | null;
  published: number;
}

function rowToRecord(row: RecipeRow): RecipeRecord {
  return {
    version: row.version,
    slug: row.slug,
    title: row.title,
    category: row.category,
    description: row.description,
    hero_image_url: row.hero_image_url,
    meta_title: row.meta_title,
    meta_description: row.meta_description,
    keywords: JSON.parse(row.keywords) as string[],
    ingredients: JSON.parse(row.ingredients) as Ingredient[],
    steps: JSON.parse(row.steps) as Step[],
    nutrition: JSON.parse(row.nutrition) as Nutrition,
    tips: JSON.parse(row.tips) as string[],
    youtube_query: row.youtube_query,
    youtube_video_id: row.youtube_video_id ?? undefined,
    prep_time: row.prep_time ?? undefined,
    cook_time: row.cook_time ?? undefined,
    total_time: row.total_time ?? undefined,
    difficulty: row.difficulty ?? undefined,
    servings: row.servings ?? undefined,
    related_recipes: row.related_recipes ? (JSON.parse(row.related_recipes) as string[]) : undefined,
    schema_markup: row.schema_markup ?? undefined,
    published: row.published === 1,
  };
}

export async function getRecipeBySlug(
  db: D1Database,
  slug: string
): Promise<RecipeRecord | null> {
  assertDb(db);
  const row = await db
    .prepare('SELECT * FROM recipes WHERE slug = ? AND published = 1 LIMIT 1')
    .bind(slug)
    .first<RecipeRow>();
  return row ? rowToRecord(row) : null;
}

export async function getRecipesByCategory(
  db: D1Database,
  category: string,
  page: number
): Promise<RecipeCardData[]> {
  assertDb(db);
  const offset = (page - 1) * PAGE_SIZE;
  const { results } = await db
    .prepare(
      'SELECT slug, title, hero_image_url, total_time, difficulty, category ' +
      'FROM recipes WHERE category = ? AND published = 1 ' +
      'ORDER BY id DESC LIMIT ? OFFSET ?'
    )
    .bind(category, PAGE_SIZE, offset)
    .all<RecipeCardData>();
  return results ?? [];
}

export async function getAllPublishedSlugs(db: D1Database): Promise<string[]> {
  assertDb(db);
  const { results } = await db
    .prepare('SELECT slug FROM recipes WHERE published = 1 ORDER BY id DESC')
    .all<{ slug: string }>();
  return (results ?? []).map((r) => r.slug);
}

export async function getRecipeCountByCategory(
  db: D1Database,
  category: string
): Promise<number> {
  assertDb(db);
  const row = await db
    .prepare('SELECT COUNT(*) as count FROM recipes WHERE category = ? AND published = 1')
    .bind(category)
    .first<{ count: number }>();
  return row?.count ?? 0;
}

export async function getAllCategories(db: D1Database): Promise<string[]> {
  assertDb(db);
  const { results } = await db
    .prepare('SELECT DISTINCT category FROM recipes WHERE published = 1 ORDER BY category ASC')
    .all<{ category: string }>();
  return (results ?? []).map((r) => r.category);
}

export async function insertRecipe(db: D1Database, recipe: RecipeRecord): Promise<void> {
  assertDb(db);
  await db
    .prepare(
      `INSERT INTO recipes (
        slug, version, title, category, description, hero_image_url,
        meta_title, meta_description, keywords, ingredients, steps, nutrition,
        tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
        difficulty, servings, related_recipes, schema_markup, published
      ) VALUES (
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?
      )
      ON CONFLICT(slug) DO UPDATE SET
        version          = excluded.version,
        title            = excluded.title,
        category         = excluded.category,
        description      = excluded.description,
        hero_image_url   = excluded.hero_image_url,
        meta_title       = excluded.meta_title,
        meta_description = excluded.meta_description,
        keywords         = excluded.keywords,
        ingredients      = excluded.ingredients,
        steps            = excluded.steps,
        nutrition        = excluded.nutrition,
        tips             = excluded.tips,
        youtube_query    = excluded.youtube_query,
        youtube_video_id = excluded.youtube_video_id,
        prep_time        = excluded.prep_time,
        cook_time        = excluded.cook_time,
        total_time       = excluded.total_time,
        difficulty       = excluded.difficulty,
        servings         = excluded.servings,
        related_recipes  = excluded.related_recipes,
        schema_markup    = excluded.schema_markup,
        published        = excluded.published,
        updated_at       = datetime('now')`
    )
    .bind(
      recipe.slug,
      recipe.version,
      recipe.title,
      recipe.category,
      recipe.description,
      recipe.hero_image_url,
      recipe.meta_title,
      recipe.meta_description,
      JSON.stringify(recipe.keywords),
      JSON.stringify(recipe.ingredients),
      JSON.stringify(recipe.steps),
      JSON.stringify(recipe.nutrition),
      JSON.stringify(recipe.tips),
      recipe.youtube_query,
      recipe.youtube_video_id ?? null,
      recipe.prep_time ?? null,
      recipe.cook_time ?? null,
      recipe.total_time ?? null,
      recipe.difficulty ?? null,
      recipe.servings ?? null,
      JSON.stringify(recipe.related_recipes ?? []),
      recipe.schema_markup ?? null,
      recipe.published ? 1 : 0
    )
    .run();
}
