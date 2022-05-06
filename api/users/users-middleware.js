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

module.exports = { checkUserId }