const router = require("express").Router()
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

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.getById(req.params.id)
        if (!recipe) {
            res.status(404).json({
                message: "recipe not found"
            })
        } else {
            res.json(recipe)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router