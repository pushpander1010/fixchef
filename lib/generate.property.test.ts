/**
 * Property-based tests for content length invariants in the generate route
 *
 * Property 3: meta_title length invariant
 * Property 4: meta_description length invariant
 * Validates: Requirements 6.2, 6.3
 *
 * Strategy: The generate route calls OpenAI, parses the JSON response, then
 * validates it with RecipeSchema before returning. We test the invariants at
 * two levels:
 *
 * 1. Schema-level: RecipeSchema.safeParse rejects any record whose meta_title
 *    exceeds 60 chars or meta_description exceeds 160 chars — so a violating
 *    OpenAI response would never reach the caller.
 *
 * 2. Mock-route-level: Simulate the generate route's parse+validate pipeline
 *    with an arbitrary "OpenAI response" and assert that any recipe that
 *    passes the pipeline satisfies the length constraints.
 */

import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { RecipeSchema } from './validate';

// ---------------------------------------------------------------------------
// Shared arbitraries (mirrors validate.property.test.ts)
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

const slugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 100);

const urlArb = fc.webUrl({ validSchemes: ['https'] });

// ---------------------------------------------------------------------------
// Arbitrary for a "raw OpenAI response" — an object with arbitrary
// meta_title and meta_description lengths (may or may not be valid).
// ---------------------------------------------------------------------------

const rawOpenAiResponseArb = fc.record({
  version: fc.integer({ min: 1 }),
  slug: slugArb,
  title: fc.string({ minLength: 1 }),
  category: fc.string({ minLength: 1 }),
  description: fc.string({ minLength: 1 }),
  hero_image_url: urlArb,
  // Unconstrained lengths — simulates what an LLM might return
  meta_title: fc.string({ minLength: 1, maxLength: 120 }),
  meta_description: fc.string({ minLength: 1, maxLength: 320 }),
  keywords: fc.array(fc.string(), { minLength: 1 }),
  ingredients: fc.array(ingredientArb, { minLength: 1 }),
  steps: fc.array(stepArb, { minLength: 1 }),
  nutrition: nutritionArb,
  tips: fc.array(fc.string()),
  youtube_query: fc.string({ minLength: 1 }),
  published: fc.boolean(),
});

// ---------------------------------------------------------------------------
// Arbitrary for a valid recipe (all constraints satisfied)
// ---------------------------------------------------------------------------

const validRecipeArb = fc.record({
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
  published: fc.boolean(),
});

// ---------------------------------------------------------------------------
// Simulate the generate route's parse+validate pipeline
// ---------------------------------------------------------------------------

/**
 * Mirrors the logic in app/api/generate/route.ts:
 *   1. JSON.parse the raw string (here we skip serialisation and pass the object directly)
 *   2. RecipeSchema.safeParse
 *   3. Return the validated recipe or null on failure
 */
function simulateGeneratePipeline(rawResponse: unknown) {
  const result = RecipeSchema.safeParse(rawResponse);
  return result.success ? result.data : null;
}

// ---------------------------------------------------------------------------
// Arbitrary for a valid recipe with at least 3 related_recipes (Property 6)
// ---------------------------------------------------------------------------

const relatedSlugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 50);

const validRecipeWithRelatedArb = fc.record({
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
  related_recipes: fc.array(relatedSlugArb, { minLength: 3 }),
  published: fc.boolean(),
});

/**
 * Simulates the OpenAI mock: given a keyword, return a valid recipe structure.
 * The keyword is used to derive the slug/title so the test is keyword-driven.
 */
function mockOpenAiResponse(keyword: string, recipe: Record<string, unknown>): unknown {
  // Derive a valid slug from the keyword (kebab-case, lowercase, a-z0-9 and hyphens only)
  const slug = keyword
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    || 'recipe';
  return { ...recipe, slug };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Content length invariant property tests', () => {
  /**
   * Property 3: meta_title length invariant
   * Validates: Requirement 6.2
   *
   * For any recipe that passes the generate pipeline (RecipeSchema validation),
   * meta_title MUST be at most 60 characters.
   */
  it('meta_title is at most 60 characters for any recipe that passes the pipeline', () => {
    fc.assert(
      fc.property(rawOpenAiResponseArb, (rawResponse) => {
        const recipe = simulateGeneratePipeline(rawResponse);
        // If the pipeline rejected the record, the invariant is vacuously satisfied
        if (recipe === null) return true;
        return recipe.meta_title.length <= 60;
      }),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4: meta_description length invariant
   * Validates: Requirement 6.3
   *
   * For any recipe that passes the generate pipeline (RecipeSchema validation),
   * meta_description MUST be at most 160 characters.
   */
  it('meta_description is at most 160 characters for any recipe that passes the pipeline', () => {
    fc.assert(
      fc.property(rawOpenAiResponseArb, (rawResponse) => {
        const recipe = simulateGeneratePipeline(rawResponse);
        if (recipe === null) return true;
        return recipe.meta_description.length <= 160;
      }),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3+4 combined: Schema rejects records that violate either length constraint
   * Validates: Requirements 6.2, 6.3
   *
   * For any valid recipe, injecting an oversized meta_title or meta_description
   * causes RecipeSchema.safeParse to return success: false.
   */
  it('schema rejects meta_title longer than 60 characters', () => {
    fc.assert(
      fc.property(
        validRecipeArb,
        // Generate a string that is definitely over 60 chars
        fc.string({ minLength: 61, maxLength: 200 }),
        (recipe, longTitle) => {
          const result = RecipeSchema.safeParse({ ...recipe, meta_title: longTitle });
          return result.success === false;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('schema rejects meta_description longer than 160 characters', () => {
    fc.assert(
      fc.property(
        validRecipeArb,
        // Generate a string that is definitely over 160 chars
        fc.string({ minLength: 161, maxLength: 400 }),
        (recipe, longDesc) => {
          const result = RecipeSchema.safeParse({ ...recipe, meta_description: longDesc });
          return result.success === false;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 6: Generated recipe passes schema validation
   * Validates: Requirements 6.1, 6.4, 6.5
   *
   * For any keyword string, when the OpenAI mock returns a valid recipe structure,
   * RecipeSchema.safeParse() MUST return success: true and related_recipes MUST
   * contain at least 3 entries.
   */
  it('generated recipe passes schema validation and has at least 3 related_recipes', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }),
        validRecipeWithRelatedArb,
        (keyword, baseRecipe) => {
          // Simulate the OpenAI mock returning a valid recipe for the given keyword
          const mockResponse = mockOpenAiResponse(keyword, baseRecipe as Record<string, unknown>);
          const result = RecipeSchema.safeParse(mockResponse);

          // The mocked response must pass schema validation
          if (!result.success) return false;

          // related_recipes must have at least 3 entries (Requirement 6.5)
          const related = result.data.related_recipes ?? [];
          return related.length >= 3;
        }
      ),
      { numRuns: 100 }
    );
  });
});
