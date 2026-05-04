# Recipe Addition Guide for FixChef

This guide explains how to add new recipes to FixChef efficiently and ensure they're SEO-optimized.

## Quick Start

### 1. Use the Seed Script Pattern

Create a new batch file following the existing pattern:

```bash
# Copy the template
cp scripts/seed-recipes-batch3.js scripts/seed-recipes-batch5.js
```

### 2. Recipe Structure

Each recipe must include:

```javascript
{
  slug: "recipe-name",                    // URL-friendly, lowercase, hyphens
  version: 1,                             // Always 1 for new recipes
  title: "Recipe Display Name",           // Proper capitalization
  category: "Category Name",              // Must match CategoryCarousel categories
  description: "150-160 char description", // SEO-optimized, compelling
  hero_image_url: "https://...",          // Unsplash or similar (1080px wide)
  meta_title: "Recipe Name - Benefit",    // Max 60 chars, includes keyword
  meta_description: "Full description",   // 150-160 chars, action-oriented
  keywords: JSON.stringify([...]),        // 5-10 relevant keywords
  ingredients: JSON.stringify([...]),     // Array of {name, quantity, unit}
  steps: JSON.stringify([...]),           // Array of {order, instruction, image_url?}
  nutrition: JSON.stringify({...}),       // {calories, protein_g, carbs_g, fat_g, serving_size}
  tips: JSON.stringify([...]),            // 3-5 helpful cooking tips
  youtube_query: "search term",           // For finding video
  youtube_video_id: "abc123",             // Optional, from YouTube search
  prep_time: "15 minutes",                // Optional but recommended
  cook_time: "30 minutes",                // Optional but recommended
  total_time: "45 minutes",               // Optional but recommended
  difficulty: "Easy|Medium|Hard",         // Optional but recommended
  servings: "4 servings",                 // Optional but recommended
  related_recipes: JSON.stringify([...]), // Array of related recipe slugs
  published: 1,                           // 1 = published, 0 = draft
}
```

## Categories Available

Match these exactly (case-sensitive):

- **Sweets** - Desserts, cakes, cookies
- **Healthy** - Nutritious, balanced meals
- **Spicy** - Hot and spicy dishes
- **Mexican** - Mexican cuisine
- **Fast Foods** - Quick, casual meals
- **Gym & Fitness** - High-protein, workout meals
- **Diet** - Low-calorie, weight management
- **Sour** - Tangy, acidic flavors
- **Pasta** - All pasta dishes
- **Asian** - Asian cuisine (Chinese, Thai, Japanese, etc.)
- **Soups** - Soups and stews
- **Breakfast** - Morning meals
- **Meal Prep** - Make-ahead meals
- **Snacks** - Appetizers and snacks
- **Drinks** - Beverages and smoothies
- **Baking** - Breads, pastries, baked goods

## Finding Images (Unsplash)

Use the AI image search tool:

```bash
cd AI
python image_search.py "pasta carbonara food photography" --api-key $UNSPLASH_API_KEY --num 5
```

**Best practices:**
- Use "food photography" in search
- Pick images with good lighting
- Prefer overhead or 45-degree angles
- Use the `regular` URL (1080px, web-optimized)
- Avoid images with visible branding

## Finding YouTube Videos

Use the AI YouTube search tool:

```bash
cd AI
python youtube_search.py "chicken tikka masala recipe" --api-key $YOUTUBE_API_KEY
```

**Best practices:**
- Search for "[dish name] recipe"
- Prefer videos from established channels
- Check video length (5-15 minutes ideal)
- Verify the recipe matches yours
- Use the `video_id` returned

## SEO Optimization Checklist

### Meta Title (60 chars max)
✅ Include main keyword  
✅ Add benefit or descriptor  
✅ Format: "Dish Name - Benefit | FixChef"  
❌ Don't stuff keywords  

**Examples:**
- "Chicken Tikka Masala - Restaurant Quality"
- "Easy Chocolate Chip Cookies - Soft & Chewy"
- "Healthy Buddha Bowl - 30 Minutes"

### Meta Description (150-160 chars)
✅ Compelling, action-oriented  
✅ Include main keyword naturally  
✅ Mention key benefit (easy, quick, healthy)  
✅ End with call-to-action  

**Examples:**
- "Make restaurant-quality chicken tikka masala at home in 45 minutes. Tender chicken in a creamy, spiced tomato sauce. Perfect for weeknight dinners."
- "Soft, chewy chocolate chip cookies with crispy edges. This easy recipe uses brown butter for extra flavor. Ready in 30 minutes."

### Keywords Array
Include 5-10 relevant terms:
- Main dish name
- Variations (e.g., "tikka masala", "chicken tikka")
- Category (e.g., "indian food", "curry")
- Descriptors (e.g., "easy", "quick", "healthy")
- Cooking method (e.g., "baked", "grilled")

