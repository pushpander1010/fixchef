import { z } from 'zod';
import type { RecipeRecord } from './types';

export const RecipeSchema = z.object({
  version: z.number().int().positive(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  hero_image_url: z.string().url(),
  meta_title: z.string().max(60),
  meta_description: z.string().max(160),
  keywords: z.array(z.string()).min(1),
  ingredients: z.array(z.object({
    name: z.string(),
    quantity: z.string(),
    unit: z.string(),
  })).min(1),
  steps: z.array(z.object({
    order: z.number().int(),
    instruction: z.string(),
    image_url: z.string().url().optional(),
  })).min(1),
  nutrition: z.object({
    calories: z.number(),
    protein_g: z.number(),
    carbs_g: z.number(),
    fat_g: z.number(),
    serving_size: z.string(),
  }),
  tips: z.array(z.string()),
  youtube_query: z.string().min(1),
  youtube_video_id: z.string().optional(),
  prep_time: z.string().optional(),
  cook_time: z.string().optional(),
  total_time: z.string().optional(),
  difficulty: z.string().optional(),
  servings: z.string().optional(),
  related_recipes: z.array(z.string()).optional(),
  schema_markup: z.string().optional(),
  published: z.boolean(),
});

/**
 * Validates an unknown value against RecipeSchema.
 * Returns the parsed RecipeRecord on success, or throws a ZodError on failure.
 */
export function validateRecipe(value: unknown): RecipeRecord {
  return RecipeSchema.parse(value) as RecipeRecord;
}
