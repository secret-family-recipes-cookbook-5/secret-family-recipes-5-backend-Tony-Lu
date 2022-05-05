const router = require("express").Router()
const { checkRecipeId, validateRecipe, validateIngredients, validateInstructions } = require("./recipes-middleware")
const Recipe = require('./recipes-model')

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
        if (!recipes) {
            res.json([])
        } else {
            res.json(recipes)
        }
    } catch(err) {
        next()
    }
})

router.get('/:id', checkRecipeId, async (req, res, next) => {
    try {
        const ingredients = await Recipe.getIngredientsByRecipeId(req.recipe.recipe_id)
        const instructions = await Recipe.getInstructionsByRecipeId(req.recipe.recipe_id)
        if (!ingredients || !instructions) {
            res.json([])
        } else {
            res.json({
                ...req.recipe,
                ingredients: ingredients,
                instructions: instructions
            })
        }
    } catch (err) {
        next()
    }
})

router.get('/:id/ingredients',checkRecipeId, async (req, res, next) => {
    try {
        const ingredients = await Recipe.getIngredientsByRecipeId(req.recipe.recipe_id)
        if (!ingredients) {
            res.status(404).json({
                message: "no ingredients found"
            })
        } else {
            res.json(ingredients)
        }
    } catch (err) {
        next()
    }
})

router.get('/:id/instructions', checkRecipeId, async (req, res, next) => {
    try {
        const instructions = await Recipe.getInstructionsByRecipeId(req.recipe.recipe_id)
        if (!instructions) {
            res.status(404).json({
                message: "no instructions found"
            })
        } else {
            res.json(instructions)
        }
    } catch (err) {
        next()
    }
})

router.post('/', validateRecipe, (req, res, next) => {
    Recipe.addNewRecipe(req.body)
        .then(newRecipe => {
            res.status(201).json(newRecipe)
        })
        .catch(next)
})

router.put(
    '/:id', 
    checkRecipeId, 
    validateRecipe, 
    async (req, res, next) => {
        try {
            const updatedRecipe = await Recipe.updateRecipe(
                req.params.id, 
                req.body
            )
            res.json(updatedRecipe)
        } catch (err) {
            next()
        }
})

router.delete('/:id', checkRecipeId, async (req, res, next) => {
    try {
        await Recipe.deleteRecipe(req.params.id)
        res.json(req.recipe)
    } catch (err) {
        next();
    }
})

module.exports = router