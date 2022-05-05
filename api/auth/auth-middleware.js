const User = require('../users/users-model')

// custom middlewares here
function restricted (req, res, next) {
    next()
}

function validateRegistration (req, res, next) {
    const { 
        first_name, 
        last_name, 
        username, 
        password 
    } = req.body
    if (
        !first_name ||
        !last_name ||
        !username ||
        !password
    ) {
        res.status(401).json({
            message: "first name, last name, username, and password are required"
        })
    } else {
        next()
    }
    // if (!first_name) {
    //     res.status(401).json({
    //         message: "first name is required"
    //     })
    // } else if (!last_name) {
    //     res.status(401).json({
    //         message: "last name is required"
    //     })
    // } else if (!username) {
    //     res.status(401).json({
    //         message: "username is required"
    //     })
    // } else if (!password) {
    //     res.status(401).json({
    //         message: "password is required"
    //     })
    // } else {
    //     next()
    // }
}

async function usernameTaken (req, res, next) {
    try {
        const user = await User.findBy({ username: req.body.username })
        if(!user.length) {
            next()
        } else {
            res.status(422).json({
                message: "username taken"
            })
        }
    } catch (err) {
        next(err)
    }
    
}

module.exports = {
    restricted,
    validateRegistration,
    usernameTaken
}