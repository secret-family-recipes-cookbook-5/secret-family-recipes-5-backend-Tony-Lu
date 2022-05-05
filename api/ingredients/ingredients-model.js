const db = require('../../data/db-config')

function getIngredientById(ingredient_id) {
    return db('ingredients')
        .where('ingredient_id', ingredient_id)
        .first()
}

// function addIngredient(newIngredient) {
//     return null
// }

// function updateIngredient(ingredient_id) {
//     return null
// }

// function deleteIngredient(ingredient_id) {
//     return null
// }

module.exports = {
    getIngredientById
    // addIngredient,
    // updateIngredient,
    // deleteIngredient,
}