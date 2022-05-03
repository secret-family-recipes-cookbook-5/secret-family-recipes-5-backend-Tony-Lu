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
        res.json(req.recipe)
    } catch (err) {
        next(err)
    }
})

// router.get(':id/ingredients', (req, res, next) => {
//     Recipe.getIngredients()
//         .then(ingredients => {
//             res.json(ingredients)
//         })
//         .catch(next)
// })

// router.get(':id/instructions', (req, res, next) => {
//     Recipe.getInstructions()
//         .then(instructions => {
//             res.json(instructions)
//         })
//         .catch(next)
// })

// router.get('/:id/ingredients', async (req, res, next) => {
//     try {
//         const recipe = await Recipe.getById(req.params.id)
//         if (!recipe) {
//             res.status(404).json({
//                 message: 'recipe not found'
//             })
//         } else {
//             const ingredients = await Recipe.getIngredients(req.params.id)
//             res.json(ingredients)
//         }
//     } catch (err) {
//         next(err)
//     }
// })

module.exports = router