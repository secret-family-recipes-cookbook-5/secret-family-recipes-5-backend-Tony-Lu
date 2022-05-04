const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('Hello from the ingredients router')
})

module.exports = router