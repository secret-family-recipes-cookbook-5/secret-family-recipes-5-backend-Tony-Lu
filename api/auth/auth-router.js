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

router.post('/register', validateRegistration, (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 6)
})

// router.post('/login', (req, res, next) => {
//     const { username, password } = req.body
//     User.findBy({ username })
//         .first()
//         .then(user => {
//             if (user && bcrypt.compareSync(password, user.password)) {
//                 const token = buildToken(user)
//                 res.json({
//                     message: `Welcome, ${user.username}`,
//                     token
//                 })
//             } else {
//                 res.status(401).json({
//                     message: "invalid credentials"
//                 })
//             }
//         })
//         .catch(next)
// })

module.exports = router