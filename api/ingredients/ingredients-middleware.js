const Ingredient = require('./ingredients-model')

function validateIngredient (req, res, next) {
    const newIngredient = req.body
    if (
        !newIngredient.ingredient_name || 
        !newIngredient.recipe_id
    ) {
        res.status(400).json({
            message: "ingredient name and recipe id required"
        })
    } else {
        next()
    }
}

async function checkIngredientId (req, res, next) {
    const ingredient = await Ingredient.getIngredientById(req.params.id)
    if (!ingredient) {
        res.status(404).json({
            message: "ingredient not found"
        })
    } else {
        req.ingredient = ingredient
        next()
    }
}

module.exports = {
    validateIngredient,
    checkIngredientId
}