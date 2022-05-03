const Recipe = require('./recipes-model')

async function checkRecipeId (req, res, next) {
    const recipe = await Recipe.getById(req.params.id)
    if (!recipe) {
        res.status(404).json({
            message: "recipe not found"
        })
    } else {
        req.recipe = recipe
        next()
    }
}

module.exports = { checkRecipeId }