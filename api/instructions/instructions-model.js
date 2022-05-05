const db = require('../../data/db-config')

function getInstructionById(step_id) {
    return db('instructions')
        .where('step_id', step_id)
        .first()
}

// function addInstruction(instruction) {
//     return null
// }

// function updateInstruction(step_id) {
//     return null
// }

// function deleteInstruction(step_id) {
//     return null
// }

module.exports = {
    getInstructionById
    // addInstruction,
    // updateInstruction,
    // deleteInstruction
}