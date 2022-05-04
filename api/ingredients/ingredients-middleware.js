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

function checkIngredientId (req, res, next) {
    next()
}

module.exports = {
    validateIngredient,
    checkIngredientId
}