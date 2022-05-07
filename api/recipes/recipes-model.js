const db = require('../../data/db-config')

function getRecipes() {
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
    addNewRecipe,
    updateRecipe,
    deleteRecipe,
}