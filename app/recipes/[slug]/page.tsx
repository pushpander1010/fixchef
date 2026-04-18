export const runtime = 'edge';

import { notFound } from 'next/navigation';
import { getRequestContext } from '@cloudflare/next-on-pages';
import type { Metadata } from 'next';

import { getRecipeBySlug, getAllPublishedSlugs } from '@/lib/db';
import { generateRecipeMetadata, generateRecipeJsonLd } from '@/lib/seo';

import RecipeHero from '@/components/RecipeHero';
import IngredientsList from '@/components/IngredientsList';
import StepGuide from '@/components/StepGuide';
import NutritionBlock from '@/components/NutritionBlock';
import TipsSection from '@/components/TipsSection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AdSlot from '@/components/AdSlot';
import RecipeChatbot from '@/components/RecipeChatbot';

export const revalidate = 3600;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { env } = getRequestContext();
  const slugs = await getAllPublishedSlugs(env.DB);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { env } = getRequestContext();
  const recipe = await getRecipeBySlug(env.DB, params.slug);
  if (!recipe) return {};
  return generateRecipeMetadata(recipe);
}

export default async function RecipePage({ params }: PageProps) {
  const { env } = getRequestContext();
  const recipe = await getRecipeBySlug(env.DB, params.slug);

  if (!recipe) {
    notFound();
  }

  const jsonLd = generateRecipeJsonLd(recipe);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        <RecipeHero recipe={recipe} />

        <AdSlot slot="above-ingredients" />

        <IngredientsList ingredients={recipe.ingredients} />

        <StepGuide steps={recipe.steps} />

        <AdSlot slot="between-steps-tips" />

        <NutritionBlock nutrition={recipe.nutrition} />

        <TipsSection tips={recipe.tips} />

        <YouTubeEmbed videoId={recipe.youtube_video_id} />

        <AdSlot slot="sidebar-below-video" />

        <RecipeChatbot recipe={recipe} />
      </main>
    </>
  );
}
