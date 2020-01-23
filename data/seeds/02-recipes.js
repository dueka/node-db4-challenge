exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("RecipesUpdate")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("RecipesUpdate").insert([
        { id: 1, Name: "Sandwich", Ingredient_id: 1, Quantity: 2 },
        { id: 2, Name: "Cole slaw", Ingredient_id: 2, Quantity: 10 },
        { id: 3, Name: "Afang", Ingredient_id: 3, Quantity: 3 }
      ]);
    });
};