### Description Field
This appears on recipe cards and category pages:
- 150-160 characters
- Highlight what makes it special
- Use sensory language
- Mention difficulty/time if relevant

## Nutrition Information

Always include realistic nutrition data:

```javascript
nutrition: JSON.stringify({
  calories: 450,        // Per serving
  protein_g: 25,        // Grams of protein
  carbs_g: 35,          // Grams of carbohydrates
  fat_g: 20,            // Grams of fat
  serving_size: "1 bowl" // Clear serving description
})
```

**Tools for calculating:**
- [USDA FoodData Central](https://fdc.nal.usda.gov/)
- [Nutritionix](https://www.nutritionix.com/)
- [MyFitnessPal Recipe Calculator](https://www.myfitnesspal.com/recipe/calculator)

## Writing Great Steps

### Format:
```javascript
steps: JSON.stringify([
  { 
    order: 1, 
    instruction: "Preheat oven to 180°C. Line a baking tray with parchment paper.",
    image_url: "https://..." // Optional
  },
  { 
    order: 2, 
    instruction: "In a large bowl, whisk together flour, sugar, and salt until combined."
  },
  // ... more steps
])
```

### Best Practices:
- ✅ One action per step (or closely related actions)
- ✅ Start with action verb (Preheat, Mix, Add, Cook)
- ✅ Include temperatures, times, and measurements
- ✅ Mention visual cues ("until golden brown", "until doubled in size")
- ✅ Keep under 200 characters per step
- ❌ Don't combine unrelated actions
- ❌ Don't assume knowledge (explain techniques)

## Writing Helpful Tips

Include 3-5 tips that add value:

**Good tips:**
- Ingredient substitutions
- Make-ahead instructions
- Storage recommendations
- Common mistakes to avoid
- Technique explanations
- Flavor variations

**Examples:**
```javascript
tips: JSON.stringify([
  "Brown butter adds a nutty depth — watch carefully as it can burn quickly.",
  "Chill the dough for 30 minutes for thicker cookies that spread less.",
  "Use a cookie scoop for uniform size and even baking.",
  "Cookies continue cooking on the hot tray — remove when edges are set but centers still look slightly underdone."
])
```

## Related Recipes

Link to 3-5 related recipes by slug:

**Strategies:**
- Same category (other pasta dishes)
- Similar ingredients (other chicken recipes)
- Same meal type (other dinner mains)
- Complementary dishes (side dishes, desserts)

```javascript
related_recipes: JSON.stringify([
  "spaghetti-carbonara",
  "fettuccine-alfredo",
  "penne-arrabbiata"
])
```

## Running the Seed Script

### Local Development:
```bash
# Generate SQL file
node scripts/seed-recipes-batch5.js

# Apply to local database
npx wrangler d1 execute fixchef --local --file=scripts/seed-recipes-batch5.sql
```

### Production:
```bash
# Generate SQL file
node scripts/seed-recipes-batch5.js

# Apply to remote database (CAREFUL!)
npx wrangler d1 execute fixchef --remote --file=scripts/seed-recipes-batch5.sql
```

## Bulk Recipe Creation Strategy

### Phase 1: Core Recipes (100 recipes)
- 6-7 recipes per category
- Focus on popular, searchable dishes
- Cover basics (pasta, chicken, beef, vegetarian)

### Phase 2: Seasonal Recipes (50 recipes)
- Holiday-specific (Thanksgiving, Christmas, Easter)
- Seasonal ingredients (summer salads, winter soups)
- Special occasions (Valentine's Day, Super Bowl)

### Phase 3: Trending Recipes (50 recipes)
- Viral TikTok/Instagram recipes
- Current food trends (air fryer, meal prep)
- Diet-specific (keto, vegan, gluten-free)

### Phase 4: Long-Tail Keywords (100 recipes)
- "Easy weeknight [dish]"
- "30-minute [dish]"
- "Healthy [dish] for weight loss"
- "Budget-friendly [dish]"

## Recipe Naming Best Practices

### Slug (URL):
- All lowercase
- Hyphens for spaces
- No special characters
- Descriptive but concise
- Include main keyword

**Good:** `chicken-tikka-masala`, `chocolate-chip-cookies`  
**Bad:** `ctm`, `the-best-cookies-ever-made`

### Title (Display):
- Proper capitalization
- Clear and descriptive
- Include key descriptor if needed
- 40-60 characters ideal

**Good:** "Chicken Tikka Masala", "Classic Chocolate Chip Cookies"  
**Bad:** "The Ultimate Best Ever Chicken Tikka Masala Recipe"

## Quality Checklist

Before adding a recipe, verify:

- [ ] Slug is unique and URL-friendly
- [ ] Category matches exactly (case-sensitive)
- [ ] Meta title under 60 characters
- [ ] Meta description 150-160 characters
- [ ] Description is compelling and accurate
- [ ] Hero image is high-quality (1080px+)
- [ ] All ingredients have quantity and unit
- [ ] Steps are clear and sequential
- [ ] Nutrition info is realistic
- [ ] Tips add genuine value
- [ ] Related recipes exist in database
- [ ] YouTube video matches recipe (if included)
- [ ] Times (prep/cook/total) are accurate
- [ ] Difficulty level is appropriate
- [ ] No spelling or grammar errors

## Common Mistakes to Avoid

❌ **Category mismatch** - "Gym Fitness" instead of "Gym & Fitness"  
❌ **Missing JSON.stringify()** - Arrays and objects must be stringified  
❌ **Unescaped quotes** - Use `.replace(/'/g, "''")` for SQL  
❌ **Unrealistic nutrition** - 50g protein in a cookie is suspicious  
❌ **Vague steps** - "Cook until done" is not helpful  
❌ **Missing units** - "2 flour" should be "2 cups flour"  
❌ **Broken image URLs** - Always test image links  
❌ **Related recipes that don't exist** - Check slugs in database  

## Testing New Recipes

After adding recipes:

1. **Check local database:**
   ```bash
   npx wrangler d1 execute fixchef --local --command "SELECT slug, title, category FROM recipes WHERE published = 1 ORDER BY slug DESC LIMIT 10"
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Test pages:**
   - Homepage: http://localhost:3000
   - Category: http://localhost:3000/category/[category-slug]
   - Recipe: http://localhost:3000/recipes/[recipe-slug]

4. **Verify:**
   - [ ] Recipe appears in category
   - [ ] All images load
   - [ ] Nutrition block displays correctly
   - [ ] Steps are numbered properly
   - [ ] Tips section shows
   - [ ] YouTube embed works (if present)
   - [ ] Related recipes link correctly
   - [ ] Breadcrumbs are accurate
   - [ ] Meta tags are correct (view source)

## Batch Processing Tips

### For 50+ recipes:
1. Create a spreadsheet with all recipe data
2. Use a script to generate the JavaScript array
3. Validate all data before running
4. Test with 5 recipes first
5. Apply in batches of 25-50

### For images:
1. Batch search Unsplash with Python script
2. Save URLs to CSV
3. Import into recipe data

### For YouTube videos:
1. Batch search with Python script
2. Manual review for quality
3. Import video IDs

## Recipe Ideas by Category

### Sweets (20+ recipes needed)
- Chocolate lava cake, Tiramisu, Crème brûlée
- Panna cotta, Fruit tart, Lemon bars
- Macarons, Éclairs, Profiteroles

### Healthy (20+ recipes needed)
- Buddha bowls, Quinoa salads, Grilled fish
- Veggie stir-fries, Smoothie bowls, Overnight oats

### Spicy (15+ recipes needed)
- Spicy ramen, Hot wings, Jalapeño poppers
- Spicy Thai curry, Szechuan chicken

### Mexican (15+ recipes needed)
- Tacos, Burritos, Enchiladas, Quesadillas
- Nachos, Fajitas, Tamales, Pozole

### Fast Foods (20+ recipes needed)
- Burgers, Pizza, Fried chicken, Hot dogs
- Onion rings, Mozzarella sticks, Loaded fries

### Gym & Fitness (20+ recipes needed)
- Protein pancakes, Chicken breast meals
- Protein smoothies, Meal prep bowls

### Pasta (20+ recipes needed)
- Carbonara, Bolognese, Alfredo, Pesto
- Lasagna, Ravioli, Gnocchi, Mac and cheese

### Asian (25+ recipes needed)
- Pad Thai, Fried rice, Dumplings, Ramen
- Sushi, Pho, Bibimbap, Teriyaki

### Breakfast (20+ recipes needed)
- Pancakes, Waffles, French toast, Omelets
- Breakfast burritos, Eggs Benedict, Shakshuka

### Baking (20+ recipes needed)
- Sourdough, Croissants, Bagels, Focaccia
- Cinnamon rolls, Scones, Biscuits

## Resources

- **Unsplash API:** https://unsplash.com/developers
- **YouTube Data API:** https://developers.google.com/youtube/v3
- **USDA Nutrition:** https://fdc.nal.usda.gov/
- **Recipe Schema:** https://schema.org/Recipe
- **SEO Guide:** See `SEO_IMPROVEMENTS.md`

---

**Last Updated:** May 4, 2026  
**Maintained By:** FixChef Development Team
