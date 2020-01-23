exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_book")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_book").insert([
        { recipe_id: 1, ingredient_id: 1, quanity: "100g" },
        { recipe_id: 2, ingredient_id: 2, quanity: "150g" },
        { recipe_id: 3, ingredient_id: 3, quanity: "300g" }
      ]);
    });
};
