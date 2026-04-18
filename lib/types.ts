export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface Step {
  order: number;
  instruction: string;
  image_url?: string;
}

export interface Nutrition {
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  serving_size: string;
}

export interface RecipeRecord {
  version: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  hero_image_url: string;
  meta_title: string;          // max 60 chars
  meta_description: string;    // max 160 chars
  keywords: string[];
  ingredients: Ingredient[];
  steps: Step[];
  nutrition: Nutrition;
  tips: string[];
  youtube_query: string;
  youtube_video_id?: string;
  prep_time?: string;
  cook_time?: string;
  total_time?: string;
  difficulty?: string;
  servings?: string;
  related_recipes?: string[];
  schema_markup?: string;
  published: boolean;
}

// Lightweight projection for cards
export interface RecipeCardData {
  slug: string;
  title: string;
  hero_image_url: string;
  total_time?: string;
  difficulty?: string;
  category: string;
}

// Ad slot identifiers used by the AdSlot component
export type AdSlotId =
  | 'above-ingredients'
  | 'between-steps-tips'
  | 'sidebar-below-video'
  | 'homepage-below-first-category';
