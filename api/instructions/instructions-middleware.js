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

function checkInstructionId (req, res, next) {
    next()
}

module.exports = {
    validateInstruction,
    checkInstructionId
}