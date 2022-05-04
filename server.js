const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('./api/auth/auth-router')
const recipesRouter = require('./api/recipes/recipes-router')
const ingredientsRouter = require('./api/ingredients/ingredients-router')
const instructionsRouter = require('./api/instructions/instructions-router')

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)
server.use('/api/instructions', instructionsRouter)

server.get('/api', (req, res) => {
    res.json({ api: "up" })
})

server.get('/', (req, res) => {
    res.json({ server: "up" })
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log("err.message", err.message)
    console.log("err.stack", err.stack)
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server