exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Recipes").insert([
        { id: 1, Name: "Sandwich", Ingredient_id: 1, Quantity: 2 },
        { id: 2, Name: "Cole slaw", Ingredient_id: 4, Quantity: 10 },
        { id: 3, Name: "Afang", Ingredient_id: 3, Quantity: 3 }
      ]);
    });
};
