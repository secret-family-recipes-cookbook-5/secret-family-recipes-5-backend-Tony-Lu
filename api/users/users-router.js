const User = require('../users/users-model')
const router = require('express').Router()
const { restricted } = require('../auth/auth-middleware')
const { checkUserId } = require('./users-middleware')

router.get('/:id', checkUserId, async (req, res, next) => {
    try {
        res.json(req.user)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = router