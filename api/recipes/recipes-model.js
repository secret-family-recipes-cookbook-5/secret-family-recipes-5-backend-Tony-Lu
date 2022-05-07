// model functions here
const db = require('../../data/db-config')

/*
select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
from employees as e
join departments as d
  on e.department_id = d.id
order by d.name, e.last_name

db('employees as e')
  .join('departments as d', 'e.department_id', 'd.id')
  .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.salary')
*/

function getRecipes() {
    /*
    select * from recipes as r
    join ingredients as ing
        on ing.recipe_id = r.recipe_id
    join instructions as inst
        on inst.recipe_id = r.recipe_id
    order by step_number
    */
    return db('recipes')
}

function getRecipeById(recipeId) {
    return db('recipes')
        .where('recipe_id', recipeId)
        .first()
}

function getIngredientsByRecipeId(recipe_id) {
    return db('ingredients')
        .where('recipe_id', recipe_id)
}

function getInstructionsByRecipeId(recipe_id) {
    return db('instructions')
        .where('recipe_id', recipe_id)
        .orderBy('step_number')
}

// function getRecipeByTitle(title) {
//     /*
//     select * from recipes
//     where title = filter or category = filter
//     order by 'recipe_id'
//     */
//     return db('recipes')
//         .where('title', title)
//         .orderBy('recipe_id')
// }

// function getRecipeByCategory(category) {
//     return db('recipes')
//         .where('category', category)
//         .orderBy('recipe_id')
// }

// function findBy(filter) {
//     return db('recipes')
//         .where(filter)
//         .orderBy('recipe_id')
// }

function addNewRecipe(newRecipe) {
    return db('recipes')
        .insert(newRecipe)
        .then(([recipe_id]) => getRecipeById(recipe_id))
}

function updateRecipe(recipe_id, changes) {
    return db('recipes')
        .where('recipe_id', recipe_id)
        .update(changes)
        .then(count => (count > 0 ? getRecipeById(recipe_id) : null))
}

function deleteRecipe(recipe_id) {
    return db('recipes')
        .where('recipe_id', recipe_id)
        .del()
}


module.exports = {
    getRecipes,
    getRecipeById,
    getIngredientsByRecipeId,
    getInstructionsByRecipeId,
    // getRecipeByTitle,
    // getRecipeByCategory,
    // findBy,
    addNewRecipe,
    updateRecipe,
    deleteRecipe,
}