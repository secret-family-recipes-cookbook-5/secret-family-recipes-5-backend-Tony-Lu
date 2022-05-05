const router = require('express').Router()
const { validateInstruction } = require('./instructions-middleware')
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

router.post(
    '/',
    validateInstruction,
    (req, res, next) => {
        Instruction.addInstruction(req.body)
            .then(newInstruction => {
                res.status(201).json(newInstruction)
            })
            .catch(next)
    }
)

module.exports = router