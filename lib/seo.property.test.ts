/**
 * Property-based tests for SEO metadata completeness
 *
 * Property 5: SEO metadata completeness
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4
 *
 * For any RecipeRecord, `generateRecipeMetadata` SHALL return a metadata object
 * whose `title` equals the recipe's `meta_title`, whose `description` equals the
 * recipe's `meta_description`, and whose `openGraph` object contains non-empty
 * `title`, `description`, and `images` fields.
 *
 * `generateRecipeJsonLd` SHALL return a JSON-LD string that, when parsed, contains
 * all required schema.org/Recipe fields: `name`, `image`, `description`,
 * `recipeIngredient`, `recipeInstructions`, `nutrition`.
 */

import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { generateRecipeMetadata, generateRecipeJsonLd } from './seo';
import type { RecipeRecord } from './types';

// Arbitrary for a valid Ingredient
const ingredientArb = fc.record({
  name: fc.string({ minLength: 1 }),
  quantity: fc.string({ minLength: 1 }),
  unit: fc.string({ minLength: 1 }),
});

// Arbitrary for a valid Step
const stepArb = fc.record({
  order: fc.integer({ min: 1, max: 100 }),
  instruction: fc.string({ minLength: 1 }),
});

// Arbitrary for a valid Nutrition object
const nutritionArb = fc.record({
  calories: fc.float({ min: 0, max: 5000, noNaN: true }),
  protein_g: fc.float({ min: 0, max: 500, noNaN: true }),
  carbs_g: fc.float({ min: 0, max: 500, noNaN: true }),
  fat_g: fc.float({ min: 0, max: 500, noNaN: true }),
  serving_size: fc.string({ minLength: 1 }),
});

// Arbitrary for a valid slug (lowercase alphanumeric + hyphens)
const slugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 100);

// Arbitrary for a valid HTTPS URL
const urlArb = fc.webUrl({ validSchemes: ['https'] });

// Arbitrary for a complete valid RecipeRecord
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
  published: fc.boolean(),
});

describe('SEO metadata property tests', () => {
  /**
   * **Validates: Requirements 3.1, 3.2**
   *
   * Property 5a: generateRecipeMetadata title and description
   * For any RecipeRecord, the returned metadata's `title` equals `meta_title`
   * and `description` equals `meta_description`.
   */
  it('generateRecipeMetadata title equals meta_title and description equals meta_description', () => {
    fc.assert(
      fc.property(validRecipeArb, (recipe) => {
        const metadata = generateRecipeMetadata(recipe);
        return (
          metadata.title === recipe.meta_title &&
          metadata.description === recipe.meta_description
        );
      }),
      { numRuns: 100 }
    );
  });

  /**
   * **Validates: Requirements 3.4**
   *
   * Property 5b: generateRecipeMetadata openGraph fields are non-empty
   * For any RecipeRecord, the returned metadata's `openGraph` object contains
   * non-empty `title`, `description`, and `images` fields.
   */
  it('generateRecipeMetadata openGraph contains non-empty title, description, and images', () => {
    fc.assert(
      fc.property(validRecipeArb, (recipe) => {
        const metadata = generateRecipeMetadata(recipe);
        const og = metadata.openGraph;
        if (!og) return false;

        const hasTitle = typeof og.title === 'string' && og.title.length > 0;
        const hasDescription =
          typeof og.description === 'string' && og.description.length > 0;

        // images can be an array of strings or OGImage objects
        const images = og.images;
        const hasImages =
          Array.isArray(images)
            ? images.length > 0
            : typeof images === 'string' && images.length > 0;

        return hasTitle && hasDescription && hasImages;
      }),
      { numRuns: 100 }
    );
  });

  /**
   * **Validates: Requirements 3.3**
   *
   * Property 5c: generateRecipeJsonLd contains all required schema.org/Recipe fields
   * For any RecipeRecord, the JSON-LD string, when parsed, contains:
   * `name`, `image`, `description`, `recipeIngredient`, `recipeInstructions`, `nutrition`.
   */
  it('generateRecipeJsonLd contains all required schema.org/Recipe fields', () => {
    fc.assert(
      fc.property(validRecipeArb, (recipe) => {
        const jsonLdString = generateRecipeJsonLd(recipe);
        const jsonLd = JSON.parse(jsonLdString) as Record<string, unknown>;

        const hasName = 'name' in jsonLd && jsonLd.name !== null && jsonLd.name !== undefined;
        const hasImage = 'image' in jsonLd && jsonLd.image !== null && jsonLd.image !== undefined;
        const hasDescription =
          'description' in jsonLd &&
          jsonLd.description !== null &&
          jsonLd.description !== undefined;
        const hasIngredients =
          'recipeIngredient' in jsonLd &&
          Array.isArray(jsonLd.recipeIngredient) &&
          (jsonLd.recipeIngredient as unknown[]).length > 0;
        const hasInstructions =
          'recipeInstructions' in jsonLd &&
          Array.isArray(jsonLd.recipeInstructions) &&
          (jsonLd.recipeInstructions as unknown[]).length > 0;
        const hasNutrition =
          'nutrition' in jsonLd &&
          jsonLd.nutrition !== null &&
          typeof jsonLd.nutrition === 'object';

        return (
          hasName &&
          hasImage &&
          hasDescription &&
          hasIngredients &&
          hasInstructions &&
          hasNutrition
        );
      }),
      { numRuns: 100 }
    );
  });
});
