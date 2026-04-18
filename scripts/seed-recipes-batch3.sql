INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'new-york-cheesecake', 1, 'New York Cheesecake', 'Sweets',
  'A dense, creamy New York-style cheesecake with a buttery graham cracker crust. Baked low and slow for a silky, crack-free top. The gold standard of cheesecakes.', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'New York Cheesecake Recipe', 'Dense, creamy New York cheesecake with graham cracker crust. Baked low and slow for a perfect crack-free top.',
  '["cheesecake","new york cheesecake","baked cheesecake","cream cheese dessert","classic dessert"]', '[{"name":"Cream cheese","quantity":"900","unit":"g"},{"name":"Caster sugar","quantity":"200","unit":"g"},{"name":"Eggs","quantity":"4","unit":"large"},{"name":"Sour cream","quantity":"200","unit":"g"},{"name":"Vanilla extract","quantity":"2","unit":"tsp"},{"name":"Graham crackers or digestive biscuits","quantity":"200","unit":"g"},{"name":"Butter (melted)","quantity":"80","unit":"g"},{"name":"Plain flour","quantity":"2","unit":"tbsp"}]', '[{"order":1,"instruction":"Crush biscuits and mix with melted butter. Press firmly into the base of a 23cm springform tin. Chill 20 minutes."},{"order":2,"instruction":"Preheat oven to 160C. Beat cream cheese and sugar until smooth. Add flour and mix."},{"order":3,"instruction":"Add eggs one at a time, mixing on low speed. Fold in sour cream and vanilla."},{"order":4,"instruction":"Pour filling over the crust. Bake 60-70 minutes until the edges are set but the centre still wobbles."},{"order":5,"instruction":"Turn off the oven, crack the door open, and let the cheesecake cool inside for 1 hour. This prevents cracking."},{"order":6,"instruction":"Refrigerate at least 4 hours or overnight before slicing. Serve plain or with berry compote."}]',
  '{"calories":480,"protein_g":8,"carbs_g":36,"fat_g":34,"serving_size":"1 slice"}', '["All ingredients must be at room temperature for a smooth, lump-free batter.","Do not overmix after adding eggs -- it incorporates too much air and causes cracks.","The slow oven cool-down is the key to a crack-free top.","Wrap the tin in foil and bake in a water bath for extra insurance against cracking."]', 'new york cheesecake recipe',
  '9cZjyVxoai4', '30 minutes', '70 minutes', '6 hours (including chilling)',
  'Medium', '12 servings', '["red-velvet-cake","carrot-cake","tiramisu"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'red-velvet-cake', 1, 'Red Velvet Cake', 'Baking',
  'A striking crimson cake with a subtle cocoa flavour and velvety crumb, layered with tangy cream cheese frosting. A showstopper for any celebration.', 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Red Velvet Cake Recipe', 'Classic red velvet cake with cream cheese frosting. A stunning, velvety celebration cake ready in 1 hour.',
  '["red velvet cake","cream cheese frosting","celebration cake","layer cake","baking"]', '[{"name":"Plain flour","quantity":"280","unit":"g"},{"name":"Caster sugar","quantity":"300","unit":"g"},{"name":"Cocoa powder","quantity":"2","unit":"tbsp"},{"name":"Buttermilk","quantity":"240","unit":"ml"},{"name":"Vegetable oil","quantity":"240","unit":"ml"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Red food colouring","quantity":"2","unit":"tbsp"},{"name":"Baking soda","quantity":"1","unit":"tsp"},{"name":"White vinegar","quantity":"1","unit":"tsp"},{"name":"Cream cheese","quantity":"450","unit":"g"},{"name":"Icing sugar","quantity":"300","unit":"g"}]', '[{"order":1,"instruction":"Preheat oven to 175C. Whisk flour, sugar, cocoa, and salt. In another bowl, whisk oil, eggs, buttermilk, food colouring, and vanilla."},{"order":2,"instruction":"Combine wet and dry ingredients. Mix baking soda with vinegar, then fold into batter."},{"order":3,"instruction":"Divide between two greased 23cm cake tins. Bake 30-35 minutes until a skewer comes out clean."},{"order":4,"instruction":"Cool completely. Beat cream cheese until smooth, then beat in icing sugar and vanilla for the frosting."},{"order":5,"instruction":"Level the cake layers. Spread frosting between layers and over the top and sides. Decorate with cake crumbs."}]',
  '{"calories":520,"protein_g":6,"carbs_g":68,"fat_g":26,"serving_size":"1 slice"}', '["Gel food colouring gives a more vibrant red than liquid colouring.","The vinegar and baking soda reaction gives the cake its lift -- do not skip.","Chill the frosted cake for 30 minutes before slicing for clean layers.","Crumble the levelled cake tops to use as decoration on the finished cake."]', 'red velvet cake recipe',
  'cMPUB3DUssA', '30 minutes', '35 minutes', '2 hours (including cooling)',
  'Medium', '12 servings', '["new-york-cheesecake","carrot-cake","chocolate-chip-cookies"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'carrot-cake', 1, 'Carrot Cake', 'Baking',
  'A moist, warmly spiced carrot cake packed with grated carrots, walnuts, and cinnamon, topped with a thick layer of tangy cream cheese frosting. A timeless classic.', 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Carrot Cake Recipe', 'Moist spiced carrot cake with walnuts and cream cheese frosting. A timeless classic ready in under 1 hour.',
  '["carrot cake","cream cheese frosting","spiced cake","moist cake","baking"]', '[{"name":"Plain flour","quantity":"260","unit":"g"},{"name":"Grated carrots","quantity":"300","unit":"g"},{"name":"Caster sugar","quantity":"250","unit":"g"},{"name":"Vegetable oil","quantity":"200","unit":"ml"},{"name":"Eggs","quantity":"3","unit":"large"},{"name":"Ground cinnamon","quantity":"2","unit":"tsp"},{"name":"Ground ginger","quantity":"1","unit":"tsp"},{"name":"Baking powder","quantity":"2","unit":"tsp"},{"name":"Walnuts (chopped)","quantity":"100","unit":"g"},{"name":"Cream cheese","quantity":"300","unit":"g"},{"name":"Icing sugar","quantity":"200","unit":"g"}]', '[{"order":1,"instruction":"Preheat oven to 180C. Whisk flour, sugar, spices, baking powder, and salt."},{"order":2,"instruction":"Beat oil and eggs together. Fold into dry ingredients until just combined. Fold in grated carrots and walnuts."},{"order":3,"instruction":"Pour into a greased 23cm tin. Bake 45-50 minutes until a skewer comes out clean."},{"order":4,"instruction":"Cool completely. Beat cream cheese, icing sugar, and vanilla until smooth and fluffy."},{"order":5,"instruction":"Spread frosting generously over the cooled cake. Top with walnut halves."}]',
  '{"calories":490,"protein_g":6,"carbs_g":58,"fat_g":26,"serving_size":"1 slice"}', '["Squeeze excess moisture from the grated carrots in a clean towel for a less dense cake.","Brown sugar instead of caster sugar adds extra moisture and a caramel note.","Toast the walnuts before adding for deeper flavour.","The cake keeps well for 3 days in the fridge -- the flavour improves overnight."]', 'carrot cake recipe',
  'xD_en-IdGdQ', '20 minutes', '50 minutes', '1 hour 30 minutes',
  'Easy', '12 servings', '["red-velvet-cake","new-york-cheesecake","banana-bread"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'apple-pie', 1, 'Classic Apple Pie', 'Baking',
  'A golden, flaky double-crust pie filled with cinnamon-spiced apples and brown sugar. The quintessential American dessert, best served warm with vanilla ice cream.', 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Apple Pie Recipe', 'Golden flaky apple pie with cinnamon-spiced filling. The classic American dessert, best served warm with ice cream.',
  '["apple pie","classic pie","american dessert","cinnamon apple","baking"]', '[{"name":"Plain flour","quantity":"300","unit":"g"},{"name":"Cold butter","quantity":"200","unit":"g"},{"name":"Apples (Granny Smith)","quantity":"1","unit":"kg"},{"name":"Brown sugar","quantity":"150","unit":"g"},{"name":"Ground cinnamon","quantity":"2","unit":"tsp"},{"name":"Ground nutmeg","quantity":"0.25","unit":"tsp"},{"name":"Lemon juice","quantity":"1","unit":"tbsp"},{"name":"Cornstarch","quantity":"2","unit":"tbsp"},{"name":"Egg (for egg wash)","quantity":"1","unit":"large"}]', '[{"order":1,"instruction":"Make pastry: rub cold butter into flour until breadcrumb-like. Add 4-5 tbsp ice water and bring together. Divide in two, wrap, and chill 1 hour."},{"order":2,"instruction":"Peel, core, and slice apples. Toss with sugar, cinnamon, nutmeg, lemon juice, and cornstarch."},{"order":3,"instruction":"Preheat oven to 200C. Roll out one pastry disc and line a 23cm pie dish. Add apple filling."},{"order":4,"instruction":"Roll out second disc and place over the filling. Trim, crimp edges, and cut steam vents. Brush with egg wash."},{"order":5,"instruction":"Bake 20 minutes at 200C, then reduce to 180C and bake 30-35 minutes more until golden and bubbling."},{"order":6,"instruction":"Cool at least 2 hours before slicing so the filling sets. Serve with vanilla ice cream."}]',
  '{"calories":420,"protein_g":4,"carbs_g":62,"fat_g":18,"serving_size":"1 slice"}', '["Keep all pastry ingredients cold -- warm butter makes a tough, not flaky crust.","Granny Smith apples hold their shape best; mix with Braeburn for extra sweetness.","The cornstarch thickens the juices so the filling is not watery when sliced.","Cover the edges with foil if they brown too quickly before the filling is done."]', 'classic apple pie recipe',
  'TukUuB5JBdw', '1 hour 30 minutes (including chilling)', '55 minutes', '3 hours',
  'Medium', '8 servings', '["new-york-cheesecake","carrot-cake","blueberry-muffins"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'fudgy-brownies', 1, 'Fudgy Chocolate Brownies', 'Baking',
  'Ultra-fudgy, dense chocolate brownies with a crinkly top and gooey centre. Made with melted dark chocolate and brown butter for maximum depth of flavour.', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Fudgy Chocolate Brownies Recipe', 'Ultra-fudgy brownies with crinkly top and gooey centre. Made with dark chocolate and brown butter for maximum flavour.',
  '["brownies","fudgy brownies","chocolate brownies","baking","easy dessert"]', '[{"name":"Dark chocolate (70%)","quantity":"200","unit":"g"},{"name":"Unsalted butter","quantity":"150","unit":"g"},{"name":"Caster sugar","quantity":"250","unit":"g"},{"name":"Brown sugar","quantity":"50","unit":"g"},{"name":"Eggs","quantity":"3","unit":"large"},{"name":"Plain flour","quantity":"80","unit":"g"},{"name":"Cocoa powder","quantity":"30","unit":"g"},{"name":"Salt","quantity":"0.5","unit":"tsp"},{"name":"Vanilla extract","quantity":"1","unit":"tsp"}]', '[{"order":1,"instruction":"Preheat oven to 180C. Line a 20x20cm tin with baking paper."},{"order":2,"instruction":"Brown butter in a saucepan until golden and nutty. Pour over chopped chocolate and stir until melted and smooth."},{"order":3,"instruction":"Whisk both sugars into the chocolate mixture. Add eggs and vanilla, whisking vigorously for 2 minutes until glossy."},{"order":4,"instruction":"Fold in flour, cocoa, and salt until just combined -- do not overmix."},{"order":5,"instruction":"Pour into the tin. Bake 22-25 minutes until the top is set and crinkly but the centre still has a slight wobble."},{"order":6,"instruction":"Cool completely in the tin before cutting. The fudgy texture sets as it cools."}]',
  '{"calories":320,"protein_g":4,"carbs_g":42,"fat_g":16,"serving_size":"1 brownie"}', '["Underbaking is the secret to fudgy brownies -- pull them out when the centre still wobbles.","Brown butter adds a deep, nutty flavour that elevates the whole brownie.","Whisk the eggs and sugar vigorously -- this creates the signature crinkly top.","Refrigerate overnight for an even fudgier texture."]', 'fudgy chocolate brownies recipe',
  'ZJy1ajvMU1k', '15 minutes', '25 minutes', '1 hour (including cooling)',
  'Easy', '16 brownies', '["chocolate-chip-cookies","chocolate-lava-cake","red-velvet-cake"]', 1
);
