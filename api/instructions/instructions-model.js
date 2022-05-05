const db = require('../../data/db-config')

function getInstructionById(step_id) {
    return db('instructions')
        .where('step_id', step_id)
        .first()
}

function addInstruction(newInstruction) {
    return db('instructions')
        .insert(newInstruction)
        .then(([step_id]) => getInstructionById(step_id))
}

function updateInstruction(step_id, changes) {
    return db('instructions')
        .where('step_id', step_id)
        .update(changes)
        .then(count => (count > 0 ? getInstructionById(step_id) : null))
}

// function deleteInstruction(step_id) {
//     return null
// }

module.exports = {
    getInstructionById,
    addInstruction,
    updateInstruction,
    // deleteInstruction
}