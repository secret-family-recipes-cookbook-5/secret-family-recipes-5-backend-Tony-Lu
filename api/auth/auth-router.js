const router = require("express").Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets/index')
const { 
    validateRegistration, 
    usernameTaken 
} = require("./auth-middleware")
const User = require('../users/users-model')

// endpoints here
router.get('/', (req, res) => {
    res.send("Hello from auth router")
})

router.post('/register', validateRegistration, usernameTaken, (req, res, next) => {
    const { 
        first_name, 
        last_name, 
        username, 
        password 
    } = req.body
    const hash = bcrypt.hashSync(password, 6)
    User.addNewUser({ first_name, last_name, username, password: hash })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body
    User.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = buildToken(user)
                res.json({
                    message: `Welcome, ${user.username}`,
                    token
                })
            } else {
                res.status(401).json({
                    message: "invalid credentials"
                })
            }
        })
        .catch(next)
})

function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router