import type { Metadata } from 'next';
import type { RecipeRecord } from './types';

const BASE_URL = 'https://fixchef.com';

/**
 * Generates a Next.js Metadata object for a recipe page.
 * Validates: Requirements 3.1, 3.2, 3.4, 3.5, 9.5
 */
export function generateRecipeMetadata(recipe: RecipeRecord): Metadata {
  const canonicalUrl = `${BASE_URL}/recipes/${recipe.slug}`;

  return {
    title: recipe.meta_title,
    description: recipe.meta_description,
    keywords: recipe.keywords,
    robots: recipe.published ? 'index, follow' : 'noindex, nofollow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: recipe.meta_title,
      description: recipe.meta_description,
      url: canonicalUrl,
      type: 'article',
      images: recipe.hero_image_url
        ? [{ url: recipe.hero_image_url, alt: recipe.title }]
        : [],
    },
  };
}

/**
 * Generates a schema.org/Recipe JSON-LD string for a recipe page.
 * Validates: Requirement 3.3
 */
export function generateRecipeJsonLd(recipe: RecipeRecord): string {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image: recipe.hero_image_url,
    description: recipe.description,
    keywords: recipe.keywords.join(', '),
    recipeIngredient: recipe.ingredients.map(
      (ing) => `${ing.quantity} ${ing.unit} ${ing.name}`.trim()
    ),
    recipeInstructions: recipe.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.order,
      text: step.instruction,
      ...(step.image_url ? { image: step.image_url } : {}),
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.nutrition.calories} calories`,
      proteinContent: `${recipe.nutrition.protein_g}g`,
      carbohydrateContent: `${recipe.nutrition.carbs_g}g`,
      fatContent: `${recipe.nutrition.fat_g}g`,
      servingSize: recipe.nutrition.serving_size,
    },
  };

  if (recipe.prep_time) jsonLd.prepTime = recipe.prep_time;
  if (recipe.cook_time) jsonLd.cookTime = recipe.cook_time;
  if (recipe.total_time) jsonLd.totalTime = recipe.total_time;
  if (recipe.servings) jsonLd.recipeYield = recipe.servings;

  return JSON.stringify(jsonLd);
}

/**
 * Generates a Next.js Metadata object for a category listing page.
 * Validates: Requirement 8.3
 */
export function generateCategoryMetadata(category: string): Metadata {
  const canonicalUrl = `${BASE_URL}/category/${category.toLowerCase().replace(/\s+/g, '-')}`;
  const title = `${category} Recipes | fixchef`;
  const description = `Browse all ${category} recipes on fixchef. Find easy, delicious ${category.toLowerCase()} dishes with step-by-step instructions.`;

  return {
    title,
    description,
    robots: 'index, follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}
