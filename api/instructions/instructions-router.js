const router = require('express').Router()
const { 
    validateInstruction,
    checkInstructionId 
} = require('./instructions-middleware')
const Instruction = require('./instructions-model')

router.get('/', (req, res, next) => {
    res.send('Hello from instructions router')
})

router.get('/:id', checkInstructionId, (req, res, next) => {
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

router.put(
    '/:id',
    // checkInstructionId,
    // validateInstruction,
    (req, res, next) => {
        res.send('update instruction')
    }
)

router.delete(
    '/:id',
    // checkInstructionId,
    (req, res, next) => {
        res.send('delete instruction')
    }
)

module.exports = router