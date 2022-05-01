const knex = require('knex')
const configs = require('../knexfile')
const environment = process.env.NODE.ENV || 'development'

module.exports = knex(configs[environment])