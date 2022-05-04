const Recipe = require('./recipes-model')

async function checkRecipeId (req, res, next) {
    const recipe = await Recipe.getRecipeById(req.params.id)
    if (!recipe) {
        res.status(404).json({
            message: "recipe not found"
        })
    } else {
        req.recipe = recipe
        next()
    }
}

function validateRecipe (req, res, next) {
    const newRecipe = req.body
    if (!newRecipe.title || !newRecipe.source || !newRecipe.category) {
        res.status(400).json({
            message: "Please provide title, source, and category"
        })
    } else {
        next()
    }
}

module.exports = { 
    checkRecipeId,
    validateRecipe
}