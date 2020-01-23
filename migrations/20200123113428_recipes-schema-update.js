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
    })
    .createTable("instruction_steps", tb1 => {
      tb1.increments();
      tb1.string("instructions").notNullable();
      tb1
        .integer("step_number")
        .unsigned()
        .notNullable();
      tb1
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    })
    .createTable("recipe_book", tb1 => {
      tb1.increments();
      tb1
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tb1
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tb1.decimal("quantity").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instruction_steps")
    .dropTableIfExists("recipe_book");
};
