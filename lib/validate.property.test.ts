/**
 * Property-based tests for RecipeSchema validation
 *
 * Property 2: Schema validation rejects incomplete records
 * Validates: Requirements 2.1, 2.2, 2.4
 */

import { describe, it } from 'vitest';
import * as fc from 'fast-check';
import { RecipeSchema } from './validate';

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

// Arbitrary for a valid URL
const urlArb = fc.webUrl({ validSchemes: ['https'] });

// Arbitrary for a complete valid RecipeRecord (all required fields, no optional fields)
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

// All required field keys
const requiredFields = [
  'version',
  'slug',
  'title',
  'category',
  'description',
  'hero_image_url',
  'meta_title',
  'meta_description',
  'keywords',
  'ingredients',
  'steps',
  'nutrition',
  'tips',
  'youtube_query',
  'published',
] as const;

type RequiredField = (typeof requiredFields)[number];

describe('RecipeSchema property tests', () => {
  /**
   * Property 2a: Valid records always pass schema validation
   * Validates: Requirements 2.1, 2.2, 2.4
   */
  it('valid records always pass schema validation', () => {
    fc.assert(
      fc.property(validRecipeArb, (record) => {
        const result = RecipeSchema.safeParse(record);
        return result.success === true;
      }),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2b: Schema validation rejects incomplete records
   * Validates: Requirements 2.1, 2.2, 2.4
   */
  it('records with a required field removed always fail schema validation', () => {
    fc.assert(
      fc.property(
        validRecipeArb,
        fc.constantFrom(...requiredFields),
        (record, fieldToRemove: RequiredField) => {
          const incomplete = { ...record } as Record<string, unknown>;
          delete incomplete[fieldToRemove];
          const result = RecipeSchema.safeParse(incomplete);
          return result.success === false;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2c: Schema validation rejects records with corrupted required fields
   * Validates: Requirements 2.1, 2.2, 2.4
   */
  it('records with a required field set to null always fail schema validation', () => {
    fc.assert(
      fc.property(
        validRecipeArb,
        fc.constantFrom(...requiredFields),
        (record, fieldToCorrupt: RequiredField) => {
          const corrupted = { ...record, [fieldToCorrupt]: null };
          const result = RecipeSchema.safeParse(corrupted);
          return result.success === false;
        }
      ),
      { numRuns: 100 }
    );
  });
});
