const router = require('express').Router()
const Ingredient = require('./ingredients-model')
const { 
    validateIngredient, 
    checkIngredientId 
} = require('./ingredients-middleware') 

router.get('/', (req, res, next) => {
    res.send('Hello from the ingredients router')
})

router.get(
    '/:id',
    checkIngredientId, 
    (req, res, next) => {
        Ingredient.getIngredientById(req.params.id)
            .then(ingredient => {
                res.json(ingredient)
            })
            .catch(next)
    }
)

router.post(
    '/',
    validateIngredient, 
    (req, res, next) => {
        // res.send('add ingredients')
        console.log("POST req.body ==>", req.body)
        Ingredient.addIngredient(req.body)
            .then(newIngredient => {
                res.json(newIngredient)
            })
            .catch(next)
    }
)

router.put(
    '/:id',
    validateIngredient,
    checkIngredientId,
    (req, res, next) => { 
        // res.send('update ingredient')
        console.log("PUT req.body ==>", req.body)
        Ingredient.updateIngredient(req.params.id, req.body)
            .then(updated => {
                console.log("updated ==>", updated)
                res.json(updated)
            })
            .catch(next)
    }
)

router.delete(
    '/:id',
    checkIngredientId,
    (req, res, next) => {
        // res.send('delete ingredient')
        console.log("DELETE req.params.id ==>", req.params.id)
        Ingredient.deleteIngredient(req.params.id)
            .then(deleted => {
                console.log("deleted ==>", deleted)
                res.json(deleted)
            })
            .catch(next)
    }
)

module.exports = router