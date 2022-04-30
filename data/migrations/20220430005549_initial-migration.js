exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 255).notNullable().unique
        table.string('password', 255).notNullable()
    })
    .createTable('recipes', table => {
        table.increments('recipe_id')
        table.string('title', 255).notNullable()
        table.string('source', 255).notNullable()
        table.string('category', 255).notNullable()
        table.string('ingredients').notNullable()
    })

};

exports.down = function(knex) {
  
};
