const router = require('express').Router()
const Ingredient = require('./ingredients-model')

router.get('/', (req, res, next) => {
    res.send('Hello from the ingredients router')
})

router.get('/:id', (req, res, next) => {
    Ingredient.getIngredientById(req.params.id)
        .then(ingredient => {
            res.json(ingredient)
        })
        .catch(next)
})

router.post(
    '/', 
    (req, res, next) => {
        // res.send('add ingredients')
        console.log(req.body)
        Ingredient.addIngredient(req.body)
            .then(newIngredient => {
                res.json(newIngredient)
            })
            .catch(next)
    }
)

router.put(
    '/:id',
    (req, res, next) => { 
        // res.send('update ingredient')
        console.log(req.body)
        Ingredient.updateIngredient(req.params.id, req.body)
            .then(updated => {
                res.json(updated)
            })
            .catch(next)
    }
)

router.delete(
    '/:id',
    (req, res, next) => {
        res.send('delete ingredient')
    }
)

module.exports = router