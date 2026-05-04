# Indian Recipes Added to FixChef

## Summary
Successfully added **33 authentic Indian recipes** to FixChef covering all major regions and cuisines of India.

## File Generated
- **Location:** ixchef/scripts/seed-indian-recipes.sql
- **Size:** 92 KB
- **Records:** 33 INSERT statements

## How to Load the Recipes

### Option 1: Using Wrangler D1 (Local)
\\\ash
cd fixchef
npx wrangler d1 execute fixchef --local --file=scripts/seed-indian-recipes.sql
\\\

### Option 2: Using Wrangler D1 (Remote)
\\\ash
npx wrangler d1 execute fixchef --remote --file=scripts/seed-indian-recipes.sql
\\\

## Recipes Added (33 Total)

### North Indian Curries (7)
1. **Butter Chicken (Murgh Makhani)** - Creamy tomato-butter sauce with tender chicken
2. **Dal Makhani** - Slow-cooked black lentils with butter and cream
3. **Palak Paneer** - Spinach gravy with soft cottage cheese cubes
4. **Chicken Tikka Masala** - Grilled chicken in creamy tomato sauce
5. **Rogan Josh** - Kashmiri lamb curry with aromatic spices
6. **Chicken Korma** - Mughal-style creamy chicken with cashews
7. **Saag Aloo** - Spinach and potato curry

### Rice Dishes (4)
8. **Chicken Biryani** - Fragrant basmati rice with marinated chicken (dum-cooked)
9. **Mutton Biryani** - Rich lamb biryani with saffron rice
10. **Vegetable Biryani** - Colorful vegetable biryani
11. **Rajma Chawal** - Red kidney beans with steamed rice

### Vegetarian Curries (6)
12. **Chana Masala** - Spiced chickpea curry
13. **Aloo Gobi** - Potato and cauliflower stir-fry
14. **Matar Paneer** - Green peas with cottage cheese
15. **Aloo Paratha** - Stuffed potato flatbread
16. **Saag Aloo** - Spinach and potato curry
17. **Pav Bhaji** - Spiced vegetable mash with buttered bread

### South Indian Specialties (4)
18. **Masala Dosa** - Crispy rice crepe with potato filling
19. **Idli Sambar** - Steamed rice cakes with lentil soup
20. **Uttapam** - Thick rice pancakes with toppings
21. **Dhokla** - Steamed chickpea flour cakes

### Breads & Starches (3)
22. **Naan Bread** - Soft leavened flatbread with garlic butter
23. **Chole Bhature** - Spicy chickpea curry with fried bread
24. **Aloo Paratha** - Stuffed potato flatbread

### Seafood (1)
25. **Goan Fish Curry** - Coconut-based fish curry with kokum

### Meat Dishes (2)
26. **Tandoori Chicken** - Spiced grilled chicken
27. **Keema Matar** - Minced lamb with green peas

### Appetizers & Snacks (3)
28. **Paneer Tikka** - Grilled spiced cottage cheese
29. **Samosa** - Crispy pastry with potato filling
30. **Pani Puri (Golgappa)** - Crispy shells with spiced water

### Desserts (4)
31. **Gulab Jamun** - Milk dumplings in rose syrup
32. **Kheer** - Creamy rice pudding with cardamom
33. **Sooji Halwa** - Semolina pudding with ghee
34. **Jalebi** - Crispy syrup-soaked spirals

### Beverages (1)
35. **Mango Lassi** - Creamy mango yogurt drink

## Features of Each Recipe

Every recipe includes:
- ✅ Authentic description and background
- ✅ Complete ingredient list with quantities
- ✅ Step-by-step cooking instructions
- ✅ Nutritional information (calories, protein, carbs, fat)
- ✅ Helpful cooking tips and tricks
- ✅ YouTube video links for visual reference
- ✅ Prep time, cook time, and total time
- ✅ Difficulty level (Easy/Medium/Hard)
- ✅ Serving size
- ✅ Related recipe suggestions
- ✅ SEO-optimized meta titles and descriptions
- ✅ High-quality Unsplash images

## Category Added

The **Indian** category has been added to the CategoryCarousel with:
- Emoji: 🇮🇳
- Color: Orange (bg-orange-100 text-orange-800)
- Slug: indian

## Next Steps

1. **Load the recipes into your database:**
   \\\ash
   npx wrangler d1 execute fixchef --local --file=scripts/seed-indian-recipes.sql
   \\\

2. **Create the category page** (if not auto-generated):
   - Create app/category/indian/page.tsx
   - It will display all recipes with category: "Indian"

3. **Test the recipes:**
   - Visit /category/indian to see all Indian recipes
   - Click on individual recipes to view full details
   - Verify images, nutrition info, and YouTube links load correctly

## Recipe Breakdown by Region

- **North India:** Butter Chicken, Dal Makhani, Palak Paneer, Tandoori Chicken, Rogan Josh, Naan
- **South India:** Masala Dosa, Idli Sambar, Uttapam, Dhokla
- **Coastal (Goa):** Goan Fish Curry
- **Punjabi:** Chole Bhature, Aloo Paratha, Rajma Chawal
- **Mughal:** Chicken Korma, Biryani varieties
- **Street Food:** Pani Puri, Pav Bhaji, Samosa, Paneer Tikka
- **Festive/Desserts:** Gulab Jamun, Kheer, Jalebi, Sooji Halwa

## Notes

- All recipes use authentic spice blends and cooking techniques
- Nutritional values are approximate per serving
- YouTube video IDs are included for visual cooking guides
- Images are sourced from Unsplash (free, high-quality)
- Recipes are marked as published: 1 and ready to display
- All JSON fields (ingredients, steps, tips, related_recipes) are properly formatted

---

**Generated:** May 5, 2026
**Total Recipes:** 33
**File Size:** 92 KB
**Status:** Ready to load into D1 database
