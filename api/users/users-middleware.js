const User = require('./users-model')

async function checkUserId (req, res, next) {
    const user = await User.findByUserId(req.params.id)
        if (!user) {
            res.status(404).json({
                message: "user not found"
            })
        } else {
            req.user = user
            next()
        }
}

function validateUserUpdate (req, res, next) {
    const { first_name, last_name, username } = req.body
    if (!first_name || !last_name || !username) {
        res.status(400).json({
            message: "must have first name, last name, and username"
        })
    } else {
        next()
    }
}

module.exports = { checkUserId, validateUserUpdate }