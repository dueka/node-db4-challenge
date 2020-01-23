exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("Recipes", tb1 => {
      tb1.increments();
      tb1.string("Name", 128).notNullable();
      tb1
        .integer("ingredient_id")
        .unique()
        .notNullable();
      tb1.integer("Quantity").notNullable();
    })
    .createTable("Ingredients", tb1 => {
      tb1.increments();
      tb1.string("ingredient_name", 128);
      tb1
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Recipes");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
