const db = require('../../data/db-config')

function getIngredientById(ingredient_id) {
    return db('ingredients')
        .where('ingredient_id', ingredient_id)
        .first()
}

function addIngredient(newIngredient) {
    return db('ingredients')
        .insert(newIngredient)
        .then(([ingredient_id]) => getIngredientById(ingredient_id))
}

function updateIngredient(ingredient_id, changes) {
    return db('ingredients')
        .where('ingredient_id', ingredient_id)
        .update(changes)
        .then(count => (count > 0 ? getIngredientById(ingredient_id) : null))
}

async function deleteIngredient(ingredient_id) {
    return db('ingredients')
        .where('ingredient_id', ingredient_id)
        .del()
}

module.exports = {
    getIngredientById,
    addIngredient,
    updateIngredient,
    deleteIngredient
}