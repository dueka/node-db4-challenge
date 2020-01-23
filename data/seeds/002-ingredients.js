exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Ingredients").insert([
        { Ingredient_name: "Afang Leaf", Ingredient_id: 1 },
        { Ingredient_name: "Bread", Ingredient_id: 3 },
        { Ingredient_name: "Carrot", Ingredient_id: 2 }
      ]);
    });
};
