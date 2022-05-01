// model functions here
const db = require('../../data/db-config')

function get() {
    return db('recipes')
}

function getById(recipe_id) {
    return db('recipes').where('recipe_id', recipe_id).first()
}

module.exports = {
    get,
    getById
}