exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instruction_steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instruction_steps").insert([
        { Instructions: "Spread Spinach", step_number: 2, recipe_id: 1 },
        { Instructions: "Cut Carrot", step_number: 2, recipe_id: 2 },
        { Instructions: "Afang", step_number: 9, recipe_id: 3 }
      ]);
    });
};
