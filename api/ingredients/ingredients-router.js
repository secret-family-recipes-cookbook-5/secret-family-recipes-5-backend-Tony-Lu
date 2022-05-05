const router = require('express').Router()
const Ingredient = require('./ingredients-model')
const { 
    validateIngredient, 
    checkIngredientId 
} = require('./ingredients-middleware') 

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
        Ingredient.addIngredient(req.body)
            .then(newIngredient => {
                res.status(201).json(newIngredient)
            })
            .catch(next)
    }
)

router.put(
    '/:id',
    validateIngredient,
    checkIngredientId,
    (req, res, next) => { 
        Ingredient.updateIngredient(req.params.id, req.body)
            .then(updated => {
                res.json(updated)
            })
            .catch(next)
    }
)

router.delete(
    '/:id',
    checkIngredientId,
    async (req, res, next) => {
        try {
            await Ingredient.deleteIngredient(req.params.id)
            res.json(req.ingredient)    
        } catch (err) {
            next()
        }
    }
)

module.exports = router