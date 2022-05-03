// model functions here
const db = require('../../data/db-config')

/*
select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
from employees as e
join departments as d
  on e.department_id = d.id
order by d.name, e.last_name

db('employees as e')
  .join('departments as d', 'e.department_id', 'd.id')
  .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.salary')
*/

function get() {
    /*
    select * from recipes as r
    join ingredients as ing
        on ing.recipe_id = r.recipe_id
    join instructions as inst
        on inst.recipe_id = r.recipe_id
    order by step_number
    */
    return db('recipes')
        
        
}

function getById(recipe_id) {
    return db('recipes a r')
        .where('r.recipe_id', recipe_id)
        .innerJoin('ingredients as ing', 'ing.recipe_id', 'r.recipe_id')
        .innerJoin('instructions as inst', 'inst.recipe_id', 'r.recipe_id')
        .orderBy('step_number')
        .first()
}

module.exports = {
    get,
    getById
}