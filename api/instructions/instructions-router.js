const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('Hello from instructions router')
})

module.exports = router