const router = require("express").Router()
const { checkRecipeId, validateRecipe, validateIngredients, validateInstructions } = require("./recipes-middleware")
const Recipe = require('./recipes-model')

// endpoints here

// RECIPES
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
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
        next(err)
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
            // console.log(req.body)
            const updatedRecipe = await Recipe.updateRecipe(
                req.params.id, 
                req.body
            )
            // console.log(updatedRecipe)
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
        next(err);
    }
})

// INGREDIENTS
router.post(
    '/:id/ingredients', 
    checkRecipeId, 
    validateIngredients,
    (req, res, next) => {
        res.send('add ingredients')
    }
)

router.put(
    '/:id/ingredients/:id',
    checkRecipeId,
    validateIngredients,
    (req, res, next) => {
        res.send('update ingredient')
    }
)

router.delete(
    '/:id/ingredients/:id',
    checkRecipeId,
    (req, res, next) => {
        res.send('delete ingredient')
    }
)

// INSTRUCTIONS
// router.post(
//     '/:id/instructions',
//     checkRecipeId,
//     validateInstructions,
//     (req, res, next) => {
//         res.send('add instructions')
//     }
// )

// router.put(
//     '/:id/instructions/:id',
//     checkRecipeId,
//     validateInstructions,
//     (req, res, next) => {
//         res.send('update instruction')
//     }
// )

// router.delete(
//     '/:id/instructions/:id',
//     checkRecipeId,
//     (req, res, next) => {
//         req.send('delete instruction')
//     }
// )

module.exports = router