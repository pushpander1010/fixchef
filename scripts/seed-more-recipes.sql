INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'tiramisu', 1, 'Classic Tiramisu', 'Sweets',
  'A beloved Italian dessert made with espresso-soaked ladyfingers layered with a rich mascarpone cream. Dusted with cocoa powder and chilled overnight for the perfect silky texture.', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Tiramisu Recipe', 'Authentic Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream. No-bake and ready to chill overnight.',
  '["tiramisu","italian dessert","mascarpone","no-bake dessert","coffee dessert"]', '[{"name":"Ladyfinger biscuits","quantity":"200","unit":"g"},{"name":"Mascarpone cheese","quantity":"500","unit":"g"},{"name":"Eggs","quantity":"4","unit":"large"},{"name":"Caster sugar","quantity":"100","unit":"g"},{"name":"Strong espresso","quantity":"300","unit":"ml"},{"name":"Marsala wine or rum","quantity":"3","unit":"tbsp"},{"name":"Cocoa powder","quantity":"2","unit":"tbsp"},{"name":"Dark chocolate","quantity":"30","unit":"g"}]', '[{"order":1,"instruction":"Brew strong espresso and let it cool. Stir in marsala wine or rum and set aside."},{"order":2,"instruction":"Separate eggs. Beat yolks with sugar until pale and thick, about 4 minutes."},{"order":3,"instruction":"Fold mascarpone into the yolk mixture until smooth and creamy."},{"order":4,"instruction":"Whisk egg whites to stiff peaks and gently fold into the mascarpone mixture in two batches."},{"order":5,"instruction":"Quickly dip each ladyfinger into the espresso mixture (1–2 seconds per side) and arrange in a single layer in a dish."},{"order":6,"instruction":"Spread half the mascarpone cream over the ladyfingers. Repeat with another layer of dipped ladyfingers and remaining cream."},{"order":7,"instruction":"Dust generously with cocoa powder. Cover and refrigerate for at least 6 hours or overnight before serving."}]',
  '{"calories":420,"protein_g":9,"carbs_g":38,"fat_g":26,"serving_size":"1 slice (approx 150g)"}', '["Don''t over-soak the ladyfingers — a quick 1-second dip per side is enough to avoid a soggy base.","Overnight chilling is key; the flavours meld and the texture becomes perfectly set.","Use room-temperature mascarpone to prevent lumps when mixing.","Grate dark chocolate over the top along with cocoa for extra richness."]', 'classic tiramisu recipe',
  '', '30 minutes', '0 minutes', '6 hours 30 minutes (including chilling)',
  'Medium', '8 servings', '["creme-brulee","chocolate-chip-cookies","banana-foster"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'creme-brulee', 1, 'Crème Brûlée', 'Sweets',
  'A classic French custard dessert with a silky vanilla cream base and a perfectly caramelised sugar crust. The satisfying crack of the burnt sugar top is half the experience.', 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Crème Brûlée Recipe', 'Silky French vanilla custard with a caramelised sugar crust. An elegant dessert that''s easier than it looks.',
  '["creme brulee","french dessert","vanilla custard","caramel","baked dessert"]', '[{"name":"Heavy cream","quantity":"500","unit":"ml"},{"name":"Egg yolks","quantity":"5","unit":"large"},{"name":"Caster sugar","quantity":"100","unit":"g"},{"name":"Vanilla bean","quantity":"1","unit":"pod"},{"name":"Caster sugar (for topping)","quantity":"4","unit":"tbsp"},{"name":"Pinch of salt","quantity":"1","unit":"pinch"}]', '[{"order":1,"instruction":"Preheat oven to 150°C. Split vanilla bean and scrape seeds into cream. Heat cream until just simmering, then remove from heat and steep 10 minutes."},{"order":2,"instruction":"Whisk egg yolks with sugar and salt until pale. Slowly pour warm cream into yolks while whisking constantly."},{"order":3,"instruction":"Strain custard through a fine sieve into a jug. Skim off any foam."},{"order":4,"instruction":"Pour into 4 ramekins. Place in a deep baking tray and fill with hot water halfway up the sides."},{"order":5,"instruction":"Bake 35–40 minutes until just set with a slight wobble in the centre. Cool, then refrigerate at least 2 hours."},{"order":6,"instruction":"Sprinkle 1 tbsp sugar evenly over each custard. Torch until caramelised and golden. Serve immediately."}]',
  '{"calories":380,"protein_g":6,"carbs_g":28,"fat_g":28,"serving_size":"1 ramekin"}', '["The custard should wobble like jelly in the centre when done — it firms up as it cools.","Chill the custards thoroughly before torching so the heat only affects the sugar layer.","Use a kitchen torch for best results; the broiler works but is harder to control.","Superfine caster sugar caramelises more evenly than granulated sugar."]', 'creme brulee recipe',
  '', '15 minutes', '40 minutes', '3 hours (including chilling)',
  'Medium', '4 servings', '["tiramisu","chocolate-chip-cookies","banana-foster"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'banana-foster', 1, 'Bananas Foster', 'Sweets',
  'A New Orleans classic of caramelised bananas flambéed in rum and banana liqueur, served warm over vanilla ice cream. Dramatic, delicious, and ready in under 15 minutes.', 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Bananas Foster Recipe', 'Classic New Orleans bananas foster with caramel rum sauce served over vanilla ice cream. Ready in 15 minutes.',
  '["bananas foster","banana dessert","flambee","new orleans dessert","caramel banana"]', '[{"name":"Bananas","quantity":"4","unit":"ripe"},{"name":"Unsalted butter","quantity":"60","unit":"g"},{"name":"Brown sugar","quantity":"100","unit":"g"},{"name":"Dark rum","quantity":"60","unit":"ml"},{"name":"Banana liqueur","quantity":"30","unit":"ml"},{"name":"Cinnamon","quantity":"0.5","unit":"tsp"},{"name":"Vanilla ice cream","quantity":"4","unit":"scoops"}]', '[{"order":1,"instruction":"Peel bananas and slice in half lengthwise, then crosswise to make 4 pieces each."},{"order":2,"instruction":"Melt butter in a large skillet over medium heat. Add brown sugar and cinnamon, stirring until dissolved into a caramel sauce."},{"order":3,"instruction":"Add banana liqueur and stir to combine. Add banana pieces and cook 1–2 minutes per side until softened and coated."},{"order":4,"instruction":"Remove pan from heat. Add rum, then carefully tilt the pan or use a long lighter to flambé. Let flames die out naturally."},{"order":5,"instruction":"Spoon bananas and sauce over scoops of vanilla ice cream and serve immediately."}]',
  '{"calories":450,"protein_g":3,"carbs_g":68,"fat_g":16,"serving_size":"1 serving with ice cream"}', '["Use ripe but firm bananas — overripe ones will turn mushy in the pan.","Always remove the pan from heat before adding rum to control the flambé safely.","If you don''t want to flambé, simply stir the rum in and cook for 1 minute to burn off the alcohol.","Serve immediately — the sauce thickens as it cools."]', 'bananas foster recipe',
  '', '5 minutes', '10 minutes', '15 minutes',
  'Easy', '4 servings', '["tiramisu","creme-brulee","mango-sticky-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'churros', 1, 'Churros with Chocolate Sauce', 'Sweets',
  'Crispy fried Spanish dough sticks rolled in cinnamon sugar and served with a thick dark chocolate dipping sauce. Street-food perfection that you can make at home.', 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Churros with Chocolate Sauce Recipe', 'Crispy cinnamon churros with rich dark chocolate dipping sauce. Easy Spanish street food made at home.',
  '["churros","spanish dessert","fried dough","chocolate sauce","cinnamon sugar"]', '[{"name":"Water","quantity":"250","unit":"ml"},{"name":"Plain flour","quantity":"150","unit":"g"},{"name":"Butter","quantity":"30","unit":"g"},{"name":"Salt","quantity":"0.5","unit":"tsp"},{"name":"Caster sugar","quantity":"50","unit":"g"},{"name":"Ground cinnamon","quantity":"1","unit":"tsp"},{"name":"Dark chocolate","quantity":"150","unit":"g"},{"name":"Heavy cream","quantity":"100","unit":"ml"},{"name":"Vegetable oil (for frying)","quantity":"1","unit":"litre"}]', '[{"order":1,"instruction":"Bring water, butter, and salt to a boil. Remove from heat and stir in flour until a smooth dough forms. Cool 5 minutes."},{"order":2,"instruction":"Transfer dough to a piping bag fitted with a large star nozzle."},{"order":3,"instruction":"Heat oil to 180°C. Pipe 10cm lengths of dough directly into the oil, cutting with scissors. Fry in batches for 3–4 minutes until golden."},{"order":4,"instruction":"Drain on paper towels, then roll immediately in cinnamon sugar mixture."},{"order":5,"instruction":"Make chocolate sauce: heat cream until simmering, pour over chopped chocolate, and stir until smooth."},{"order":6,"instruction":"Serve churros warm with chocolate sauce for dipping."}]',
  '{"calories":380,"protein_g":5,"carbs_g":52,"fat_g":18,"serving_size":"4 churros with sauce"}', '["Keep the oil temperature steady at 180°C — too hot and they burn outside before cooking through.","Roll in cinnamon sugar while still hot so it sticks properly.","The dough should be thick enough to hold its shape when piped — add a little more flour if too loose.","Add a pinch of cayenne to the chocolate sauce for a spicy kick."]', 'churros with chocolate sauce recipe',
  '', '15 minutes', '20 minutes', '35 minutes',
  'Medium', '4 servings', '["tiramisu","banana-foster","mango-sticky-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'mango-sticky-rice', 1, 'Mango Sticky Rice', 'Sweets',
  'A beloved Thai dessert of sweet glutinous rice soaked in coconut milk, served alongside fresh ripe mango slices. Simple, fragrant, and utterly satisfying.', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Mango Sticky Rice Recipe', 'Thai mango sticky rice with sweet coconut milk sauce. A simple, fragrant dessert ready in 40 minutes.',
  '["mango sticky rice","thai dessert","coconut rice","glutinous rice","mango dessert"]', '[{"name":"Glutinous (sticky) rice","quantity":"300","unit":"g"},{"name":"Coconut milk","quantity":"400","unit":"ml"},{"name":"Sugar","quantity":"80","unit":"g"},{"name":"Salt","quantity":"0.5","unit":"tsp"},{"name":"Ripe mangoes","quantity":"2","unit":"large"},{"name":"Sesame seeds or mung beans","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Soak glutinous rice in cold water for at least 1 hour (or overnight). Drain well."},{"order":2,"instruction":"Steam rice over boiling water for 20–25 minutes until tender and translucent."},{"order":3,"instruction":"Warm coconut milk with sugar and salt until sugar dissolves. Reserve 3 tbsp for topping."},{"order":4,"instruction":"Pour most of the coconut milk over the hot rice and stir gently. Cover and let absorb for 15 minutes."},{"order":5,"instruction":"Peel and slice mangoes. Serve rice alongside mango slices, drizzled with reserved coconut sauce and sprinkled with sesame seeds."}]',
  '{"calories":390,"protein_g":5,"carbs_g":72,"fat_g":10,"serving_size":"1 serving"}', '["Soaking the rice overnight gives the best texture — don''t skip this step.","Use Alphonso or Ataulfo mangoes when in season for the sweetest flavour.","The rice should be sticky but not gluey — don''t over-steam.","Serve at room temperature, not cold — chilling makes the rice hard."]', 'mango sticky rice recipe',
  '', '1 hour 10 minutes (including soaking)', '25 minutes', '1 hour 50 minutes',
  'Easy', '4 servings', '["tiramisu","churros","banana-foster"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'quinoa-buddha-bowl', 1, 'Quinoa Buddha Bowl', 'Healthy',
  'A nourishing bowl of fluffy quinoa topped with roasted vegetables, chickpeas, avocado, and a creamy tahini dressing. Packed with plant-based protein and vibrant colour.', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Quinoa Buddha Bowl Recipe', 'Nourishing quinoa buddha bowl with roasted veggies, chickpeas, and tahini dressing. Vegan and ready in 35 minutes.',
  '["buddha bowl","quinoa bowl","healthy bowl","vegan meal","tahini dressing"]', '[{"name":"Quinoa","quantity":"200","unit":"g"},{"name":"Chickpeas (canned)","quantity":"400","unit":"g"},{"name":"Sweet potato","quantity":"1","unit":"large"},{"name":"Broccoli florets","quantity":"200","unit":"g"},{"name":"Avocado","quantity":"1","unit":"ripe"},{"name":"Tahini","quantity":"3","unit":"tbsp"},{"name":"Lemon juice","quantity":"2","unit":"tbsp"},{"name":"Olive oil","quantity":"2","unit":"tbsp"}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Cube sweet potato and toss with olive oil and salt. Roast 25 minutes until golden."},{"order":2,"instruction":"Drain and rinse chickpeas. Toss with olive oil, cumin, and paprika. Add to the roasting tray for the last 15 minutes."},{"order":3,"instruction":"Cook quinoa in 400ml salted water for 15 minutes until fluffy. Fluff with a fork."},{"order":4,"instruction":"Steam or blanch broccoli for 3 minutes until bright green and tender-crisp."},{"order":5,"instruction":"Make tahini dressing: whisk tahini, lemon juice, 2 tbsp water, garlic, and salt until smooth."},{"order":6,"instruction":"Assemble bowls with quinoa as the base, topped with all vegetables and chickpeas. Drizzle with tahini dressing and serve."}]',
  '{"calories":480,"protein_g":18,"carbs_g":62,"fat_g":18,"serving_size":"1 bowl"}', '["Rinse quinoa before cooking to remove its natural bitter coating (saponin).","Roast chickpeas until crispy for the best texture — they add a satisfying crunch.","The tahini dressing thickens as it sits; thin with a splash of water if needed.","Prep components ahead and assemble bowls throughout the week for easy meal prep."]', 'quinoa buddha bowl recipe',
  '', '10 minutes', '25 minutes', '35 minutes',
  'Easy', '2 servings', '["greek-salad","overnight-oats","salmon-salad"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'greek-salad', 1, 'Classic Greek Salad', 'Healthy',
  'A refreshing Mediterranean salad of ripe tomatoes, cucumber, red onion, Kalamata olives, and creamy feta cheese dressed with extra virgin olive oil and oregano. No lettuce needed.', 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Greek Salad Recipe', 'Authentic Greek salad with tomatoes, feta, olives, and olive oil. Fresh, healthy, and ready in 10 minutes.',
  '["greek salad","mediterranean salad","feta salad","healthy salad","horiatiki"]', '[{"name":"Ripe tomatoes","quantity":"4","unit":"medium"},{"name":"Cucumber","quantity":"1","unit":"large"},{"name":"Red onion","quantity":"0.5","unit":"medium"},{"name":"Kalamata olives","quantity":"80","unit":"g"},{"name":"Feta cheese","quantity":"200","unit":"g"},{"name":"Extra virgin olive oil","quantity":"4","unit":"tbsp"},{"name":"Dried oregano","quantity":"1","unit":"tsp"},{"name":"Salt and black pepper","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Cut tomatoes into large wedges. Slice cucumber into thick half-moons. Thinly slice red onion."},{"order":2,"instruction":"Combine tomatoes, cucumber, red onion, and olives in a large bowl."},{"order":3,"instruction":"Place a large slab of feta on top (traditional style) or crumble it over."},{"order":4,"instruction":"Drizzle generously with olive oil. Sprinkle with oregano, salt, and black pepper."},{"order":5,"instruction":"Serve immediately with crusty bread to mop up the juices."}]',
  '{"calories":280,"protein_g":10,"carbs_g":12,"fat_g":22,"serving_size":"1 serving"}', '["Use the ripest, most flavourful tomatoes you can find — they make or break this salad.","Don''t toss the salad; serve it assembled so the feta stays intact.","Soak red onion slices in cold water for 10 minutes to mellow their sharpness.","A splash of red wine vinegar adds brightness if your tomatoes aren''t very acidic."]', 'classic greek salad recipe',
  '', '10 minutes', '0 minutes', '10 minutes',
  'Easy', '4 servings', '["quinoa-buddha-bowl","salmon-salad","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'salmon-salad', 1, 'Grilled Salmon Salad', 'Healthy',
  'Flaky grilled salmon fillet over a bed of mixed greens, cherry tomatoes, cucumber, and avocado with a zesty lemon-dill dressing. High in omega-3s and ready in 20 minutes.', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Grilled Salmon Salad Recipe', 'Flaky grilled salmon over mixed greens with lemon-dill dressing. Healthy, high-protein, and ready in 20 minutes.',
  '["salmon salad","grilled salmon","healthy salad","omega-3","lemon dill dressing"]', '[{"name":"Salmon fillets","quantity":"2","unit":"x 180g"},{"name":"Mixed salad greens","quantity":"100","unit":"g"},{"name":"Cherry tomatoes","quantity":"150","unit":"g"},{"name":"Cucumber","quantity":"0.5","unit":"medium"},{"name":"Avocado","quantity":"1","unit":"ripe"},{"name":"Lemon","quantity":"1","unit":"large"},{"name":"Fresh dill","quantity":"2","unit":"tbsp"},{"name":"Olive oil","quantity":"3","unit":"tbsp"}]', '[{"order":1,"instruction":"Season salmon with salt, pepper, and a drizzle of olive oil."},{"order":2,"instruction":"Heat a grill pan over high heat. Cook salmon skin-side down for 4 minutes, then flip and cook 2–3 minutes more. Rest 2 minutes."},{"order":3,"instruction":"Make dressing: whisk olive oil, lemon juice, chopped dill, salt, and pepper."},{"order":4,"instruction":"Halve cherry tomatoes, slice cucumber, and dice avocado."},{"order":5,"instruction":"Arrange greens on plates. Top with vegetables and flaked salmon. Drizzle with dressing and serve."}]',
  '{"calories":420,"protein_g":38,"carbs_g":10,"fat_g":26,"serving_size":"1 plate"}', '["Don''t move the salmon while it''s cooking — let it release naturally from the pan for clean grill marks.","Salmon is done when it flakes easily with a fork and is opaque throughout.","Make the dressing ahead and store in the fridge for up to 3 days.","Add capers or pickled red onion for extra tang."]', 'grilled salmon salad recipe',
  '', '10 minutes', '10 minutes', '20 minutes',
  'Easy', '2 servings', '["greek-salad","quinoa-buddha-bowl","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'overnight-oats', 1, 'Overnight Oats', 'Healthy',
  'Creamy no-cook oats soaked overnight in milk and yogurt, topped with fresh berries and honey. A grab-and-go breakfast that takes 5 minutes to prepare the night before.', 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Overnight Oats Recipe', 'Creamy overnight oats with berries and honey. A 5-minute prep healthy breakfast ready when you wake up.',
  '["overnight oats","healthy breakfast","no-cook oats","meal prep breakfast","oatmeal"]', '[{"name":"Rolled oats","quantity":"80","unit":"g"},{"name":"Milk (or plant milk)","quantity":"150","unit":"ml"},{"name":"Greek yogurt","quantity":"80","unit":"g"},{"name":"Chia seeds","quantity":"1","unit":"tbsp"},{"name":"Honey or maple syrup","quantity":"1","unit":"tbsp"},{"name":"Vanilla extract","quantity":"0.5","unit":"tsp"},{"name":"Mixed berries","quantity":"100","unit":"g"},{"name":"Banana","quantity":"0.5","unit":"medium"}]', '[{"order":1,"instruction":"Combine oats, milk, yogurt, chia seeds, honey, and vanilla in a jar or container. Stir well."},{"order":2,"instruction":"Cover and refrigerate overnight or for at least 6 hours."},{"order":3,"instruction":"In the morning, stir the oats — they should be thick and creamy. Add a splash more milk if too thick."},{"order":4,"instruction":"Top with fresh berries, sliced banana, and an extra drizzle of honey. Serve cold."}]',
  '{"calories":340,"protein_g":14,"carbs_g":52,"fat_g":8,"serving_size":"1 jar"}', '["Use rolled oats, not instant — they hold their texture better overnight.","Chia seeds thicken the oats and add omega-3s; don''t skip them.","Prep 5 jars on Sunday for a full week of breakfasts.","Try peanut butter and banana, or apple and cinnamon as flavour variations."]', 'overnight oats recipe',
  '', '5 minutes', '0 minutes', '6 hours 5 minutes (including overnight soak)',
  'Easy', '1 serving', '["quinoa-buddha-bowl","greek-salad","protein-pancakes"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'spicy-ramen', 1, 'Spicy Tonkotsu Ramen', 'Spicy',
  'A fiery bowl of rich pork bone broth loaded with ramen noodles, soft-boiled egg, chashu pork, and a generous spoonful of chilli paste. Deep, complex, and warming.', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Spicy Tonkotsu Ramen Recipe', 'Rich pork bone broth ramen with chilli paste, chashu pork, and soft-boiled egg. A fiery Japanese comfort bowl.',
  '["spicy ramen","tonkotsu ramen","japanese ramen","spicy noodles","ramen recipe"]', '[{"name":"Ramen noodles","quantity":"300","unit":"g"},{"name":"Pork belly (for chashu)","quantity":"400","unit":"g"},{"name":"Pork or chicken broth","quantity":"1.5","unit":"litres"},{"name":"Miso paste","quantity":"3","unit":"tbsp"},{"name":"Gochujang (Korean chilli paste)","quantity":"2","unit":"tbsp"},{"name":"Soy sauce","quantity":"2","unit":"tbsp"},{"name":"Eggs","quantity":"4","unit":"large"},{"name":"Spring onions","quantity":"4","unit":"stalks"},{"name":"Sesame oil","quantity":"1","unit":"tbsp"},{"name":"Nori sheets","quantity":"4","unit":"sheets"}]', '[{"order":1,"instruction":"Roll pork belly tightly and tie with twine. Sear all sides in a hot pan, then braise in soy sauce, mirin, and water for 90 minutes. Slice when cool."},{"order":2,"instruction":"Soft-boil eggs for 6.5 minutes, then transfer to an ice bath. Peel and marinate in soy sauce and mirin for at least 1 hour."},{"order":3,"instruction":"Heat broth in a large pot. Whisk in miso paste, gochujang, and soy sauce. Simmer 10 minutes."},{"order":4,"instruction":"Cook ramen noodles according to package instructions. Drain and divide between bowls."},{"order":5,"instruction":"Ladle hot broth over noodles. Top with sliced chashu, halved marinated egg, spring onions, nori, and a drizzle of sesame oil."}]',
  '{"calories":680,"protein_g":42,"carbs_g":58,"fat_g":28,"serving_size":"1 bowl"}', '["The longer you simmer the broth, the richer and more gelatinous it becomes.","Marinate the eggs overnight for a deeply flavoured, jammy centre.","Adjust gochujang to your heat preference — start with 1 tbsp and add more.","Add a knob of butter to the broth for extra richness."]', 'spicy tonkotsu ramen recipe',
  '', '30 minutes', '2 hours', '2 hours 30 minutes',
  'Hard', '4 servings', '["buffalo-wings","thai-green-curry","spicy-shrimp-tacos"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'buffalo-wings', 1, 'Buffalo Chicken Wings', 'Spicy',
  'Crispy baked chicken wings tossed in a tangy, buttery hot sauce and served with cool blue cheese dip and celery sticks. The ultimate game-day snack.', 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Buffalo Chicken Wings Recipe', 'Crispy buffalo wings with tangy hot sauce and blue cheese dip. The perfect game-day snack ready in 50 minutes.',
  '["buffalo wings","chicken wings","hot wings","spicy wings","game day food"]', '[{"name":"Chicken wings","quantity":"1","unit":"kg"},{"name":"Baking powder","quantity":"1","unit":"tbsp"},{"name":"Hot sauce (Frank''s RedHot)","quantity":"120","unit":"ml"},{"name":"Unsalted butter","quantity":"60","unit":"g"},{"name":"Garlic powder","quantity":"1","unit":"tsp"},{"name":"Salt and pepper","quantity":"to taste","unit":""},{"name":"Blue cheese dressing","quantity":"100","unit":"ml"},{"name":"Celery sticks","quantity":"4","unit":"stalks"}]', '[{"order":1,"instruction":"Pat wings completely dry with paper towels. Toss with baking powder, salt, and pepper. Refrigerate uncovered for 1 hour (or overnight) for extra crispiness."},{"order":2,"instruction":"Preheat oven to 220°C. Place wings on a wire rack over a baking tray. Bake 45–50 minutes, flipping halfway, until golden and crispy."},{"order":3,"instruction":"Melt butter in a saucepan. Stir in hot sauce and garlic powder. Keep warm."},{"order":4,"instruction":"Toss hot wings in buffalo sauce until fully coated."},{"order":5,"instruction":"Serve immediately with blue cheese dressing and celery sticks."}]',
  '{"calories":520,"protein_g":38,"carbs_g":4,"fat_g":38,"serving_size":"6 wings"}', '["Baking powder (not soda) is the secret to crispy oven-baked wings — it raises the pH and helps browning.","Drying the wings in the fridge overnight makes them even crispier.","For extra heat, add a pinch of cayenne to the buffalo sauce.","Don''t sauce the wings until just before serving or they''ll lose their crispiness."]', 'crispy buffalo chicken wings recipe',
  '', '10 minutes', '50 minutes', '1 hour',
  'Easy', '4 servings', '["spicy-ramen","spicy-shrimp-tacos","loaded-fries"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'thai-green-curry', 1, 'Thai Green Curry', 'Spicy',
  'A fragrant and fiery Thai curry made with green curry paste, coconut milk, chicken, and fresh vegetables. Aromatic with lemongrass, kaffir lime, and Thai basil.', 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Thai Green Curry Recipe', 'Fragrant Thai green curry with coconut milk, chicken, and Thai basil. Spicy, aromatic, and ready in 30 minutes.',
  '["thai green curry","green curry","thai food","coconut curry","spicy curry"]', '[{"name":"Chicken thighs","quantity":"600","unit":"g"},{"name":"Green curry paste","quantity":"3","unit":"tbsp"},{"name":"Coconut milk","quantity":"400","unit":"ml"},{"name":"Fish sauce","quantity":"2","unit":"tbsp"},{"name":"Palm sugar or brown sugar","quantity":"1","unit":"tbsp"},{"name":"Kaffir lime leaves","quantity":"4","unit":"leaves"},{"name":"Thai basil","quantity":"handful","unit":""},{"name":"Zucchini","quantity":"1","unit":"medium"},{"name":"Vegetable oil","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Heat oil in a wok over high heat. Fry curry paste for 1–2 minutes until fragrant."},{"order":2,"instruction":"Add thick coconut cream from the top of the can and cook, stirring, until it splits and the oil separates."},{"order":3,"instruction":"Add chicken pieces and stir to coat. Cook 3 minutes."},{"order":4,"instruction":"Pour in remaining coconut milk. Add fish sauce, sugar, and kaffir lime leaves. Simmer 15 minutes."},{"order":5,"instruction":"Add sliced zucchini and cook 3 minutes more until tender."},{"order":6,"instruction":"Stir in Thai basil. Taste and adjust seasoning. Serve with jasmine rice."}]',
  '{"calories":520,"protein_g":36,"carbs_g":14,"fat_g":36,"serving_size":"1 bowl with rice"}', '["Frying the curry paste in coconut cream until it splits is the key step — don''t rush it.","Use chicken thighs, not breast — they stay juicy and tender in the curry.","Kaffir lime leaves are essential for authentic flavour; find them at Asian grocery stores.","Add a squeeze of lime juice at the end to brighten the flavours."]', 'thai green curry recipe',
  '', '10 minutes', '25 minutes', '35 minutes',
  'Medium', '4 servings', '["spicy-ramen","buffalo-wings","spicy-shrimp-tacos"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'spicy-shrimp-tacos', 1, 'Spicy Shrimp Tacos', 'Spicy',
  'Juicy shrimp seasoned with chipotle and lime, served in warm corn tortillas with crunchy slaw and a creamy sriracha mayo. Bold, fresh, and ready in 20 minutes.', 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Spicy Shrimp Tacos Recipe', 'Chipotle shrimp tacos with crunchy slaw and sriracha mayo. Bold, fresh, and ready in just 20 minutes.',
  '["shrimp tacos","spicy tacos","chipotle shrimp","seafood tacos","mexican food"]', '[{"name":"Large shrimp (peeled)","quantity":"500","unit":"g"},{"name":"Chipotle powder","quantity":"1","unit":"tsp"},{"name":"Corn tortillas","quantity":"8","unit":"small"},{"name":"Cabbage","quantity":"200","unit":"g"},{"name":"Lime","quantity":"2","unit":"limes"},{"name":"Mayonnaise","quantity":"4","unit":"tbsp"},{"name":"Sriracha","quantity":"2","unit":"tsp"},{"name":"Fresh coriander","quantity":"handful","unit":""},{"name":"Garlic powder","quantity":"0.5","unit":"tsp"}]', '[{"order":1,"instruction":"Toss shrimp with chipotle powder, garlic powder, salt, and juice of 1 lime. Marinate 10 minutes."},{"order":2,"instruction":"Shred cabbage finely. Toss with a pinch of salt and juice of half a lime to make a quick slaw."},{"order":3,"instruction":"Mix mayonnaise with sriracha and a squeeze of lime for the spicy mayo."},{"order":4,"instruction":"Cook shrimp in a hot pan with a little oil for 1–2 minutes per side until pink and cooked through."},{"order":5,"instruction":"Warm tortillas in a dry pan. Assemble tacos with slaw, shrimp, sriracha mayo, and fresh coriander."}]',
  '{"calories":360,"protein_g":28,"carbs_g":34,"fat_g":12,"serving_size":"2 tacos"}', '["Don''t overcook the shrimp — they turn rubbery fast. Remove from heat as soon as they curl into a C shape.","Pat shrimp dry before seasoning so they sear rather than steam.","Add mango salsa for a sweet-heat contrast.","Double the sriracha mayo — it''s great as a dipping sauce too."]', 'spicy shrimp tacos recipe',
  '', '10 minutes', '10 minutes', '20 minutes',
  'Easy', '4 servings', '["buffalo-wings","thai-green-curry","guacamole"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'guacamole', 1, 'Fresh Guacamole', 'Mexican',
  'Chunky, vibrant guacamole made with ripe Hass avocados, fresh lime juice, jalapeño, and coriander. The only guacamole recipe you will ever need — ready in 10 minutes.', 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Fresh Guacamole Recipe', 'Chunky homemade guacamole with ripe avocado, lime, jalapeño, and coriander. Ready in 10 minutes.',
  '["guacamole","avocado dip","mexican dip","fresh guacamole","avocado recipe"]', '[{"name":"Ripe Hass avocados","quantity":"3","unit":"large"},{"name":"Lime juice","quantity":"2","unit":"tbsp"},{"name":"Jalapeño","quantity":"1","unit":"medium"},{"name":"Red onion","quantity":"0.25","unit":"medium"},{"name":"Fresh coriander","quantity":"3","unit":"tbsp"},{"name":"Garlic clove","quantity":"1","unit":"clove"},{"name":"Salt","quantity":"0.75","unit":"tsp"},{"name":"Tomato","quantity":"1","unit":"medium"}]', '[{"order":1,"instruction":"Halve and pit avocados. Scoop flesh into a bowl."},{"order":2,"instruction":"Add lime juice and salt. Mash with a fork to your preferred texture — chunky or smooth."},{"order":3,"instruction":"Finely dice jalapeño (remove seeds for less heat), red onion, and tomato. Mince garlic."},{"order":4,"instruction":"Fold in jalapeño, onion, tomato, garlic, and chopped coriander."},{"order":5,"instruction":"Taste and adjust lime juice and salt. Serve immediately with tortilla chips."}]',
  '{"calories":180,"protein_g":2,"carbs_g":10,"fat_g":16,"serving_size":"3 tbsp"}', '["Only use ripe avocados — they should yield to gentle pressure and have dark, pebbly skin.","Press plastic wrap directly onto the surface of the guacamole to prevent browning.","The lime juice is essential — it adds flavour and slows oxidation.","Make it just before serving for the freshest flavour and colour."]', 'fresh guacamole recipe',
  '', '10 minutes', '0 minutes', '10 minutes',
  'Easy', '6 servings', '["chicken-enchiladas","quesadillas","mexican-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'chicken-enchiladas', 1, 'Chicken Enchiladas', 'Mexican',
  'Tender shredded chicken wrapped in corn tortillas, smothered in a rich red enchilada sauce, and baked under a blanket of melted cheese. A crowd-pleasing Mexican classic.', 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Chicken Enchiladas Recipe', 'Shredded chicken enchiladas with red sauce and melted cheese. A classic Mexican bake ready in 45 minutes.',
  '["chicken enchiladas","enchiladas recipe","mexican bake","shredded chicken","mexican food"]', '[{"name":"Chicken breasts","quantity":"600","unit":"g"},{"name":"Corn tortillas","quantity":"8","unit":"medium"},{"name":"Enchilada sauce (canned)","quantity":"400","unit":"ml"},{"name":"Cheddar cheese (shredded)","quantity":"200","unit":"g"},{"name":"Onion","quantity":"1","unit":"medium"},{"name":"Garlic cloves","quantity":"2","unit":"cloves"},{"name":"Cumin","quantity":"1","unit":"tsp"},{"name":"Sour cream","quantity":"100","unit":"g"}]', '[{"order":1,"instruction":"Poach chicken breasts in salted water for 15 minutes. Shred with two forks."},{"order":2,"instruction":"Sauté diced onion and garlic until soft. Add shredded chicken, cumin, and half the enchilada sauce. Stir to combine."},{"order":3,"instruction":"Preheat oven to 190°C. Spread a thin layer of enchilada sauce on the bottom of a baking dish."},{"order":4,"instruction":"Warm tortillas briefly to make them pliable. Fill each with chicken mixture, roll tightly, and place seam-side down in the dish."},{"order":5,"instruction":"Pour remaining enchilada sauce over the top. Sprinkle with shredded cheese."},{"order":6,"instruction":"Bake 20–25 minutes until cheese is bubbly and golden. Serve with sour cream and fresh coriander."}]',
  '{"calories":480,"protein_g":36,"carbs_g":38,"fat_g":20,"serving_size":"2 enchiladas"}', '["Warm tortillas in a damp paper towel in the microwave so they roll without cracking.","Use rotisserie chicken to save time — just shred and season.","Add black beans and corn to the filling for extra texture and nutrition.","Cover with foil for the first 15 minutes to prevent the cheese from burning."]', 'chicken enchiladas recipe',
  '', '20 minutes', '25 minutes', '45 minutes',
  'Medium', '4 servings', '["guacamole","mexican-rice","quesadillas"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'mexican-rice', 1, 'Mexican Rice', 'Mexican',
  'Fluffy, tomato-infused rice cooked with garlic, cumin, and chicken broth. The perfect side dish for any Mexican meal — simple, flavourful, and ready in 30 minutes.', 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Mexican Rice Recipe', 'Fluffy tomato-infused Mexican rice with garlic and cumin. The perfect side for tacos and enchiladas.',
  '["mexican rice","spanish rice","tomato rice","side dish","mexican food"]', '[{"name":"Long-grain white rice","quantity":"300","unit":"g"},{"name":"Tomato passata","quantity":"200","unit":"ml"},{"name":"Chicken broth","quantity":"400","unit":"ml"},{"name":"Onion","quantity":"0.5","unit":"medium"},{"name":"Garlic cloves","quantity":"2","unit":"cloves"},{"name":"Cumin","quantity":"1","unit":"tsp"},{"name":"Vegetable oil","quantity":"2","unit":"tbsp"},{"name":"Salt","quantity":"1","unit":"tsp"}]', '[{"order":1,"instruction":"Heat oil in a heavy-bottomed pan over medium-high heat. Add dry rice and toast, stirring, for 3–4 minutes until golden."},{"order":2,"instruction":"Add diced onion and minced garlic. Cook 2 minutes until softened."},{"order":3,"instruction":"Stir in cumin, then add tomato passata. Cook 1 minute."},{"order":4,"instruction":"Pour in chicken broth and salt. Bring to a boil, then reduce heat to low."},{"order":5,"instruction":"Cover tightly and cook 18 minutes. Remove from heat and let steam, covered, for 5 minutes."},{"order":6,"instruction":"Fluff with a fork and serve garnished with fresh coriander."}]',
  '{"calories":260,"protein_g":5,"carbs_g":52,"fat_g":4,"serving_size":"1 cup cooked"}', '["Toasting the dry rice before adding liquid is the key to fluffy, separate grains.","Don''t lift the lid while the rice is cooking — the steam is what cooks it evenly.","Use homemade or good-quality chicken broth for the best flavour.","Add frozen peas and corn in the last 5 minutes for a more complete side dish."]', 'mexican rice recipe',
  '', '5 minutes', '25 minutes', '30 minutes',
  'Easy', '4 servings', '["chicken-enchiladas","guacamole","quesadillas"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'quesadillas', 1, 'Cheese Quesadillas', 'Mexican',
  'Crispy flour tortillas filled with melted cheese and your choice of fillings, cooked until golden and served with salsa and sour cream. A quick, satisfying meal in 15 minutes.', 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Cheese Quesadillas Recipe', 'Crispy cheese quesadillas with salsa and sour cream. A quick Mexican meal ready in just 15 minutes.',
  '["quesadillas","cheese quesadilla","mexican food","quick meal","tortilla recipe"]', '[{"name":"Large flour tortillas","quantity":"4","unit":"large"},{"name":"Cheddar or Monterey Jack cheese","quantity":"200","unit":"g"},{"name":"Bell pepper","quantity":"1","unit":"medium"},{"name":"Onion","quantity":"0.5","unit":"medium"},{"name":"Jalapeño","quantity":"1","unit":"medium"},{"name":"Salsa","quantity":"100","unit":"ml"},{"name":"Sour cream","quantity":"100","unit":"g"},{"name":"Butter","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Sauté sliced bell pepper and onion in a little oil until softened, about 5 minutes. Season with salt."},{"order":2,"instruction":"Heat a large pan over medium heat. Melt a little butter."},{"order":3,"instruction":"Place a tortilla in the pan. Sprinkle half with cheese, then add peppers, onion, and sliced jalapeño."},{"order":4,"instruction":"Fold the tortilla in half. Cook 2–3 minutes until golden and crispy on the bottom."},{"order":5,"instruction":"Flip carefully and cook another 2 minutes until the other side is golden and cheese is fully melted."},{"order":6,"instruction":"Cut into wedges and serve with salsa and sour cream."}]',
  '{"calories":420,"protein_g":18,"carbs_g":42,"fat_g":22,"serving_size":"1 quesadilla"}', '["Use a mix of cheeses — cheddar for flavour and Monterey Jack for meltability.","Don''t overfill or the quesadilla will be hard to flip without spilling.","Press down gently with a spatula while cooking for even browning.","Add cooked chicken, black beans, or corn for a more substantial meal."]', 'cheese quesadillas recipe',
  '', '5 minutes', '10 minutes', '15 minutes',
  'Easy', '2 servings', '["guacamole","chicken-enchiladas","mexican-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'smash-burger', 1, 'Smash Burger', 'Fast Foods',
  'A thin, crispy-edged beef patty smashed onto a screaming-hot griddle, topped with American cheese, pickles, and special sauce in a toasted brioche bun. Better than any drive-through.', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Smash Burger Recipe', 'Crispy-edged smash burger with American cheese and special sauce. Better than fast food and ready in 15 minutes.',
  '["smash burger","burger recipe","homemade burger","fast food burger","beef burger"]', '[{"name":"Ground beef (80/20)","quantity":"400","unit":"g"},{"name":"Brioche buns","quantity":"2","unit":"buns"},{"name":"American cheese slices","quantity":"4","unit":"slices"},{"name":"Dill pickles","quantity":"8","unit":"slices"},{"name":"Mayonnaise","quantity":"3","unit":"tbsp"},{"name":"Ketchup","quantity":"1","unit":"tbsp"},{"name":"Mustard","quantity":"1","unit":"tsp"},{"name":"Onion powder","quantity":"0.5","unit":"tsp"},{"name":"Butter","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Mix mayo, ketchup, mustard, and onion powder for the special sauce. Set aside."},{"order":2,"instruction":"Divide beef into 4 loose balls (100g each). Do not overwork the meat."},{"order":3,"instruction":"Heat a cast iron pan or griddle over the highest heat until smoking. Butter and toast buns cut-side down. Set aside."},{"order":4,"instruction":"Place a beef ball on the hot pan. Immediately smash flat with a spatula and a piece of parchment paper. Season with salt and pepper."},{"order":5,"instruction":"Cook 90 seconds until edges are crispy and brown. Flip, add a cheese slice, and cook 30 seconds more."},{"order":6,"instruction":"Stack two patties per bun. Spread sauce on both bun halves, add pickles, and serve immediately."}]',
  '{"calories":620,"protein_g":38,"carbs_g":36,"fat_g":36,"serving_size":"1 double smash burger"}', '["The key is a screaming-hot pan — the Maillard crust is what makes a smash burger special.","Use 80/20 beef — the fat content is essential for flavour and the crispy edges.","Smash within the first 10 seconds of hitting the pan, before the crust forms.","Double patties are the standard — the thin patties cook through quickly."]', 'smash burger recipe',
  '', '5 minutes', '10 minutes', '15 minutes',
  'Easy', '2 servings', '["crispy-chicken-sandwich","loaded-fries","hot-dog"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'crispy-chicken-sandwich', 1, 'Crispy Chicken Sandwich', 'Fast Foods',
  'A juicy buttermilk-brined chicken thigh in an ultra-crispy seasoned coating, served in a toasted brioche bun with pickles and spicy mayo. The ultimate homemade fast food sandwich.', 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Crispy Chicken Sandwich Recipe', 'Buttermilk crispy chicken sandwich with spicy mayo and pickles. Better than fast food and worth every bite.',
  '["crispy chicken sandwich","fried chicken sandwich","buttermilk chicken","fast food","chicken burger"]', '[{"name":"Boneless chicken thighs","quantity":"4","unit":"large"},{"name":"Buttermilk","quantity":"250","unit":"ml"},{"name":"Plain flour","quantity":"200","unit":"g"},{"name":"Cornstarch","quantity":"50","unit":"g"},{"name":"Paprika","quantity":"2","unit":"tsp"},{"name":"Garlic powder","quantity":"1","unit":"tsp"},{"name":"Brioche buns","quantity":"4","unit":"buns"},{"name":"Dill pickles","quantity":"12","unit":"slices"},{"name":"Mayonnaise","quantity":"4","unit":"tbsp"},{"name":"Sriracha","quantity":"2","unit":"tsp"}]', '[{"order":1,"instruction":"Marinate chicken in buttermilk with salt and pepper for at least 1 hour (overnight is best)."},{"order":2,"instruction":"Mix flour, cornstarch, paprika, garlic powder, salt, and pepper in a shallow bowl."},{"order":3,"instruction":"Remove chicken from buttermilk, letting excess drip off. Dredge in flour mixture, pressing firmly to coat. Let rest 5 minutes."},{"order":4,"instruction":"Heat oil to 175°C. Fry chicken 6–7 minutes per side until golden and cooked through (internal temp 74°C)."},{"order":5,"instruction":"Mix mayo and sriracha for spicy mayo. Toast buns."},{"order":6,"instruction":"Assemble: spicy mayo on both bun halves, pickles, then crispy chicken. Serve immediately."}]',
  '{"calories":680,"protein_g":42,"carbs_g":58,"fat_g":28,"serving_size":"1 sandwich"}', '["Cornstarch in the coating creates an extra-crispy, shatteringly crunchy crust.","Let the coated chicken rest before frying so the coating adheres better.","Use a thermometer — 175°C oil is the sweet spot for crispy, not greasy chicken.","Brine overnight for the juiciest, most flavourful chicken."]', 'crispy chicken sandwich recipe',
  '', '1 hour 15 minutes (including marinating)', '15 minutes', '1 hour 30 minutes',
  'Medium', '4 servings', '["smash-burger","loaded-fries","buffalo-wings"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'loaded-fries', 1, 'Loaded Cheese Fries', 'Fast Foods',
  'Crispy golden fries smothered in a velvety homemade cheese sauce, topped with bacon bits, jalapeños, and spring onions. The ultimate indulgent fast food side dish.', 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Loaded Cheese Fries Recipe', 'Crispy fries with homemade cheese sauce, bacon, and jalapeños. The ultimate loaded fries ready in 30 minutes.',
  '["loaded fries","cheese fries","fast food fries","bacon fries","comfort food"]', '[{"name":"Russet potatoes","quantity":"800","unit":"g"},{"name":"Cheddar cheese","quantity":"150","unit":"g"},{"name":"Milk","quantity":"150","unit":"ml"},{"name":"Butter","quantity":"1","unit":"tbsp"},{"name":"Plain flour","quantity":"1","unit":"tbsp"},{"name":"Bacon rashers","quantity":"4","unit":"rashers"},{"name":"Jalapeño","quantity":"1","unit":"medium"},{"name":"Spring onions","quantity":"3","unit":"stalks"},{"name":"Vegetable oil","quantity":"1","unit":"litre"}]', '[{"order":1,"instruction":"Cut potatoes into fries. Soak in cold water 30 minutes, then dry thoroughly."},{"order":2,"instruction":"Fry at 150°C for 5 minutes (blanch). Remove and cool. Increase oil to 190°C and fry again for 3–4 minutes until golden and crispy."},{"order":3,"instruction":"Cook bacon until crispy. Chop into bits."},{"order":4,"instruction":"Make cheese sauce: melt butter, whisk in flour, then gradually add milk. Stir in grated cheddar until smooth. Season."},{"order":5,"instruction":"Pile fries on a plate. Pour cheese sauce over. Top with bacon bits, sliced jalapeños, and spring onions."}]',
  '{"calories":580,"protein_g":18,"carbs_g":62,"fat_g":30,"serving_size":"1 large serving"}', '["Double-frying is the secret to restaurant-quality crispy fries — don''t skip the blanch step.","Dry the fries completely before frying to prevent oil splatter and sogginess.","Add a pinch of mustard powder to the cheese sauce for extra depth.","Serve immediately — loaded fries don''t wait well."]', 'loaded cheese fries recipe',
  '', '40 minutes (including soaking)', '20 minutes', '1 hour',
  'Medium', '3 servings', '["smash-burger","crispy-chicken-sandwich","hot-dog"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'hot-dog', 1, 'Classic Hot Dog', 'Fast Foods',
  'A juicy all-beef frankfurter in a soft steamed bun, topped with yellow mustard, ketchup, and relish. Sometimes the classics are classic for a reason.', 'https://images.unsplash.com/photo-1612392062631-94b7f959e2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Hot Dog Recipe', 'Juicy all-beef hot dog with mustard, ketchup, and relish. A classic fast food favourite ready in 10 minutes.',
  '["hot dog","frankfurter","classic hot dog","fast food","american food"]', '[{"name":"All-beef frankfurters","quantity":"4","unit":"sausages"},{"name":"Hot dog buns","quantity":"4","unit":"buns"},{"name":"Yellow mustard","quantity":"4","unit":"tsp"},{"name":"Ketchup","quantity":"4","unit":"tsp"},{"name":"Sweet relish","quantity":"4","unit":"tsp"},{"name":"White onion (diced)","quantity":"0.25","unit":"medium"}]', '[{"order":1,"instruction":"Score frankfurters with shallow diagonal cuts on both sides to prevent bursting and improve browning."},{"order":2,"instruction":"Grill or pan-fry frankfurters over medium-high heat for 4–5 minutes, turning, until nicely charred."},{"order":3,"instruction":"Steam buns by wrapping in a damp paper towel and microwaving for 20 seconds, or place over the grill briefly."},{"order":4,"instruction":"Place frankfurter in bun. Top with mustard, ketchup, relish, and diced onion."},{"order":5,"instruction":"Serve immediately with chips or coleslaw on the side."}]',
  '{"calories":310,"protein_g":12,"carbs_g":28,"fat_g":16,"serving_size":"1 hot dog"}', '["Scoring the frankfurter helps it cook evenly and creates more surface area for charring.","Steaming the bun makes it soft and pillowy — don''t skip this step.","Try Chicago-style: yellow mustard, relish, tomato, onion, sport peppers, celery salt — no ketchup!","Grill marks add flavour — use a cast iron pan if you don''t have a grill."]', 'classic hot dog recipe',
  '', '2 minutes', '8 minutes', '10 minutes',
  'Easy', '4 servings', '["smash-burger","loaded-fries","crispy-chicken-sandwich"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'protein-pancakes', 1, 'Protein Pancakes', 'Gym & Fitness',
  'Fluffy high-protein pancakes made with oats, banana, and protein powder. Each serving packs over 30g of protein — the perfect post-workout breakfast that tastes like a treat.', 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Protein Pancakes Recipe', 'Fluffy high-protein pancakes with oats and protein powder. 30g protein per serving — perfect post-workout breakfast.',
  '["protein pancakes","high protein breakfast","gym food","post workout meal","healthy pancakes"]', '[{"name":"Rolled oats","quantity":"80","unit":"g"},{"name":"Vanilla protein powder","quantity":"30","unit":"g"},{"name":"Ripe banana","quantity":"1","unit":"medium"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Greek yogurt","quantity":"100","unit":"g"},{"name":"Baking powder","quantity":"1","unit":"tsp"},{"name":"Milk","quantity":"60","unit":"ml"},{"name":"Honey","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Blend oats into a fine flour in a blender or food processor."},{"order":2,"instruction":"Add banana, eggs, Greek yogurt, protein powder, baking powder, and milk. Blend until smooth."},{"order":3,"instruction":"Let batter rest 2 minutes — it will thicken slightly."},{"order":4,"instruction":"Heat a non-stick pan over medium heat. Lightly spray with cooking oil."},{"order":5,"instruction":"Pour 3 tbsp batter per pancake. Cook 2–3 minutes until bubbles form on the surface, then flip and cook 1 minute more."},{"order":6,"instruction":"Serve with fresh berries, a drizzle of honey, and a dollop of Greek yogurt."}]',
  '{"calories":380,"protein_g":32,"carbs_g":42,"fat_g":8,"serving_size":"3 pancakes"}', '["Use a ripe banana for natural sweetness — the riper, the better.","Don''t flip too early — wait for bubbles to form across the whole surface.","Whey protein works best here; plant-based protein can make the batter denser.","Batch cook and freeze — reheat in the toaster for a quick weekday breakfast."]', 'high protein pancakes recipe',
  '', '5 minutes', '15 minutes', '20 minutes',
  'Easy', '2 servings', '["chicken-meal-prep","egg-white-omelette","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'chicken-meal-prep', 1, 'Chicken & Rice Meal Prep', 'Gym & Fitness',
  'Lean baked chicken breast with fluffy brown rice and steamed broccoli — the classic bodybuilder meal prep. Batch cook on Sunday and have clean, macro-balanced meals all week.', 'https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Chicken & Rice Meal Prep Recipe', 'Classic gym meal prep: lean chicken, brown rice, and broccoli. Batch cook for a full week of clean eating.',
  '["meal prep","chicken and rice","gym food","bodybuilding meal","clean eating"]', '[{"name":"Chicken breasts","quantity":"1","unit":"kg"},{"name":"Brown rice","quantity":"400","unit":"g"},{"name":"Broccoli","quantity":"600","unit":"g"},{"name":"Olive oil","quantity":"3","unit":"tbsp"},{"name":"Garlic powder","quantity":"2","unit":"tsp"},{"name":"Paprika","quantity":"1","unit":"tsp"},{"name":"Salt and pepper","quantity":"to taste","unit":""},{"name":"Lemon","quantity":"1","unit":"lemon"}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Season chicken breasts with olive oil, garlic powder, paprika, salt, and pepper."},{"order":2,"instruction":"Bake chicken on a lined tray for 22–25 minutes until cooked through (internal temp 74°C). Rest 5 minutes, then slice."},{"order":3,"instruction":"Cook brown rice according to package instructions (usually 30–35 minutes). Fluff with a fork."},{"order":4,"instruction":"Steam broccoli florets for 4–5 minutes until tender-crisp. Season with salt and a squeeze of lemon."},{"order":5,"instruction":"Divide rice, chicken, and broccoli evenly between 5 meal prep containers. Refrigerate up to 5 days."}]',
  '{"calories":440,"protein_g":48,"carbs_g":42,"fat_g":8,"serving_size":"1 container"}', '["Pound chicken breasts to an even thickness so they cook uniformly.","Brown rice keeps you fuller longer than white rice — worth the extra cook time.","Add hot sauce or low-calorie condiments to keep meals interesting throughout the week.","Label containers with the day to ensure freshness and rotation."]', 'chicken rice meal prep recipe',
  '', '10 minutes', '35 minutes', '45 minutes',
  'Easy', '5 servings', '["protein-pancakes","egg-white-omelette","roasted-veggie-bowls"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'egg-white-omelette', 1, 'Egg White Omelette', 'Gym & Fitness',
  'A light, fluffy omelette made with egg whites, packed with spinach, mushrooms, and feta cheese. High in protein, low in fat, and ready in under 10 minutes.', 'https://images.unsplash.com/photo-1510693206972-df098062cb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Egg White Omelette Recipe', 'Fluffy egg white omelette with spinach, mushrooms, and feta. High protein, low fat, ready in 10 minutes.',
  '["egg white omelette","high protein breakfast","low fat omelette","gym breakfast","healthy eggs"]', '[{"name":"Egg whites","quantity":"6","unit":"large"},{"name":"Baby spinach","quantity":"60","unit":"g"},{"name":"Mushrooms","quantity":"80","unit":"g"},{"name":"Feta cheese","quantity":"30","unit":"g"},{"name":"Cherry tomatoes","quantity":"6","unit":"halved"},{"name":"Garlic clove","quantity":"1","unit":"clove"},{"name":"Olive oil spray","quantity":"1","unit":"spray"},{"name":"Salt and pepper","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Sauté sliced mushrooms and minced garlic in a non-stick pan with a little olive oil spray for 3 minutes. Add spinach and cook until wilted. Remove and set aside."},{"order":2,"instruction":"Whisk egg whites with a pinch of salt until slightly frothy."},{"order":3,"instruction":"Spray the pan again and heat over medium. Pour in egg whites and swirl to coat the pan."},{"order":4,"instruction":"As the edges set, use a spatula to push them toward the centre, tilting the pan to let uncooked egg flow to the edges."},{"order":5,"instruction":"When mostly set but still slightly glossy on top, add filling to one half. Fold over and slide onto a plate."},{"order":6,"instruction":"Top with crumbled feta and cherry tomatoes. Season and serve."}]',
  '{"calories":180,"protein_g":28,"carbs_g":6,"fat_g":5,"serving_size":"1 omelette"}', '["Don''t over-whisk the egg whites — just until frothy, not stiff peaks.","Keep the heat at medium — high heat makes egg whites rubbery.","Add a whole egg to the whites for better flavour and a richer texture.","Prep the filling first so the omelette doesn''t overcook while you wait."]', 'egg white omelette recipe',
  '', '5 minutes', '8 minutes', '13 minutes',
  'Easy', '1 serving', '["protein-pancakes","chicken-meal-prep","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'zucchini-noodles', 1, 'Zucchini Noodles with Pesto', 'Diet',
  'Spiralised zucchini tossed in a vibrant homemade basil pesto with cherry tomatoes and pine nuts. A low-carb, gluten-free pasta alternative that''s fresh, light, and ready in 15 minutes.', 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Zucchini Noodles with Pesto Recipe', 'Low-carb zucchini noodles with homemade basil pesto. Gluten-free, fresh, and ready in 15 minutes.',
  '["zucchini noodles","zoodles","low carb pasta","pesto recipe","diet meal"]', '[{"name":"Zucchini","quantity":"4","unit":"large"},{"name":"Fresh basil","quantity":"60","unit":"g"},{"name":"Pine nuts","quantity":"30","unit":"g"},{"name":"Parmesan cheese","quantity":"40","unit":"g"},{"name":"Garlic cloves","quantity":"2","unit":"cloves"},{"name":"Extra virgin olive oil","quantity":"80","unit":"ml"},{"name":"Cherry tomatoes","quantity":"150","unit":"g"},{"name":"Lemon juice","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Spiralise zucchini into noodles. Sprinkle with salt and let sit 10 minutes to draw out moisture. Pat dry with paper towels."},{"order":2,"instruction":"Make pesto: blend basil, pine nuts, parmesan, garlic, and lemon juice. Drizzle in olive oil while blending until smooth. Season."},{"order":3,"instruction":"Halve cherry tomatoes."},{"order":4,"instruction":"Toss zucchini noodles with pesto and cherry tomatoes. Serve immediately at room temperature or briefly sauté for 1–2 minutes if you prefer warm noodles."},{"order":5,"instruction":"Top with extra parmesan and toasted pine nuts."}]',
  '{"calories":280,"protein_g":8,"carbs_g":12,"fat_g":24,"serving_size":"1 bowl"}', '["Salting and drying the zucchini is crucial — skipping this step results in watery noodles.","Don''t cook the zucchini noodles for more than 2 minutes or they''ll become mushy.","Store leftover pesto with a thin layer of olive oil on top to prevent browning.","Add grilled chicken or shrimp to make it a more substantial meal."]', 'zucchini noodles pesto recipe',
  '', '15 minutes', '2 minutes', '17 minutes',
  'Easy', '2 servings', '["cauliflower-rice","lettuce-wrap-tacos","greek-salad"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'cauliflower-rice', 1, 'Cauliflower Fried Rice', 'Diet',
  'Grated cauliflower stir-fried with eggs, vegetables, and soy sauce to mimic classic fried rice — with a fraction of the carbs. A satisfying low-carb dinner ready in 20 minutes.', 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Cauliflower Fried Rice Recipe', 'Low-carb cauliflower fried rice with eggs and vegetables. A healthy twist on a takeout classic, ready in 20 minutes.',
  '["cauliflower rice","low carb fried rice","keto rice","diet meal","cauliflower recipe"]', '[{"name":"Cauliflower head","quantity":"1","unit":"large"},{"name":"Eggs","quantity":"3","unit":"large"},{"name":"Frozen peas and carrots","quantity":"150","unit":"g"},{"name":"Soy sauce","quantity":"3","unit":"tbsp"},{"name":"Sesame oil","quantity":"1","unit":"tsp"},{"name":"Garlic cloves","quantity":"3","unit":"cloves"},{"name":"Spring onions","quantity":"4","unit":"stalks"},{"name":"Vegetable oil","quantity":"2","unit":"tbsp"}]', '[{"order":1,"instruction":"Grate cauliflower on a box grater or pulse in a food processor until it resembles rice grains."},{"order":2,"instruction":"Heat oil in a wok over high heat. Add minced garlic and cook 30 seconds."},{"order":3,"instruction":"Add frozen peas and carrots. Stir-fry 2 minutes."},{"order":4,"instruction":"Push vegetables to the side. Scramble eggs in the empty space until just set, then mix through."},{"order":5,"instruction":"Add cauliflower rice. Stir-fry on high heat for 4–5 minutes until tender and slightly golden."},{"order":6,"instruction":"Add soy sauce and sesame oil. Toss to combine. Garnish with spring onions and serve."}]',
  '{"calories":220,"protein_g":12,"carbs_g":18,"fat_g":12,"serving_size":"1 bowl"}', '["Cook on the highest heat possible — you want the cauliflower to fry, not steam.","Don''t overcrowd the wok or the cauliflower will release water and become soggy.","Squeeze excess moisture from the grated cauliflower in a clean towel before cooking.","Add shrimp, chicken, or tofu for extra protein."]', 'cauliflower fried rice recipe',
  '', '10 minutes', '10 minutes', '20 minutes',
  'Easy', '3 servings', '["zucchini-noodles","lettuce-wrap-tacos","quinoa-buddha-bowl"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'lettuce-wrap-tacos', 1, 'Lettuce Wrap Tacos', 'Diet',
  'Seasoned ground turkey and fresh salsa served in crisp butter lettuce cups instead of tortillas. All the flavour of tacos with none of the carbs — a light, crunchy, satisfying meal.', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Lettuce Wrap Tacos Recipe', 'Low-carb lettuce wrap tacos with seasoned turkey and fresh salsa. Healthy, crunchy, and ready in 20 minutes.',
  '["lettuce wrap tacos","low carb tacos","turkey tacos","diet tacos","healthy tacos"]', '[{"name":"Ground turkey","quantity":"500","unit":"g"},{"name":"Butter lettuce","quantity":"1","unit":"head"},{"name":"Taco seasoning","quantity":"2","unit":"tbsp"},{"name":"Tomatoes","quantity":"2","unit":"medium"},{"name":"Avocado","quantity":"1","unit":"ripe"},{"name":"Lime","quantity":"1","unit":"lime"},{"name":"Fresh coriander","quantity":"handful","unit":""},{"name":"Greek yogurt","quantity":"4","unit":"tbsp"}]', '[{"order":1,"instruction":"Brown ground turkey in a pan over medium-high heat, breaking it up. Drain any excess liquid."},{"order":2,"instruction":"Add taco seasoning and 3 tbsp water. Stir and cook 2 minutes."},{"order":3,"instruction":"Dice tomatoes and avocado. Mix with lime juice, coriander, and salt for a quick salsa."},{"order":4,"instruction":"Separate butter lettuce into individual cup-shaped leaves."},{"order":5,"instruction":"Fill each lettuce cup with turkey, salsa, and a dollop of Greek yogurt. Serve immediately."}]',
  '{"calories":280,"protein_g":32,"carbs_g":10,"fat_g":12,"serving_size":"3 lettuce wraps"}', '["Butter lettuce has the perfect cup shape for wraps — iceberg also works well.","Use Greek yogurt instead of sour cream to keep it lighter without sacrificing creaminess.","Ground turkey can be dry — don''t overcook it and add a splash of broth if needed.","Prep the turkey ahead and reheat for quick weeknight assembly."]', 'lettuce wrap tacos recipe',
  '', '10 minutes', '10 minutes', '20 minutes',
  'Easy', '4 servings', '["zucchini-noodles","cauliflower-rice","guacamole"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'lemon-curd-tart', 1, 'Lemon Curd Tart', 'Sour',
  'A buttery shortcrust pastry shell filled with a silky, intensely tangy lemon curd. Bright, puckery, and elegant — the perfect balance of sweet and sour in every bite.', 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Lemon Curd Tart Recipe', 'Buttery pastry shell with silky tangy lemon curd filling. A classic French-style tart that''s bright and elegant.',
  '["lemon tart","lemon curd","french tart","citrus dessert","sour dessert"]', '[{"name":"Plain flour","quantity":"200","unit":"g"},{"name":"Cold butter","quantity":"100","unit":"g"},{"name":"Icing sugar","quantity":"50","unit":"g"},{"name":"Egg yolk","quantity":"1","unit":"large"},{"name":"Lemons (juice and zest)","quantity":"4","unit":"large"},{"name":"Eggs","quantity":"4","unit":"large"},{"name":"Caster sugar","quantity":"180","unit":"g"},{"name":"Butter (for curd)","quantity":"100","unit":"g"}]', '[{"order":1,"instruction":"Make pastry: rub cold butter into flour and icing sugar until breadcrumb-like. Add egg yolk and 1–2 tbsp cold water. Bring together, wrap, and chill 30 minutes."},{"order":2,"instruction":"Roll out pastry and line a 23cm tart tin. Blind bake at 180°C for 15 minutes with baking beans, then 5 minutes uncovered until golden."},{"order":3,"instruction":"Make lemon curd: whisk eggs, sugar, lemon juice, and zest in a heatproof bowl over simmering water."},{"order":4,"instruction":"Stir constantly for 10–12 minutes until thickened enough to coat a spoon. Remove from heat."},{"order":5,"instruction":"Whisk in cold butter piece by piece until smooth and glossy."},{"order":6,"instruction":"Pour curd into the cooled pastry shell. Refrigerate 2 hours until set. Dust with icing sugar before serving."}]',
  '{"calories":380,"protein_g":6,"carbs_g":48,"fat_g":20,"serving_size":"1 slice"}', '["Keep the heat low when making the curd — too hot and the eggs will scramble.","Strain the curd through a fine sieve for an ultra-smooth, glossy filling.","The pastry should be fully cooled before adding the curd.","Add a thin layer of white chocolate to the pastry base before filling to prevent sogginess."]', 'lemon curd tart recipe',
  '', '45 minutes', '30 minutes', '3 hours 15 minutes (including chilling)',
  'Hard', '8 servings', '["tamarind-chutney","creme-brulee","tiramisu"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'tamarind-chutney', 1, 'Tamarind Chutney', 'Sour',
  'A tangy, sweet, and spiced Indian chutney made from tamarind pulp, jaggery, and warming spices. The essential condiment for chaat, samosas, and street food.', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Tamarind Chutney Recipe', 'Tangy sweet tamarind chutney with jaggery and spices. The essential Indian condiment for chaat and samosas.',
  '["tamarind chutney","imli chutney","indian chutney","chaat sauce","sour condiment"]', '[{"name":"Tamarind paste","quantity":"100","unit":"g"},{"name":"Jaggery or brown sugar","quantity":"80","unit":"g"},{"name":"Water","quantity":"300","unit":"ml"},{"name":"Cumin powder","quantity":"1","unit":"tsp"},{"name":"Ginger powder","quantity":"0.5","unit":"tsp"},{"name":"Black salt (kala namak)","quantity":"0.5","unit":"tsp"},{"name":"Red chilli powder","quantity":"0.5","unit":"tsp"}]', '[{"order":1,"instruction":"Dissolve tamarind paste in warm water. Strain through a sieve to remove any fibres."},{"order":2,"instruction":"Pour tamarind liquid into a saucepan. Add jaggery and bring to a simmer over medium heat."},{"order":3,"instruction":"Add cumin, ginger, black salt, and chilli powder. Stir to combine."},{"order":4,"instruction":"Simmer 15–20 minutes, stirring occasionally, until the chutney thickens to a coating consistency."},{"order":5,"instruction":"Cool completely. Store in a jar in the fridge for up to 2 weeks."}]',
  '{"calories":60,"protein_g":0,"carbs_g":15,"fat_g":0,"serving_size":"2 tbsp"}', '["The chutney thickens further as it cools — don''t over-reduce it.","Black salt (kala namak) gives the authentic chaat flavour — find it at Indian grocery stores.","Adjust jaggery to taste — the balance of sour and sweet is personal.","Thin with a little water when serving if it becomes too thick after refrigerating."]', 'tamarind chutney recipe',
  '', '5 minutes', '20 minutes', '25 minutes',
  'Easy', '12 servings', '["lemon-curd-tart","guacamole","hummus"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'penne-arrabbiata', 1, 'Penne Arrabbiata', 'Pasta',
  'A fiery Roman pasta sauce of crushed tomatoes, garlic, and plenty of red chilli flakes tossed with penne. Arrabbiata means ''angry'' in Italian — and this sauce has real heat.', 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Penne Arrabbiata Recipe', 'Fiery Roman penne arrabbiata with crushed tomatoes, garlic, and chilli. Authentic, spicy, and ready in 25 minutes.',
  '["penne arrabbiata","arrabbiata sauce","spicy pasta","italian pasta","tomato pasta"]', '[{"name":"Penne pasta","quantity":"400","unit":"g"},{"name":"Crushed tomatoes","quantity":"400","unit":"g"},{"name":"Garlic cloves","quantity":"4","unit":"cloves"},{"name":"Red chilli flakes","quantity":"1.5","unit":"tsp"},{"name":"Extra virgin olive oil","quantity":"4","unit":"tbsp"},{"name":"Fresh parsley","quantity":"handful","unit":""},{"name":"Salt","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Cook penne in well-salted boiling water until al dente. Reserve 1 cup pasta water before draining."},{"order":2,"instruction":"Heat olive oil in a pan over medium heat. Add thinly sliced garlic and chilli flakes. Cook 2 minutes until garlic is golden — don''t burn it."},{"order":3,"instruction":"Add crushed tomatoes. Season with salt. Simmer 15 minutes until sauce thickens."},{"order":4,"instruction":"Add drained pasta to the sauce. Toss vigorously, adding pasta water as needed to loosen."},{"order":5,"instruction":"Serve topped with fresh parsley and a drizzle of olive oil. No cheese — this is a vegan dish by tradition."}]',
  '{"calories":420,"protein_g":12,"carbs_g":72,"fat_g":10,"serving_size":"1 plate"}', '["Use good quality canned tomatoes — San Marzano if possible.","The garlic should turn golden, not brown — burnt garlic will make the sauce bitter.","Arrabbiata is traditionally served without cheese — the chilli heat is the star.","Add a splash of pasta water to the sauce before adding pasta for a silkier result."]', 'penne arrabbiata recipe',
  '', '5 minutes', '20 minutes', '25 minutes',
  'Easy', '4 servings', '["fettuccine-alfredo","pasta-primavera","lasagna"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'fettuccine-alfredo', 1, 'Fettuccine Alfredo', 'Pasta',
  'Silky fettuccine coated in a rich, creamy Parmesan butter sauce. The original Roman recipe uses just butter, Parmesan, and pasta water — no cream needed for this luxurious dish.', 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Fettuccine Alfredo Recipe', 'Silky fettuccine in a rich Parmesan butter sauce. The authentic Roman recipe with no cream needed.',
  '["fettuccine alfredo","alfredo pasta","creamy pasta","italian pasta","butter pasta"]', '[{"name":"Fettuccine","quantity":"400","unit":"g"},{"name":"Unsalted butter","quantity":"120","unit":"g"},{"name":"Parmesan cheese (finely grated)","quantity":"120","unit":"g"},{"name":"Salt","quantity":"1","unit":"tbsp"},{"name":"Black pepper","quantity":"1","unit":"tsp"}]', '[{"order":1,"instruction":"Cook fettuccine in generously salted boiling water until al dente. Reserve 1.5 cups of pasta water before draining."},{"order":2,"instruction":"While pasta cooks, soften butter in a large warm bowl or pan."},{"order":3,"instruction":"Add hot drained pasta to the butter. Toss to coat."},{"order":4,"instruction":"Add half the Parmesan and a splash of pasta water. Toss vigorously — the starchy water emulsifies with the butter and cheese to create a creamy sauce."},{"order":5,"instruction":"Add remaining Parmesan and more pasta water as needed until the sauce is silky and coats every strand."},{"order":6,"instruction":"Serve immediately with extra Parmesan and cracked black pepper."}]',
  '{"calories":580,"protein_g":18,"carbs_g":68,"fat_g":26,"serving_size":"1 plate"}', '["Use freshly grated Parmesan — pre-packaged won''t melt smoothly.","The pasta water is the secret ingredient — its starch creates the creamy emulsion.","Work quickly and keep everything warm — the sauce seizes if it cools.","Add grilled chicken or shrimp to make it a complete meal."]', 'fettuccine alfredo recipe',
  '', '5 minutes', '15 minutes', '20 minutes',
  'Easy', '4 servings', '["penne-arrabbiata","pasta-primavera","lasagna"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'pasta-primavera', 1, 'Pasta Primavera', 'Pasta',
  'A vibrant spring pasta loaded with seasonal vegetables, tossed in a light garlic and olive oil sauce with Parmesan. Fresh, colourful, and on the table in 25 minutes.', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Pasta Primavera Recipe', 'Vibrant pasta primavera with seasonal vegetables and Parmesan. Fresh, light, and ready in 25 minutes.',
  '["pasta primavera","vegetable pasta","spring pasta","italian pasta","healthy pasta"]', '[{"name":"Penne or farfalle pasta","quantity":"400","unit":"g"},{"name":"Asparagus","quantity":"150","unit":"g"},{"name":"Cherry tomatoes","quantity":"200","unit":"g"},{"name":"Zucchini","quantity":"1","unit":"medium"},{"name":"Bell pepper","quantity":"1","unit":"medium"},{"name":"Garlic cloves","quantity":"3","unit":"cloves"},{"name":"Parmesan cheese","quantity":"60","unit":"g"},{"name":"Extra virgin olive oil","quantity":"4","unit":"tbsp"},{"name":"Fresh basil","quantity":"handful","unit":""}]', '[{"order":1,"instruction":"Cook pasta in salted boiling water until al dente. Reserve 1 cup pasta water."},{"order":2,"instruction":"Cut asparagus into 3cm pieces, slice zucchini and bell pepper."},{"order":3,"instruction":"Heat olive oil in a large pan. Sauté garlic 1 minute. Add bell pepper and zucchini, cook 3 minutes."},{"order":4,"instruction":"Add asparagus and cherry tomatoes. Cook 3 minutes until vegetables are tender-crisp."},{"order":5,"instruction":"Add drained pasta and a splash of pasta water. Toss to combine. Season generously."},{"order":6,"instruction":"Serve topped with Parmesan and fresh basil."}]',
  '{"calories":440,"protein_g":14,"carbs_g":70,"fat_g":12,"serving_size":"1 plate"}', '["Don''t overcook the vegetables — they should still have a slight bite.","Use whatever vegetables are in season — this recipe is very flexible.","A squeeze of lemon juice at the end brightens all the flavours.","Add white wine to the pan after the garlic for extra depth."]', 'pasta primavera recipe',
  '', '10 minutes', '15 minutes', '25 minutes',
  'Easy', '4 servings', '["penne-arrabbiata","fettuccine-alfredo","lasagna"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'lasagna', 1, 'Classic Beef Lasagna', 'Pasta',
  'Layers of rich Bolognese meat sauce, creamy béchamel, and pasta sheets baked under a golden cheese crust. The ultimate Italian comfort food that feeds a crowd.', 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Beef Lasagna Recipe', 'Classic beef lasagna with Bolognese, béchamel, and golden cheese crust. The ultimate Italian comfort food.',
  '["lasagna","beef lasagna","italian lasagna","bolognese","baked pasta"]', '[{"name":"Lasagna sheets","quantity":"12","unit":"sheets"},{"name":"Ground beef","quantity":"600","unit":"g"},{"name":"Crushed tomatoes","quantity":"800","unit":"g"},{"name":"Onion","quantity":"1","unit":"large"},{"name":"Garlic cloves","quantity":"3","unit":"cloves"},{"name":"Milk","quantity":"500","unit":"ml"},{"name":"Butter","quantity":"50","unit":"g"},{"name":"Plain flour","quantity":"50","unit":"g"},{"name":"Mozzarella cheese","quantity":"200","unit":"g"},{"name":"Parmesan cheese","quantity":"80","unit":"g"}]', '[{"order":1,"instruction":"Brown beef with diced onion and garlic. Add crushed tomatoes, season, and simmer 30 minutes for the Bolognese."},{"order":2,"instruction":"Make béchamel: melt butter, whisk in flour, then gradually add milk. Stir over medium heat until thick and smooth. Season with salt, pepper, and nutmeg."},{"order":3,"instruction":"Preheat oven to 190°C. Spread a thin layer of Bolognese on the bottom of a deep baking dish."},{"order":4,"instruction":"Layer: lasagna sheets, Bolognese, béchamel. Repeat 3–4 times, finishing with béchamel on top."},{"order":5,"instruction":"Top with mozzarella and Parmesan. Cover with foil and bake 30 minutes. Remove foil and bake 15 minutes more until golden and bubbling."},{"order":6,"instruction":"Rest 10 minutes before cutting and serving."}]',
  '{"calories":580,"protein_g":36,"carbs_g":48,"fat_g":26,"serving_size":"1 portion"}', '["Resting the lasagna before cutting is essential — it firms up and slices cleanly.","Make the Bolognese a day ahead for deeper flavour.","Use no-boil lasagna sheets to save time — they absorb moisture from the sauces.","Cover tightly with foil for the first bake to prevent the top from drying out."]', 'classic beef lasagna recipe',
  '', '30 minutes', '1 hour', '1 hour 30 minutes',
  'Medium', '6 servings', '["penne-arrabbiata","fettuccine-alfredo","pasta-primavera"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'pad-thai', 1, 'Pad Thai', 'Asian',
  'Thailand''s most famous stir-fried noodle dish with rice noodles, shrimp, egg, bean sprouts, and a tangy tamarind-based sauce. Topped with crushed peanuts and lime.', 'https://images.unsplash.com/photo-1559314809-0d155014e29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Pad Thai Recipe', 'Authentic pad thai with rice noodles, shrimp, tamarind sauce, and crushed peanuts. Ready in 20 minutes.',
  '["pad thai","thai noodles","stir fry noodles","thai food","rice noodles"]', '[{"name":"Rice noodles (flat, 3mm)","quantity":"200","unit":"g"},{"name":"Shrimp (peeled)","quantity":"300","unit":"g"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Bean sprouts","quantity":"100","unit":"g"},{"name":"Tamarind paste","quantity":"3","unit":"tbsp"},{"name":"Fish sauce","quantity":"2","unit":"tbsp"},{"name":"Palm sugar or brown sugar","quantity":"2","unit":"tbsp"},{"name":"Spring onions","quantity":"4","unit":"stalks"},{"name":"Crushed peanuts","quantity":"40","unit":"g"},{"name":"Lime","quantity":"2","unit":"limes"}]', '[{"order":1,"instruction":"Soak rice noodles in cold water for 30 minutes until pliable. Drain."},{"order":2,"instruction":"Mix tamarind paste, fish sauce, and sugar for the pad thai sauce."},{"order":3,"instruction":"Heat wok over highest heat. Add oil and stir-fry shrimp 2 minutes until pink. Push to the side."},{"order":4,"instruction":"Add noodles and sauce. Toss and stir-fry 2 minutes."},{"order":5,"instruction":"Push noodles aside. Crack eggs into the wok and scramble briefly, then mix through the noodles."},{"order":6,"instruction":"Add bean sprouts and spring onions. Toss 30 seconds. Serve topped with crushed peanuts and lime wedges."}]',
  '{"calories":480,"protein_g":28,"carbs_g":62,"fat_g":12,"serving_size":"1 plate"}', '["A screaming-hot wok is essential — low heat makes the noodles sticky and clumped.","Don''t overcrowd the wok — cook in batches if needed.","Soak noodles in cold water, not hot — they''ll finish cooking in the wok.","Serve with extra fish sauce, sugar, chilli flakes, and lime on the side for customising."]', 'pad thai recipe',
  '', '35 minutes (including soaking)', '10 minutes', '45 minutes',
  'Medium', '2 servings', '["fried-rice","thai-green-curry","korean-bibimbap"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'fried-rice', 1, 'Egg Fried Rice', 'Asian',
  'Classic Chinese-style fried rice with scrambled egg, spring onions, and soy sauce. The key is day-old rice and a very hot wok — simple, satisfying, and ready in 10 minutes.', 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Egg Fried Rice Recipe', 'Classic Chinese egg fried rice with soy sauce and spring onions. Use day-old rice for the best results.',
  '["egg fried rice","chinese fried rice","fried rice recipe","asian rice","quick dinner"]', '[{"name":"Cooked rice (day-old)","quantity":"400","unit":"g"},{"name":"Eggs","quantity":"3","unit":"large"},{"name":"Spring onions","quantity":"4","unit":"stalks"},{"name":"Soy sauce","quantity":"3","unit":"tbsp"},{"name":"Sesame oil","quantity":"1","unit":"tsp"},{"name":"Garlic cloves","quantity":"2","unit":"cloves"},{"name":"Frozen peas","quantity":"80","unit":"g"},{"name":"Vegetable oil","quantity":"2","unit":"tbsp"}]', '[{"order":1,"instruction":"Break up cold rice with your hands so there are no clumps."},{"order":2,"instruction":"Heat wok over highest heat until smoking. Add oil."},{"order":3,"instruction":"Add minced garlic and white parts of spring onions. Stir-fry 30 seconds."},{"order":4,"instruction":"Add rice. Spread in a single layer and let it fry undisturbed for 1 minute to get some colour. Then toss."},{"order":5,"instruction":"Push rice to the side. Crack eggs into the wok and scramble until just set, then mix through the rice."},{"order":6,"instruction":"Add peas, soy sauce, and sesame oil. Toss everything together. Garnish with green spring onion tops and serve."}]',
  '{"calories":380,"protein_g":14,"carbs_g":58,"fat_g":10,"serving_size":"1 bowl"}', '["Day-old refrigerated rice is essential — fresh rice is too moist and will clump.","The wok must be smoking hot before adding anything — this is what creates wok hei (breath of the wok).","Don''t stir constantly — let the rice sit and fry to develop colour and flavour.","Add oyster sauce for extra umami depth."]', 'egg fried rice recipe',
  '', '5 minutes', '8 minutes', '13 minutes',
  'Easy', '2 servings', '["pad-thai","korean-bibimbap","cauliflower-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'sushi-rolls', 1, 'Homemade Sushi Rolls', 'Asian',
  'Classic maki sushi rolls with seasoned sushi rice, fresh salmon or cucumber, wrapped in nori. Making sushi at home is easier than you think and endlessly customisable.', 'https://images.unsplash.com/photo-1553621042-f6e147245754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Homemade Sushi Rolls Recipe', 'Classic maki sushi rolls with seasoned rice and fresh salmon. Easy homemade sushi with step-by-step instructions.',
  '["sushi rolls","maki sushi","homemade sushi","japanese food","sushi recipe"]', '[{"name":"Sushi rice","quantity":"300","unit":"g"},{"name":"Rice vinegar","quantity":"3","unit":"tbsp"},{"name":"Sugar","quantity":"1","unit":"tbsp"},{"name":"Salt","quantity":"1","unit":"tsp"},{"name":"Nori sheets","quantity":"4","unit":"sheets"},{"name":"Sashimi-grade salmon","quantity":"200","unit":"g"},{"name":"Cucumber","quantity":"0.5","unit":"medium"},{"name":"Avocado","quantity":"1","unit":"ripe"},{"name":"Soy sauce","quantity":"4","unit":"tbsp"},{"name":"Wasabi paste","quantity":"1","unit":"tsp"}]', '[{"order":1,"instruction":"Cook sushi rice according to package instructions. Mix rice vinegar, sugar, and salt until dissolved. Fold into hot rice. Fan to cool."},{"order":2,"instruction":"Slice salmon, cucumber, and avocado into thin strips."},{"order":3,"instruction":"Place a nori sheet shiny-side down on a bamboo mat. Wet hands and spread a thin, even layer of rice over the nori, leaving a 2cm border at the top."},{"order":4,"instruction":"Arrange filling in a line across the bottom third of the rice."},{"order":5,"instruction":"Using the mat, roll tightly from the bottom, pressing firmly. Seal the edge with a little water."},{"order":6,"instruction":"Slice into 6–8 pieces with a sharp, wet knife. Serve with soy sauce and wasabi."}]',
  '{"calories":320,"protein_g":16,"carbs_g":48,"fat_g":8,"serving_size":"6 pieces"}', '["Wet your hands before handling rice to prevent sticking.","Don''t overfill the roll — less is more for tight, clean rolls.","A sharp, wet knife is essential for clean cuts — wipe between each slice.","Use sashimi-grade fish only — it''s been frozen to kill parasites and is safe to eat raw."]', 'homemade sushi rolls recipe',
  '', '30 minutes', '20 minutes', '50 minutes',
  'Medium', '4 servings', '["pad-thai","korean-bibimbap","fried-rice"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'korean-bibimbap', 1, 'Korean Bibimbap', 'Asian',
  'A vibrant Korean rice bowl topped with seasoned vegetables, marinated beef, a fried egg, and spicy gochujang sauce. Mix everything together before eating for the full experience.', 'https://images.unsplash.com/photo-1590301157890-4810ed352733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Korean Bibimbap Recipe', 'Vibrant Korean bibimbap with seasoned vegetables, beef, fried egg, and gochujang sauce. A complete meal in a bowl.',
  '["bibimbap","korean rice bowl","korean food","gochujang","mixed rice bowl"]', '[{"name":"Cooked white rice","quantity":"400","unit":"g"},{"name":"Beef mince or sirloin","quantity":"200","unit":"g"},{"name":"Spinach","quantity":"100","unit":"g"},{"name":"Carrots","quantity":"2","unit":"medium"},{"name":"Zucchini","quantity":"1","unit":"medium"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Gochujang paste","quantity":"2","unit":"tbsp"},{"name":"Soy sauce","quantity":"2","unit":"tbsp"},{"name":"Sesame oil","quantity":"2","unit":"tsp"},{"name":"Sesame seeds","quantity":"1","unit":"tbsp"}]', '[{"order":1,"instruction":"Marinate beef in soy sauce, sesame oil, garlic, and a pinch of sugar for 15 minutes. Cook in a hot pan until browned."},{"order":2,"instruction":"Blanch spinach 30 seconds, squeeze dry, and season with sesame oil and salt."},{"order":3,"instruction":"Julienne carrots and zucchini. Sauté each separately in sesame oil for 2 minutes. Season."},{"order":4,"instruction":"Fry eggs sunny-side up."},{"order":5,"instruction":"Divide rice between bowls. Arrange beef and vegetables in sections around the bowl. Place fried egg in the centre."},{"order":6,"instruction":"Add a spoonful of gochujang on top. Drizzle with sesame oil and sprinkle sesame seeds. Mix everything together before eating."}]',
  '{"calories":520,"protein_g":28,"carbs_g":62,"fat_g":16,"serving_size":"1 bowl"}', '["The presentation matters — arrange toppings in neat sections for the traditional look.","Adjust gochujang to your heat tolerance — it''s quite spicy.","For dolsot bibimbap, serve in a hot stone bowl to get crispy rice on the bottom.","Use whatever vegetables you have — bibimbap is very flexible."]', 'korean bibimbap recipe',
  '', '20 minutes', '20 minutes', '40 minutes',
  'Medium', '2 servings', '["pad-thai","fried-rice","sushi-rolls"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'tomato-soup', 1, 'Creamy Tomato Soup', 'Soups',
  'A velvety, deeply flavoured tomato soup made with roasted tomatoes, garlic, and a swirl of cream. Comforting, simple, and perfect with a grilled cheese sandwich.', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Creamy Tomato Soup Recipe', 'Velvety roasted tomato soup with cream and basil. The ultimate comfort food ready in 45 minutes.',
  '["tomato soup","creamy tomato soup","roasted tomato","comfort food","soup recipe"]', '[{"name":"Ripe tomatoes","quantity":"1","unit":"kg"},{"name":"Onion","quantity":"1","unit":"large"},{"name":"Garlic cloves","quantity":"4","unit":"cloves"},{"name":"Vegetable broth","quantity":"500","unit":"ml"},{"name":"Heavy cream","quantity":"100","unit":"ml"},{"name":"Olive oil","quantity":"3","unit":"tbsp"},{"name":"Fresh basil","quantity":"handful","unit":""},{"name":"Salt and pepper","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Halve tomatoes and place cut-side up on a baking tray with whole garlic cloves. Drizzle with olive oil and season. Roast 30 minutes until caramelised."},{"order":2,"instruction":"Sauté diced onion in a pot until soft, about 8 minutes."},{"order":3,"instruction":"Add roasted tomatoes and garlic (squeeze from skins) to the pot. Add vegetable broth."},{"order":4,"instruction":"Simmer 10 minutes. Add basil leaves."},{"order":5,"instruction":"Blend until completely smooth with an immersion blender. Strain through a sieve for extra silkiness."},{"order":6,"instruction":"Stir in cream. Taste and adjust seasoning. Serve with a swirl of cream and fresh basil."}]',
  '{"calories":220,"protein_g":4,"carbs_g":18,"fat_g":14,"serving_size":"1 bowl (300ml)"}', '["Roasting the tomatoes concentrates their flavour dramatically — don''t skip this step.","Straining the blended soup gives it a restaurant-quality silky texture.","Add a pinch of sugar if the tomatoes are too acidic.","Serve with crusty bread or a grilled cheese sandwich for the ultimate pairing."]', 'creamy tomato soup recipe',
  '', '10 minutes', '45 minutes', '55 minutes',
  'Easy', '4 servings', '["chicken-noodle-soup","french-onion-soup","pasta-primavera"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'chicken-noodle-soup', 1, 'Chicken Noodle Soup', 'Soups',
  'A classic, soul-warming chicken noodle soup with tender chicken, egg noodles, carrots, and celery in a rich golden broth. The ultimate remedy for cold days and cold seasons.', 'https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Chicken Noodle Soup Recipe', 'Classic chicken noodle soup with tender chicken, egg noodles, and golden broth. The ultimate comfort food.',
  '["chicken noodle soup","chicken soup","comfort food","soup recipe","homemade soup"]', '[{"name":"Chicken thighs (bone-in)","quantity":"600","unit":"g"},{"name":"Egg noodles","quantity":"150","unit":"g"},{"name":"Carrots","quantity":"3","unit":"medium"},{"name":"Celery stalks","quantity":"3","unit":"stalks"},{"name":"Onion","quantity":"1","unit":"large"},{"name":"Garlic cloves","quantity":"3","unit":"cloves"},{"name":"Chicken broth","quantity":"1.5","unit":"litres"},{"name":"Fresh thyme","quantity":"4","unit":"sprigs"},{"name":"Fresh parsley","quantity":"handful","unit":""}]', '[{"order":1,"instruction":"Place chicken thighs in a large pot with broth, halved onion, garlic, and thyme. Bring to a boil, then simmer 25 minutes."},{"order":2,"instruction":"Remove chicken. Shred meat and discard bones and skin. Strain broth and return to pot."},{"order":3,"instruction":"Add sliced carrots and celery to the broth. Simmer 10 minutes."},{"order":4,"instruction":"Add egg noodles and cook according to package instructions."},{"order":5,"instruction":"Return shredded chicken to the pot. Season generously with salt and pepper."},{"order":6,"instruction":"Serve in deep bowls garnished with fresh parsley."}]',
  '{"calories":320,"protein_g":28,"carbs_g":28,"fat_g":10,"serving_size":"1 bowl"}', '["Bone-in chicken thighs make a much richer broth than boneless breast.","Cook noodles separately if making ahead — they absorb broth and become mushy when stored.","Add a parmesan rind to the broth while simmering for extra depth.","Skim the foam from the broth in the first few minutes for a clearer soup."]', 'chicken noodle soup recipe',
  '', '10 minutes', '45 minutes', '55 minutes',
  'Easy', '4 servings', '["tomato-soup","french-onion-soup","chicken-meal-prep"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'french-onion-soup', 1, 'French Onion Soup', 'Soups',
  'Deeply caramelised onions in a rich beef broth, topped with a toasted baguette crouton and a blanket of melted Gruyère cheese. A French bistro classic that''s worth every minute.', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'French Onion Soup Recipe', 'Classic French onion soup with caramelised onions, beef broth, and melted Gruyère. A bistro favourite at home.',
  '["french onion soup","onion soup","gruyere soup","french bistro","caramelised onions"]', '[{"name":"Yellow onions","quantity":"1.2","unit":"kg"},{"name":"Unsalted butter","quantity":"60","unit":"g"},{"name":"Beef broth","quantity":"1.5","unit":"litres"},{"name":"Dry white wine","quantity":"150","unit":"ml"},{"name":"Baguette","quantity":"1","unit":"baguette"},{"name":"Gruyère cheese","quantity":"200","unit":"g"},{"name":"Fresh thyme","quantity":"4","unit":"sprigs"},{"name":"Bay leaf","quantity":"1","unit":"leaf"}]', '[{"order":1,"instruction":"Thinly slice all onions. Melt butter in a large heavy pot over medium-low heat. Add onions and cook, stirring every 10 minutes, for 45–60 minutes until deeply golden and caramelised."},{"order":2,"instruction":"Add white wine and scrape up any browned bits. Cook 3 minutes."},{"order":3,"instruction":"Add beef broth, thyme, and bay leaf. Simmer 20 minutes. Season with salt and pepper."},{"order":4,"instruction":"Slice baguette and toast under the grill until golden."},{"order":5,"instruction":"Ladle soup into oven-safe bowls. Float a baguette slice on top. Cover generously with grated Gruyère."},{"order":6,"instruction":"Grill under the broiler for 3–4 minutes until cheese is bubbly and golden. Serve immediately."}]',
  '{"calories":420,"protein_g":18,"carbs_g":38,"fat_g":20,"serving_size":"1 bowl"}', '["Patience is everything — properly caramelised onions take at least 45 minutes. Don''t rush.","Use a mix of butter and olive oil to prevent burning during the long caramelisation.","Good quality beef broth makes a huge difference — use homemade or a good store-bought one.","Gruyère is traditional but Emmental or Comté work beautifully too."]', 'french onion soup recipe',
  '', '10 minutes', '1 hour 30 minutes', '1 hour 40 minutes',
  'Medium', '4 servings', '["tomato-soup","chicken-noodle-soup","lasagna"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'fluffy-pancakes', 1, 'Fluffy Buttermilk Pancakes', 'Breakfast',
  'Tall, cloud-like buttermilk pancakes with a golden exterior and pillowy interior. The secret is buttermilk and resting the batter — these are the pancakes of your dreams.', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Fluffy Buttermilk Pancakes Recipe', 'Tall, fluffy buttermilk pancakes with a golden crust. The ultimate weekend breakfast ready in 20 minutes.',
  '["fluffy pancakes","buttermilk pancakes","american pancakes","breakfast recipe","pancake recipe"]', '[{"name":"Plain flour","quantity":"200","unit":"g"},{"name":"Buttermilk","quantity":"300","unit":"ml"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Butter (melted)","quantity":"40","unit":"g"},{"name":"Caster sugar","quantity":"2","unit":"tbsp"},{"name":"Baking powder","quantity":"2","unit":"tsp"},{"name":"Bicarbonate of soda","quantity":"0.5","unit":"tsp"},{"name":"Salt","quantity":"0.5","unit":"tsp"}]', '[{"order":1,"instruction":"Whisk flour, sugar, baking powder, bicarbonate of soda, and salt in a large bowl."},{"order":2,"instruction":"In another bowl, whisk buttermilk, eggs, and melted butter."},{"order":3,"instruction":"Pour wet ingredients into dry. Stir until just combined — lumps are fine. Don''t overmix. Rest 5 minutes."},{"order":4,"instruction":"Heat a non-stick pan over medium-low heat. Lightly butter the pan."},{"order":5,"instruction":"Pour 80ml batter per pancake. Cook until bubbles form across the surface and edges look set, about 2–3 minutes. Flip and cook 1–2 minutes more."},{"order":6,"instruction":"Serve stacked with maple syrup, butter, and fresh berries."}]',
  '{"calories":320,"protein_g":10,"carbs_g":48,"fat_g":10,"serving_size":"3 pancakes"}', '["Don''t overmix the batter — lumps are your friend. Overmixing develops gluten and makes pancakes tough.","Resting the batter lets the baking powder activate for extra fluffiness.","Keep cooked pancakes warm in a 100°C oven while you cook the rest.","No buttermilk? Add 1 tbsp lemon juice to regular milk and let sit 5 minutes."]', 'fluffy buttermilk pancakes recipe',
  '', '10 minutes', '15 minutes', '25 minutes',
  'Easy', '4 servings', '["eggs-benedict","french-toast","protein-pancakes"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'eggs-benedict', 1, 'Eggs Benedict', 'Breakfast',
  'Poached eggs and Canadian bacon on toasted English muffins, smothered in a rich, buttery hollandaise sauce. A brunch classic that''s impressive but achievable at home.', 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Eggs Benedict Recipe', 'Classic eggs benedict with poached eggs, Canadian bacon, and hollandaise sauce. The ultimate brunch recipe.',
  '["eggs benedict","hollandaise sauce","poached eggs","brunch recipe","breakfast classic"]', '[{"name":"Eggs","quantity":"4","unit":"large"},{"name":"English muffins","quantity":"2","unit":"muffins"},{"name":"Canadian bacon or ham","quantity":"4","unit":"slices"},{"name":"Egg yolks (for hollandaise)","quantity":"3","unit":"large"},{"name":"Unsalted butter","quantity":"150","unit":"g"},{"name":"Lemon juice","quantity":"1","unit":"tbsp"},{"name":"White wine vinegar","quantity":"1","unit":"tbsp"},{"name":"Cayenne pepper","quantity":"pinch","unit":""}]', '[{"order":1,"instruction":"Make hollandaise: melt butter. Whisk egg yolks with lemon juice in a heatproof bowl over simmering water until pale and thick. Slowly drizzle in melted butter while whisking constantly. Season with salt and cayenne."},{"order":2,"instruction":"Keep hollandaise warm in the bowl over warm (not hot) water, whisking occasionally."},{"order":3,"instruction":"Bring a pan of water to a gentle simmer. Add vinegar. Crack each egg into a small cup."},{"order":4,"instruction":"Create a gentle whirlpool and slide in eggs. Poach 3 minutes for runny yolks. Remove with a slotted spoon."},{"order":5,"instruction":"Toast English muffins. Warm Canadian bacon in a pan."},{"order":6,"instruction":"Assemble: muffin half, bacon, poached egg, generous hollandaise. Dust with cayenne and serve immediately."}]',
  '{"calories":520,"protein_g":24,"carbs_g":28,"fat_g":36,"serving_size":"2 halves"}', '["Fresh eggs poach best — the whites hold together more tightly.","If hollandaise splits, whisk in a teaspoon of cold water to bring it back together.","Poach eggs in advance and store in cold water — reheat in warm water for 30 seconds.","Use a thermometer for hollandaise — the yolks should reach 63°C for food safety."]', 'eggs benedict hollandaise recipe',
  '', '15 minutes', '20 minutes', '35 minutes',
  'Hard', '2 servings', '["fluffy-pancakes","french-toast","egg-white-omelette"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'french-toast', 1, 'Classic French Toast', 'Breakfast',
  'Thick slices of brioche soaked in a vanilla-spiced egg custard and pan-fried until golden and caramelised. Served with maple syrup and fresh berries for the perfect weekend breakfast.', 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic French Toast Recipe', 'Golden brioche French toast with vanilla custard, maple syrup, and berries. The perfect weekend breakfast.',
  '["french toast","brioche french toast","eggy bread","breakfast recipe","weekend brunch"]', '[{"name":"Brioche bread","quantity":"4","unit":"thick slices"},{"name":"Eggs","quantity":"3","unit":"large"},{"name":"Milk","quantity":"80","unit":"ml"},{"name":"Vanilla extract","quantity":"1","unit":"tsp"},{"name":"Cinnamon","quantity":"0.5","unit":"tsp"},{"name":"Butter","quantity":"2","unit":"tbsp"},{"name":"Maple syrup","quantity":"4","unit":"tbsp"},{"name":"Fresh berries","quantity":"100","unit":"g"}]', '[{"order":1,"instruction":"Whisk eggs, milk, vanilla, and cinnamon together in a shallow bowl."},{"order":2,"instruction":"Soak each brioche slice in the egg mixture for 30 seconds per side, letting it absorb fully."},{"order":3,"instruction":"Melt butter in a non-stick pan over medium heat until foaming."},{"order":4,"instruction":"Cook soaked bread for 2–3 minutes per side until deeply golden and caramelised."},{"order":5,"instruction":"Serve immediately with maple syrup, fresh berries, and a dusting of icing sugar."}]',
  '{"calories":380,"protein_g":12,"carbs_g":48,"fat_g":16,"serving_size":"2 slices"}', '["Day-old brioche absorbs the custard better without falling apart.","Don''t rush the soaking — the bread needs time to absorb the egg mixture all the way through.","Medium heat is key — too hot and the outside burns before the inside cooks.","Add a splash of orange juice to the custard for a citrus twist."]', 'classic french toast recipe',
  '', '5 minutes', '10 minutes', '15 minutes',
  'Easy', '2 servings', '["fluffy-pancakes","eggs-benedict","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'turkey-meatballs', 1, 'Turkey Meatballs', 'Meal Prep',
  'Juicy, herb-seasoned turkey meatballs that are baked, not fried. Batch cook and freeze for quick weeknight dinners — serve with pasta, in subs, or over rice.', 'https://images.unsplash.com/photo-1529042410759-befb1204b468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Turkey Meatballs Recipe', 'Juicy baked turkey meatballs perfect for meal prep. Freeze in batches for quick weeknight dinners.',
  '["turkey meatballs","meal prep meatballs","baked meatballs","healthy meatballs","batch cooking"]', '[{"name":"Ground turkey","quantity":"700","unit":"g"},{"name":"Breadcrumbs","quantity":"60","unit":"g"},{"name":"Egg","quantity":"1","unit":"large"},{"name":"Parmesan cheese","quantity":"40","unit":"g"},{"name":"Garlic cloves","quantity":"3","unit":"cloves"},{"name":"Fresh parsley","quantity":"3","unit":"tbsp"},{"name":"Italian seasoning","quantity":"1","unit":"tsp"},{"name":"Salt and pepper","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Line a baking tray with parchment paper."},{"order":2,"instruction":"Combine all ingredients in a large bowl. Mix gently until just combined — don''t overwork."},{"order":3,"instruction":"Roll into 30g balls (about the size of a golf ball). Place on the prepared tray."},{"order":4,"instruction":"Bake 18–20 minutes until cooked through and lightly golden."},{"order":5,"instruction":"Cool completely before storing. Refrigerate up to 4 days or freeze up to 3 months."}]',
  '{"calories":220,"protein_g":26,"carbs_g":8,"fat_g":10,"serving_size":"4 meatballs"}', '["Don''t overmix the meat mixture — it makes the meatballs dense and tough.","Wet your hands before rolling to prevent sticking.","Freeze on a tray first, then transfer to bags so they don''t stick together.","Add a pinch of chilli flakes for a spicy version."]', 'turkey meatballs meal prep recipe',
  '', '15 minutes', '20 minutes', '35 minutes',
  'Easy', '5 servings', '["roasted-veggie-bowls","chicken-meal-prep","lasagna"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'roasted-veggie-bowls', 1, 'Roasted Veggie Bowls', 'Meal Prep',
  'Colourful roasted vegetables over a base of grains with a tahini dressing. Prep five bowls on Sunday and have a nutritious, satisfying lunch ready every day of the week.', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Roasted Veggie Bowls Recipe', 'Colourful roasted vegetable meal prep bowls with tahini dressing. Prep 5 lunches in under an hour.',
  '["roasted veggie bowls","meal prep bowls","vegetable meal prep","healthy lunch","batch cooking"]', '[{"name":"Sweet potato","quantity":"2","unit":"large"},{"name":"Red bell pepper","quantity":"2","unit":"medium"},{"name":"Red onion","quantity":"1","unit":"large"},{"name":"Broccoli","quantity":"400","unit":"g"},{"name":"Chickpeas (canned)","quantity":"400","unit":"g"},{"name":"Farro or quinoa","quantity":"300","unit":"g"},{"name":"Tahini","quantity":"4","unit":"tbsp"},{"name":"Lemon juice","quantity":"3","unit":"tbsp"},{"name":"Olive oil","quantity":"3","unit":"tbsp"}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Cube sweet potato, slice peppers and onion, cut broccoli into florets."},{"order":2,"instruction":"Toss all vegetables and drained chickpeas with olive oil, salt, and pepper. Spread on two baking trays."},{"order":3,"instruction":"Roast 25–30 minutes until golden and tender, tossing halfway."},{"order":4,"instruction":"Cook farro or quinoa according to package instructions."},{"order":5,"instruction":"Make tahini dressing: whisk tahini, lemon juice, 3 tbsp water, garlic, and salt."},{"order":6,"instruction":"Divide grains and vegetables between 5 containers. Store dressing separately. Refrigerate up to 5 days."}]',
  '{"calories":420,"protein_g":14,"carbs_g":58,"fat_g":16,"serving_size":"1 bowl"}', '["Store the dressing separately to keep the bowls fresh and prevent sogginess.","Roast vegetables in a single layer — crowding causes steaming instead of roasting.","Add a protein like hard-boiled eggs or feta to each bowl for extra staying power.","Farro has a wonderful nutty chew — try it if you haven''t before."]', 'roasted veggie meal prep bowls recipe',
  '', '15 minutes', '30 minutes', '45 minutes',
  'Easy', '5 servings', '["turkey-meatballs","chicken-meal-prep","quinoa-buddha-bowl"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'hummus', 1, 'Homemade Hummus', 'Snacks',
  'Silky smooth hummus made from scratch with chickpeas, tahini, lemon, and garlic. Far superior to store-bought and takes just 10 minutes in a food processor.', 'https://images.unsplash.com/photo-1577805947697-89e18249d767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Homemade Hummus Recipe', 'Silky smooth homemade hummus with chickpeas, tahini, and lemon. Far better than store-bought and ready in 10 minutes.',
  '["hummus","homemade hummus","chickpea dip","middle eastern dip","healthy snack"]', '[{"name":"Chickpeas (canned)","quantity":"400","unit":"g"},{"name":"Tahini","quantity":"4","unit":"tbsp"},{"name":"Lemon juice","quantity":"3","unit":"tbsp"},{"name":"Garlic clove","quantity":"1","unit":"clove"},{"name":"Ice cold water","quantity":"4","unit":"tbsp"},{"name":"Extra virgin olive oil","quantity":"2","unit":"tbsp"},{"name":"Cumin","quantity":"0.5","unit":"tsp"},{"name":"Salt","quantity":"0.75","unit":"tsp"}]', '[{"order":1,"instruction":"Drain and rinse chickpeas. Reserve a few for garnish."},{"order":2,"instruction":"Add tahini and lemon juice to a food processor. Blend 1 minute until creamy and pale."},{"order":3,"instruction":"Add garlic and salt. Blend 30 seconds."},{"order":4,"instruction":"Add chickpeas. Blend 1 minute. With the motor running, drizzle in ice cold water until the hummus is very smooth and creamy."},{"order":5,"instruction":"Taste and adjust lemon, salt, and garlic. Blend another 30 seconds."},{"order":6,"instruction":"Spread in a bowl, drizzle with olive oil, sprinkle with cumin and paprika, and top with reserved chickpeas."}]',
  '{"calories":160,"protein_g":6,"carbs_g":16,"fat_g":9,"serving_size":"4 tbsp"}', '["Blending the tahini and lemon first (before adding chickpeas) creates an incredibly creamy base.","Ice cold water is the secret to ultra-smooth, fluffy hummus.","Peel the chickpeas for the smoothest possible texture — tedious but worth it for special occasions.","Store in the fridge for up to 5 days with a thin layer of olive oil on top."]', 'homemade hummus recipe',
  '', '10 minutes', '0 minutes', '10 minutes',
  'Easy', '8 servings', '["bruschetta","guacamole","tamarind-chutney"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'bruschetta', 1, 'Classic Bruschetta', 'Snacks',
  'Toasted sourdough rubbed with garlic and topped with a vibrant mixture of ripe tomatoes, fresh basil, and extra virgin olive oil. The simplest Italian appetiser and one of the best.', 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Classic Bruschetta Recipe', 'Classic Italian bruschetta with ripe tomatoes, basil, and garlic on toasted sourdough. Ready in 15 minutes.',
  '["bruschetta","italian appetiser","tomato bruschetta","garlic bread","easy snack"]', '[{"name":"Sourdough or ciabatta","quantity":"8","unit":"slices"},{"name":"Ripe tomatoes","quantity":"4","unit":"medium"},{"name":"Garlic cloves","quantity":"2","unit":"cloves"},{"name":"Fresh basil","quantity":"handful","unit":""},{"name":"Extra virgin olive oil","quantity":"4","unit":"tbsp"},{"name":"Balsamic vinegar","quantity":"1","unit":"tsp"},{"name":"Salt and pepper","quantity":"to taste","unit":""}]', '[{"order":1,"instruction":"Dice tomatoes and place in a colander. Salt lightly and let drain 10 minutes to remove excess moisture."},{"order":2,"instruction":"Combine drained tomatoes with torn basil, olive oil, balsamic vinegar, salt, and pepper. Let marinate 5 minutes."},{"order":3,"instruction":"Grill or toast bread slices until golden and crispy on both sides."},{"order":4,"instruction":"While still hot, rub each slice firmly with a cut garlic clove — the rough surface grates the garlic into the bread."},{"order":5,"instruction":"Spoon tomato mixture generously over each slice. Drizzle with extra olive oil and serve immediately."}]',
  '{"calories":180,"protein_g":4,"carbs_g":24,"fat_g":8,"serving_size":"2 slices"}', '["Draining the tomatoes is essential — watery tomatoes make soggy bruschetta.","Rub the garlic on the hot toast while it''s still warm — the heat helps release the flavour.","Use the ripest, most flavourful tomatoes you can find.","Serve immediately after topping — bruschetta waits for no one."]', 'classic bruschetta recipe',
  '', '15 minutes', '5 minutes', '20 minutes',
  'Easy', '4 servings', '["hummus","nachos","greek-salad"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'nachos', 1, 'Loaded Nachos', 'Snacks',
  'Crispy tortilla chips loaded with melted cheese, seasoned beef, jalapeños, sour cream, and guacamole. The ultimate sharing snack for game nights and gatherings.', 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Loaded Nachos Recipe', 'Loaded nachos with melted cheese, seasoned beef, jalapeños, and guacamole. The ultimate party snack.',
  '["nachos","loaded nachos","mexican snack","party food","tortilla chips"]', '[{"name":"Tortilla chips","quantity":"200","unit":"g"},{"name":"Ground beef","quantity":"300","unit":"g"},{"name":"Taco seasoning","quantity":"1.5","unit":"tbsp"},{"name":"Cheddar cheese (shredded)","quantity":"200","unit":"g"},{"name":"Jalapeños (pickled)","quantity":"40","unit":"g"},{"name":"Sour cream","quantity":"100","unit":"g"},{"name":"Guacamole","quantity":"150","unit":"g"},{"name":"Salsa","quantity":"100","unit":"ml"}]', '[{"order":1,"instruction":"Preheat oven to 200°C. Brown ground beef in a pan, drain fat, add taco seasoning and 3 tbsp water. Cook 2 minutes."},{"order":2,"instruction":"Spread tortilla chips in a single layer on a large baking tray."},{"order":3,"instruction":"Scatter seasoned beef over chips. Cover generously with shredded cheese."},{"order":4,"instruction":"Bake 8–10 minutes until cheese is fully melted and bubbling."},{"order":5,"instruction":"Remove from oven. Top with jalapeños, dollops of sour cream, guacamole, and salsa. Serve immediately."}]',
  '{"calories":560,"protein_g":24,"carbs_g":42,"fat_g":32,"serving_size":"1 large serving"}', '["Layer chips and cheese in two layers for even coverage — no naked chips.","Add toppings like sour cream and guacamole after baking so they stay fresh.","Use a mix of cheeses — cheddar and Monterey Jack melt beautifully together.","Serve straight from the oven — nachos don''t improve with time."]', 'loaded nachos recipe',
  '', '10 minutes', '15 minutes', '25 minutes',
  'Easy', '4 servings', '["guacamole","hummus","buffalo-wings"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'mango-lassi', 1, 'Mango Lassi', 'Drinks',
  'A creamy, refreshing Indian yogurt drink blended with sweet ripe mango, a hint of cardamom, and a touch of honey. Cool, thick, and utterly delicious.', 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Mango Lassi Recipe', 'Creamy Indian mango lassi with yogurt, cardamom, and honey. A refreshing drink ready in 5 minutes.',
  '["mango lassi","indian drink","yogurt drink","mango smoothie","refreshing drink"]', '[{"name":"Ripe mango (fresh or frozen)","quantity":"300","unit":"g"},{"name":"Plain yogurt","quantity":"200","unit":"g"},{"name":"Milk","quantity":"100","unit":"ml"},{"name":"Honey","quantity":"1","unit":"tbsp"},{"name":"Ground cardamom","quantity":"0.25","unit":"tsp"},{"name":"Ice cubes","quantity":"6","unit":"cubes"}]', '[{"order":1,"instruction":"Peel and cube fresh mango, or use frozen mango chunks."},{"order":2,"instruction":"Add mango, yogurt, milk, honey, cardamom, and ice to a blender."},{"order":3,"instruction":"Blend on high for 60 seconds until completely smooth and creamy."},{"order":4,"instruction":"Taste and adjust sweetness with more honey if needed."},{"order":5,"instruction":"Pour into tall glasses. Garnish with a pinch of cardamom and a mango slice. Serve immediately."}]',
  '{"calories":220,"protein_g":6,"carbs_g":42,"fat_g":4,"serving_size":"1 large glass (350ml)"}', '["Alphonso mangoes make the most flavourful lassi — use them when in season.","Frozen mango makes the lassi thicker and colder without needing as much ice.","Use full-fat yogurt for a richer, creamier result.","Add a pinch of saffron for a luxurious, aromatic version."]', 'mango lassi recipe',
  '', '5 minutes', '0 minutes', '5 minutes',
  'Easy', '2 servings', '["lemonade","mango-sticky-rice","overnight-oats"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'lemonade', 1, 'Fresh Lemonade', 'Drinks',
  'Bright, tangy homemade lemonade made with freshly squeezed lemons and a simple syrup. Perfectly balanced between sweet and sour — infinitely better than anything from a bottle.', 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Fresh Lemonade Recipe', 'Bright homemade lemonade with freshly squeezed lemons and simple syrup. Perfectly balanced and refreshing.',
  '["lemonade","fresh lemonade","homemade lemonade","summer drink","lemon drink"]', '[{"name":"Lemons","quantity":"6","unit":"large"},{"name":"Sugar","quantity":"150","unit":"g"},{"name":"Water (for syrup)","quantity":"150","unit":"ml"},{"name":"Cold water","quantity":"800","unit":"ml"},{"name":"Ice cubes","quantity":"2","unit":"cups"},{"name":"Fresh mint","quantity":"handful","unit":""}]', '[{"order":1,"instruction":"Make simple syrup: combine sugar and 150ml water in a saucepan. Heat over medium, stirring until sugar dissolves. Cool completely."},{"order":2,"instruction":"Juice all lemons — you need about 200ml of fresh lemon juice."},{"order":3,"instruction":"Combine lemon juice, simple syrup, and cold water in a large pitcher. Stir well."},{"order":4,"instruction":"Taste and adjust — add more syrup for sweetness or more lemon juice for tartness."},{"order":5,"instruction":"Fill glasses with ice. Pour lemonade over. Garnish with lemon slices and fresh mint."}]',
  '{"calories":120,"protein_g":0,"carbs_g":32,"fat_g":0,"serving_size":"1 glass (300ml)"}', '["Roll lemons firmly on the counter before juicing — it breaks down the cells and yields more juice.","Simple syrup blends into cold drinks much better than granulated sugar.","Add sliced strawberries or cucumber for a flavoured variation.","Make a big batch of simple syrup and keep it in the fridge for up to 2 weeks."]', 'fresh homemade lemonade recipe',
  '', '10 minutes', '5 minutes', '15 minutes',
  'Easy', '6 servings', '["mango-lassi","mango-sticky-rice","churros"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'banana-bread', 1, 'Banana Bread', 'Baking',
  'A moist, tender banana bread packed with the flavour of very ripe bananas, brown butter, and a hint of cinnamon. The best way to use up overripe bananas — and the whole house will smell incredible.', 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Banana Bread Recipe', 'Moist, tender banana bread with brown butter and cinnamon. The perfect recipe for overripe bananas.',
  '["banana bread","banana loaf","baking recipe","overripe bananas","quick bread"]', '[{"name":"Very ripe bananas","quantity":"3","unit":"large"},{"name":"Plain flour","quantity":"200","unit":"g"},{"name":"Butter","quantity":"80","unit":"g"},{"name":"Brown sugar","quantity":"150","unit":"g"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Baking soda","quantity":"1","unit":"tsp"},{"name":"Cinnamon","quantity":"1","unit":"tsp"},{"name":"Salt","quantity":"0.5","unit":"tsp"},{"name":"Vanilla extract","quantity":"1","unit":"tsp"}]', '[{"order":1,"instruction":"Preheat oven to 175°C. Grease a 9x5 inch loaf tin."},{"order":2,"instruction":"Brown the butter in a saucepan over medium heat until golden and nutty-smelling. Cool slightly."},{"order":3,"instruction":"Mash bananas thoroughly in a large bowl. Stir in brown butter, sugar, eggs, and vanilla."},{"order":4,"instruction":"Fold in flour, baking soda, cinnamon, and salt until just combined. Don''t overmix."},{"order":5,"instruction":"Pour into prepared tin. Bake 55–65 minutes until a skewer inserted in the centre comes out clean."},{"order":6,"instruction":"Cool in the tin 10 minutes, then turn out onto a wire rack. Slice when fully cool."}]',
  '{"calories":280,"protein_g":4,"carbs_g":44,"fat_g":10,"serving_size":"1 slice"}', '["The blacker and more overripe the bananas, the sweeter and more flavourful the bread.","Browning the butter adds a deep, nutty flavour that elevates this from good to great.","Don''t overmix once the flour is added — it develops gluten and makes the bread tough.","Add chocolate chips or walnuts to the batter for extra texture."]', 'banana bread recipe',
  '', '15 minutes', '60 minutes', '1 hour 15 minutes',
  'Easy', '10 slices', '["chocolate-chip-cookies","blueberry-muffins","churros"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'chocolate-chip-cookies', 1, 'Chocolate Chip Cookies', 'Baking',
  'Thick, chewy chocolate chip cookies with crispy edges, gooey centres, and pools of melted chocolate. Brown butter and a rest in the fridge make these the best cookies you will ever bake.', 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Chocolate Chip Cookies Recipe', 'Thick, chewy chocolate chip cookies with crispy edges and gooey centres. The best cookies you will ever bake.',
  '["chocolate chip cookies","chewy cookies","cookie recipe","baking","homemade cookies"]', '[{"name":"Plain flour","quantity":"280","unit":"g"},{"name":"Unsalted butter","quantity":"225","unit":"g"},{"name":"Brown sugar","quantity":"200","unit":"g"},{"name":"Caster sugar","quantity":"100","unit":"g"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Vanilla extract","quantity":"2","unit":"tsp"},{"name":"Baking soda","quantity":"1","unit":"tsp"},{"name":"Salt","quantity":"1","unit":"tsp"},{"name":"Dark chocolate chips","quantity":"300","unit":"g"}]', '[{"order":1,"instruction":"Brown butter in a saucepan until golden and nutty. Pour into a large bowl and cool 10 minutes."},{"order":2,"instruction":"Whisk both sugars into the brown butter until combined. Add eggs and vanilla, whisk vigorously for 1 minute."},{"order":3,"instruction":"Fold in flour, baking soda, and salt until just combined. Fold in chocolate chips."},{"order":4,"instruction":"Cover and refrigerate dough for at least 1 hour (overnight is best)."},{"order":5,"instruction":"Preheat oven to 190°C. Scoop dough into 60g balls on lined baking trays, spacing 5cm apart."},{"order":6,"instruction":"Bake 10–12 minutes until edges are golden but centres look underdone. Cool on the tray — they firm up as they cool."}]',
  '{"calories":280,"protein_g":3,"carbs_g":36,"fat_g":14,"serving_size":"1 cookie"}', '["Chilling the dough is the single most important step for thick, chewy cookies — don''t skip it.","Pull them out when they look underdone — they continue cooking on the hot tray.","Sprinkle with flaky sea salt right after baking for a sweet-salty contrast.","Use a mix of chocolate chips and chopped chocolate bars for varied texture."]', 'best chocolate chip cookies recipe',
  '', '20 minutes', '12 minutes', '1 hour 32 minutes (including chilling)',
  'Easy', '24 cookies', '["banana-bread","blueberry-muffins","tiramisu"]', 1
);
INSERT OR REPLACE INTO recipes (
  slug, version, title, category, description, hero_image_url,
  meta_title, meta_description, keywords, ingredients, steps, nutrition,
  tips, youtube_query, youtube_video_id, prep_time, cook_time, total_time,
  difficulty, servings, related_recipes, published
) VALUES (
  'blueberry-muffins', 1, 'Blueberry Muffins', 'Baking',
  'Tall, domed blueberry muffins with a crunchy sugar top and bursting pockets of juicy blueberries. Bakery-style results at home with a simple batter and one secret technique.', 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
  'Blueberry Muffins Recipe', 'Tall, domed blueberry muffins with a crunchy sugar top. Bakery-style results at home in 30 minutes.',
  '["blueberry muffins","muffin recipe","baking","breakfast muffins","bakery muffins"]', '[{"name":"Plain flour","quantity":"280","unit":"g"},{"name":"Fresh or frozen blueberries","quantity":"200","unit":"g"},{"name":"Caster sugar","quantity":"150","unit":"g"},{"name":"Eggs","quantity":"2","unit":"large"},{"name":"Buttermilk","quantity":"200","unit":"ml"},{"name":"Vegetable oil","quantity":"80","unit":"ml"},{"name":"Baking powder","quantity":"2","unit":"tsp"},{"name":"Vanilla extract","quantity":"1","unit":"tsp"},{"name":"Demerara sugar (for topping)","quantity":"2","unit":"tbsp"}]', '[{"order":1,"instruction":"Preheat oven to 220°C. Line a 12-hole muffin tin with paper cases."},{"order":2,"instruction":"Whisk flour, sugar, baking powder, and salt in a large bowl."},{"order":3,"instruction":"In another bowl, whisk eggs, buttermilk, oil, and vanilla."},{"order":4,"instruction":"Pour wet ingredients into dry. Fold until just combined — lumps are fine. Gently fold in blueberries."},{"order":5,"instruction":"Divide batter between cases, filling to the top. Sprinkle with demerara sugar."},{"order":6,"instruction":"Bake at 220°C for 5 minutes, then reduce to 180°C and bake 15–18 minutes more until a skewer comes out clean. Cool 5 minutes before eating."}]',
  '{"calories":240,"protein_g":4,"carbs_g":38,"fat_g":8,"serving_size":"1 muffin"}', '["The high initial temperature (220°C) creates the tall, domed top — don''t skip this step.","Don''t overmix — lumpy batter makes tender muffins; smooth batter makes tough ones.","Toss blueberries in a little flour before folding in to prevent them sinking.","Frozen blueberries work just as well as fresh — don''t thaw them first."]', 'blueberry muffins recipe',
  '', '10 minutes', '23 minutes', '33 minutes',
  'Easy', '12 muffins', '["banana-bread","chocolate-chip-cookies","fluffy-pancakes"]', 1
);
