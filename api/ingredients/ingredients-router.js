const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('Hello from the ingredients router')
})

router.post(
    '/', 
    (req, res, next) => {
        res.send('add ingredients')
    }
)

router.put(
    '/:id',
    (req, res, next) => {
        res.send('update ingredient')
    }
)

router.delete(
    '/:id',
    (req, res, next) => {
        res.send('delete ingredient')
    }
)

module.exports = router