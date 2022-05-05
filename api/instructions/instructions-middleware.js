const Instruction = require('./instructions-model')

function validateInstruction (req, res, next) {
    const newInstruction = req.body
    if (
        !newInstruction.step_number || 
        !newInstruction.step_instruction || 
        !newInstruction.recipe_id
    ) {
        res.status(400).json({
            message: "step number, step instruction, and recipe id are required"
        })
    } else {
        next()
    } 
}

async function checkInstructionId (req, res, next) {
    const instruction = await Instruction.getInstructionById(req.params.id)
    if (!instruction) {
        res.status(404).json({
            message: "instruction not found"
        })
    } else {
        next()
    }
}

module.exports = {
    validateInstruction,
    checkInstructionId
}