exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("IngredientsUpdate")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("IngredientsUpdate").insert([
        { Ingredient_name: "Afang Leaf", Ingredient_id: 1 },
        { Ingredient_name: "Bread", Ingredient_id: 2 },
        { Ingredient_name: "Carrot", Ingredient_id: 3 }
      ]);
    });
};
