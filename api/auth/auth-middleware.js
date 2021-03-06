const User = require('../users/users-model')
const { JWT_SECRET } = require('../secrets/index')
const jwt = require('jsonwebtoken')

// custom middlewares here
function restricted (req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({
            message: "token required"
        })
    }
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({
                message: "invalid token"
            })
        } else {
            req.decodedToken = decodedToken
            next()
        }
    })
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