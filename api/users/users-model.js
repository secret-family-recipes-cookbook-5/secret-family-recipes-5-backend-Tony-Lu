const db = require('../../data/db-config')

function findBy(filter) {
    return db('users').where(filter)
}

function findByUserId(user_id) {
    return db('users')
        .where('user_id', user_id)
        .select('first_name','last_name', 'username')
        .first()
}

async function addNewUser(newUser) {
    const [user_id] = await db('users').insert(newUser)
    return findByUserId(user_id)
}

module.exports = {
    findBy,
    findByUserId,
    addNewUser
}