#!/usr/bin/env node
/**
 * Seed script — inserts 5 starter recipes into the local D1 database.
 * Run with: npx wrangler d1 execute fixchef --local --file=scripts/seed-recipes.js
 * Or use the SQL output directly:
 *   node scripts/seed-recipes.js | npx wrangler d1 execute fixchef --local --command=-
 *
 * Actually easiest: node scripts/seed-recipes.js
 * This prints the INSERT SQL — pipe it or copy into wrangler d1 execute.
 */

const recipes = [
  {
    slug: "pasta-carbonara",
    version: 1,
    title: "Classic Pasta Carbonara",
    category: "Pasta",
    description: "A rich and creamy Roman pasta made with eggs, Pecorino Romano, guanciale, and black pepper. No cream needed — the silky sauce comes entirely from emulsified eggs and cheese.",
    hero_image_url: "https://images.unsplash.com/photo-1764586119076-61711e8ed25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    meta_title: "Classic Pasta Carbonara Recipe",
    meta_description: "Authentic Roman pasta carbonara with guanciale, eggs, and Pecorino Romano. Ready in 25 minutes — no cream needed.",
    keywords: JSON.stringify(["pasta carbonara", "italian pasta", "roman pasta", "carbonara recipe", "guanciale"]),
    ingredients: JSON.stringify([
      { name: "Spaghetti", quantity: "400", unit: "g" },
      { name: "Guanciale (or pancetta)", quantity: "150", unit: "g" },
      { name: "Egg yolks", quantity: "4", unit: "large" },
      { name: "Whole egg", quantity: "1", unit: "large" },
      { name: "Pecorino Romano", quantity: "80", unit: "g" },
      { name: "Black pepper", quantity: "2", unit: "tsp" },
      { name: "Salt", quantity: "1", unit: "tbsp" }
    ]),
    steps: JSON.stringify([
      { order: 1, instruction: "Bring a large pot of salted water to a boil. Cook spaghetti until al dente, reserving 1 cup of pasta water before draining." },
      { order: 2, instruction: "Cut guanciale into small cubes. Cook in a cold pan over medium heat until crispy and the fat has rendered, about 8 minutes. Remove from heat." },
      { order: 3, instruction: "Whisk egg yolks, whole egg, and grated Pecorino Romano together in a bowl. Season generously with black pepper." },
      { order: 4, instruction: "Add hot drained pasta to the pan with guanciale (off heat). Toss to coat in the fat." },
      { order: 5, instruction: "Add the egg mixture and a splash of pasta water. Toss vigorously — the residual heat cooks the eggs into a creamy sauce. Add more pasta water as needed." },
      { order: 6, instruction: "Serve immediately topped with extra Pecorino and cracked black pepper." }
    ]),
    nutrition: JSON.stringify({ calories: 620, protein_g: 28, carbs_g: 72, fat_g: 24, serving_size: "1 plate (approx 200g)" }),
    tips: JSON.stringify([
      "Never add cream — authentic carbonara gets its creaminess from the egg and cheese emulsion.",
      "Keep the pan off the heat when adding eggs to avoid scrambling.",
      "Guanciale (cured pork cheek) is traditional but pancetta works well too.",
      "Use freshly grated Pecorino, not pre-packaged — it melts much better."
    ]),
    youtube_query: "pasta carbonara recipe",
    youtube_video_id: "4w_kFO1kpTI",
    prep_time: "10 minutes",
    cook_time: "15 minutes",
    total_time: "25 minutes",
    difficulty: "Medium",
    servings: "4 servings",
    related_recipes: JSON.stringify(["chicken-tikka-masala", "beef-tacos", "avocado-toast"]),
    published: 1,
  },
  {
    slug: "chicken-tikka-masala",
    version: 1,
    title: "Chicken Tikka Masala",
    category: "Spicy",
    description: "Tender marinated chicken in a rich, smoky tomato-cream sauce spiced with garam masala, cumin, and coriander. One of the world's most beloved curry dishes.",
    hero_image_url: "https://images.unsplash.com/photo-1710091691777-3115088962c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    meta_title: "Chicken Tikka Masala Recipe",
    meta_description: "Juicy marinated chicken in a smoky tomato-cream curry sauce. Better than takeout and ready in 45 minutes.",
    keywords: JSON.stringify(["chicken tikka masala", "indian curry", "tikka masala", "spicy chicken", "indian food"]),
    ingredients: JSON.stringify([
      { name: "Chicken breast", quantity: "700", unit: "g" },
      { name: "Plain yogurt", quantity: "200", unit: "g" },
      { name: "Garam masala", quantity: "2", unit: "tsp" },
      { name: "Cumin", quantity: "1", unit: "tsp" },
      { name: "Turmeric", quantity: "0.5", unit: "tsp" },
      { name: "Garlic cloves", quantity: "4", unit: "cloves" },
      { name: "Fresh ginger", quantity: "2", unit: "cm" },
      { name: "Crushed tomatoes", quantity: "400", unit: "g" },
      { name: "Heavy cream", quantity: "150", unit: "ml" },
      { name: "Onion", quantity: "1", unit: "large" },
      { name: "Butter", quantity: "2", unit: "tbsp" }
    ]),
    steps: JSON.stringify([
      { order: 1, instruction: "Mix yogurt, 1 tsp garam masala, cumin, turmeric, half the garlic and ginger. Marinate chicken for at least 30 minutes (overnight is best)." },
      { order: 2, instruction: "Grill or pan-fry marinated chicken on high heat until charred in spots, about 5 minutes per side. Set aside." },
      { order: 3, instruction: "Melt butter in a large pan. Sauté diced onion until golden, about 8 minutes. Add remaining garlic and ginger, cook 2 minutes." },
      { order: 4, instruction: "Add remaining garam masala and crushed tomatoes. Simmer 15 minutes until sauce thickens." },
      { order: 5, instruction: "Stir in cream and add the grilled chicken. Simmer 5 minutes. Season with salt." },
      { order: 6, instruction: "Serve with basmati rice and naan bread. Garnish with fresh coriander." }
    ]),
    nutrition: JSON.stringify({ calories: 480, protein_g: 42, carbs_g: 18, fat_g: 26, serving_size: "1 bowl (approx 300g)" }),
    tips: JSON.stringify([
      "Marinating overnight makes the chicken incredibly tender.",
      "Char the chicken — those smoky bits are what give tikka masala its signature flavour.",
      "Add a pinch of sugar if the sauce tastes too acidic.",
      "Swap cream for coconut milk for a dairy-free version."
    ]),
    youtube_query: "chicken tikka masala recipe",
    youtube_video_id: "RnK6QMupaVE",
    prep_time: "40 minutes",
    cook_time: "30 minutes",
    total_time: "1 hour 10 minutes",
    difficulty: "Medium",
    servings: "4 servings",
    related_recipes: JSON.stringify(["pasta-carbonara", "beef-tacos", "avocado-toast"]),
    published: 1,
  },
  {
    slug: "chocolate-lava-cake",
    version: 1,
    title: "Chocolate Lava Cake",
    category: "Sweets",
    description: "Individual warm chocolate cakes with a gooey molten centre. Crispy on the outside, flowing dark chocolate inside — the ultimate dinner party dessert ready in 20 minutes.",
    hero_image_url: "https://images.unsplash.com/photo-1548865163-afb128596c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    meta_title: "Chocolate Lava Cake Recipe",
    meta_description: "Warm chocolate lava cakes with a molten centre. Ready in 20 minutes — the perfect impressive dessert.",
    keywords: JSON.stringify(["chocolate lava cake", "molten chocolate cake", "fondant au chocolat", "chocolate dessert", "easy dessert"]),
    ingredients: JSON.stringify([
      { name: "Dark chocolate (70%)", quantity: "150", unit: "g" },
      { name: "Butter", quantity: "100", unit: "g" },
      { name: "Eggs", quantity: "2", unit: "large" },
      { name: "Egg yolks", quantity: "2", unit: "large" },
      { name: "Caster sugar", quantity: "80", unit: "g" },
      { name: "Plain flour", quantity: "40", unit: "g" },
      { name: "Cocoa powder", quantity: "1", unit: "tbsp" },
      { name: "Vanilla extract", quantity: "1", unit: "tsp" }
    ]),
    steps: JSON.stringify([
      { order: 1, instruction: "Preheat oven to 200°C (180°C fan). Butter 4 ramekins and dust with cocoa powder." },
      { order: 2, instruction: "Melt chocolate and butter together in a heatproof bowl over simmering water. Stir until smooth. Cool slightly." },
      { order: 3, instruction: "Whisk eggs, egg yolks, and sugar together until pale and slightly thickened, about 3 minutes." },
      { order: 4, instruction: "Fold the chocolate mixture into the egg mixture. Sift in flour and fold gently until just combined." },
      { order: 5, instruction: "Divide batter between ramekins. Bake 10–12 minutes until the edges are set but the centre still wobbles." },
      { order: 6, instruction: "Run a knife around the edge, invert onto plates, and serve immediately with vanilla ice cream." }
    ]),
    nutrition: JSON.stringify({ calories: 420, protein_g: 8, carbs_g: 38, fat_g: 28, serving_size: "1 ramekin" }),
    tips: JSON.stringify([
      "The key is underbaking — pull them out when the edges are set but the middle jiggles.",
      "You can make the batter up to 24 hours ahead and refrigerate. Add 2 minutes to bake time if cold.",
      "Use good quality 70% dark chocolate — it makes a huge difference.",
      "Serve immediately — the lava sets within a few minutes of coming out of the oven."
    ]),
    youtube_query: "chocolate lava cake recipe",
    youtube_video_id: "1GcNr-amq5M",
    prep_time: "10 minutes",
    cook_time: "12 minutes",
    total_time: "22 minutes",
    difficulty: "Easy",
    servings: "4 servings",
    related_recipes: JSON.stringify(["avocado-toast", "pasta-carbonara", "beef-tacos"]),
    published: 1,
  },
  {
    slug: "avocado-toast",
    version: 1,
    title: "Perfect Avocado Toast",
    category: "Healthy",
    description: "Creamy smashed avocado on crispy sourdough with lemon, chilli flakes, and a poached egg. The ultimate healthy breakfast that takes 10 minutes and keeps you full for hours.",
    hero_image_url: "https://images.unsplash.com/photo-1561517146-dfbd99b0c14d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    meta_title: "Perfect Avocado Toast Recipe",
    meta_description: "Creamy smashed avocado on sourdough with poached egg and chilli flakes. Healthy, filling, and ready in 10 minutes.",
    keywords: JSON.stringify(["avocado toast", "healthy breakfast", "avocado recipe", "poached egg", "sourdough toast"]),
    ingredients: JSON.stringify([
      { name: "Sourdough bread", quantity: "2", unit: "thick slices" },
      { name: "Ripe avocado", quantity: "1", unit: "large" },
      { name: "Eggs", quantity: "2", unit: "large" },
      { name: "Lemon juice", quantity: "1", unit: "tbsp" },
      { name: "Chilli flakes", quantity: "0.5", unit: "tsp" },
      { name: "Salt & black pepper", quantity: "to taste", unit: "" },
      { name: "Extra virgin olive oil", quantity: "1", unit: "tsp" },
      { name: "White vinegar", quantity: "1", unit: "tbsp" }
    ]),
    steps: JSON.stringify([
      { order: 1, instruction: "Toast sourdough slices until golden and crispy." },
      { order: 2, instruction: "Halve the avocado, remove the stone, and scoop flesh into a bowl. Add lemon juice, salt, and pepper. Smash with a fork — keep it chunky." },
      { order: 3, instruction: "Bring a small pan of water to a gentle simmer. Add vinegar. Crack each egg into a small cup." },
      { order: 4, instruction: "Create a gentle whirlpool in the water and slide in the eggs. Poach for 3 minutes for a runny yolk." },
      { order: 5, instruction: "Spread smashed avocado generously on toast. Top with a poached egg." },
      { order: 6, instruction: "Drizzle with olive oil, sprinkle chilli flakes, and season. Serve immediately." }
    ]),
    nutrition: JSON.stringify({ calories: 320, protein_g: 14, carbs_g: 28, fat_g: 18, serving_size: "2 slices with eggs" }),
    tips: JSON.stringify([
      "Use a very ripe avocado — it should yield to gentle pressure.",
      "Fresh lemon juice stops the avocado browning and adds brightness.",
      "For extra flavour, rub the toast with a cut garlic clove while still hot.",
      "Add microgreens, everything bagel seasoning, or smoked salmon for variations."
    ]),
    youtube_query: "avocado toast recipe",
    youtube_video_id: "73wzm9wEt-Q",
    prep_time: "5 minutes",
    cook_time: "5 minutes",
    total_time: "10 minutes",
    difficulty: "Easy",
    servings: "2 servings",
    related_recipes: JSON.stringify(["chicken-tikka-masala", "chocolate-lava-cake", "beef-tacos"]),
    published: 1,
  },
  {
    slug: "beef-tacos",
    version: 1,
    title: "Crispy Beef Tacos",
    category: "Mexican",
    description: "Seasoned ground beef in crispy corn tortillas with fresh pico de gallo, shredded cheese, and lime crema. Street-style tacos that come together in 20 minutes.",
    hero_image_url: "https://images.unsplash.com/photo-1568127305183-bec960a6c5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    meta_title: "Crispy Beef Tacos Recipe",
    meta_description: "Seasoned ground beef tacos with pico de gallo and lime crema. Street-style Mexican tacos ready in 20 minutes.",
    keywords: JSON.stringify(["beef tacos", "mexican tacos", "ground beef tacos", "taco recipe", "mexican food"]),
    ingredients: JSON.stringify([
      { name: "Ground beef (80/20)", quantity: "500", unit: "g" },
      { name: "Corn tortillas", quantity: "8", unit: "small" },
      { name: "Taco seasoning", quantity: "2", unit: "tbsp" },
      { name: "Tomatoes", quantity: "2", unit: "medium" },
      { name: "White onion", quantity: "0.5", unit: "medium" },
      { name: "Fresh coriander", quantity: "handful", unit: "" },
      { name: "Lime", quantity: "2", unit: "limes" },
      { name: "Sour cream", quantity: "100", unit: "g" },
      { name: "Cheddar cheese", quantity: "80", unit: "g" },
      { name: "Jalapeño", quantity: "1", unit: "medium" }
    ]),
    steps: JSON.stringify([
      { order: 1, instruction: "Make pico de gallo: dice tomatoes, onion, and jalapeño. Mix with chopped coriander and juice of 1 lime. Season with salt." },
      { order: 2, instruction: "Mix sour cream with juice of half a lime and a pinch of salt to make lime crema." },
      { order: 3, instruction: "Brown ground beef in a hot pan over high heat, breaking it up. Drain excess fat." },
      { order: 4, instruction: "Add taco seasoning and 3 tbsp water. Stir and cook 2 minutes until fragrant and saucy." },
      { order: 5, instruction: "Warm tortillas directly over a gas flame or in a dry pan for 30 seconds each side until charred in spots." },
      { order: 6, instruction: "Assemble: spoon beef onto tortillas, top with pico de gallo, shredded cheese, and lime crema. Serve with lime wedges." }
    ]),
    nutrition: JSON.stringify({ calories: 390, protein_g: 26, carbs_g: 32, fat_g: 18, serving_size: "2 tacos" }),
    tips: JSON.stringify([
      "Use 80/20 ground beef — the fat content keeps it juicy and flavourful.",
      "Char the tortillas directly on the flame for authentic street taco flavour.",
      "Double up tortillas if they're small — it prevents them tearing.",
      "Make your own taco seasoning: cumin, chilli powder, garlic powder, oregano, paprika."
    ]),
    youtube_query: "beef tacos recipe",
    youtube_video_id: "cNLp6WhP2UI",
    prep_time: "10 minutes",
    cook_time: "10 minutes",
    total_time: "20 minutes",
    difficulty: "Easy",
    servings: "4 servings",
    related_recipes: JSON.stringify(["chicken-tikka-masala", "pasta-carbonara", "avocado-toast"]),
    published: 1,
  },
];

// Generate SQL INSERT statements
for (const r of recipes) {
  const sql = `INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  '${r.slug}', ${r.version}, '${r.title.replace(/'/g, "''")}', '${r.category}',
  '${r.description.replace(/'/g, "''")}', '${r.hero_image_url}',
  '${r.meta_title.replace(/'/g, "''")}', '${r.meta_description.replace(/'/g, "''")}',
  '${r.keywords}', '${r.ingredients.replace(/'/g, "''")}', '${r.steps.replace(/'/g, "''")}',
  '${r.nutrition}', '${r.tips.replace(/'/g, "''")}', '${r.youtube_query}',
  '${r.youtube_video_id}', '${r.prep_time}', '${r.cook_time}', '${r.total_time}',
  '${r.difficulty}', '${r.servings}', '${r.related_recipes}', ${r.published}
);`;
  console.log(sql);
}
