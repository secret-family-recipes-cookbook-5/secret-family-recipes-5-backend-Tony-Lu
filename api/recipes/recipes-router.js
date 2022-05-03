const router = require("express").Router()
const { checkRecipeId } = require("./recipes-middleware")
const Recipe = require('./recipes-model')

// endpoints here
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.get()
        if (!recipes) {
            res.json([])
        } else {
            res.json(recipes)
        }
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkRecipeId, async (req, res, next) => {
    try {
        const ingredients = await Recipe.getIngredientsByRecipeId(req.recipe.recipe_id)
        const instructions = await Recipe.getInstructionsByRecipeId(req.recipe.recipe_id)
        res.json({
            ...req.recipe,
            ingredients: ingredients,
            instructions: instructions
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router