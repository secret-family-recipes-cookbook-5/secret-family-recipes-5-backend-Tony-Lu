const router = require('express').Router()
const Instruction = require('./instructions-model')

router.get('/', (req, res, next) => {
    res.send('Hello from instructions router')
})

router.get('/:id', (req, res, next) => {
    Instruction.getInstructionById(req.params.id)
        .then(instruction => {
            res.json(instruction)
        })
        .catch(next)
})

module.exports = router