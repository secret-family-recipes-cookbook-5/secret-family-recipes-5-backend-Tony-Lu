const User = require('../users/users-model')
const router = require('express').Router()
const { checkUserId, validateUserUpdate } = require('./users-middleware')

router.get('/:id', checkUserId, async (req, res, next) => {
    try {
        res.json(req.user)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', checkUserId, validateUserUpdate, async (req, res, next) => {
    try {
        const updatedUserInfo = await User.updateUser(
            req.params.id, 
            req.body
        )
        res.json(updatedUserInfo)
    } catch (err) {
        next(err)
    }
})

module.exports = router