exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
        table.increments('user_id')
        table.string('first_name', 255).notNullable()
        table.string('last_name', 255).notNullable()
        table.string('username', 255).notNullable().unique()
        table.string('password', 255).notNullable()
    })
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('title', 255).notNullable()
        table.string('source', 255).notNullable()
        table.string('description')
        table.string('category', 255).notNullable()
        table.timestamp('recipe_added').defaultTo(knex.fn.now())
        table.string('ingredients').notNullable()
    })
    .createTable('instructions', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instruction').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
        .dropTableIfExists('users')
};
