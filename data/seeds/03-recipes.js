// sample data
const recipes = [
  {
    title: 'blackbean sauced noodles',
    source: 'Maangchi',
    description: 'in Korean: jajangmyun, for 2 to 3 servings',
    category: 'Korean'
  },
  {
    title: 'broccoli pesto pasta',
    source: 'Uncle Carlo diCocco',
    category: 'Italian',
    description: "Uncle Carlo's delicious broccoli pesto pasta recipe"
  }
]

// enter ingredient_name and recipe_id
const ingredients = [
  // blackbean sauce noodles (recipe_id: 1)
  { ingredient_name: 'jajangmyun noodles', recipe_id: 1 },
  { ingredient_name: 'pork belly', recipe_id: 1 },
  { ingredient_name: 'Korean radish', recipe_id: 1 },
  { ingredient_name: 'zucchini', recipe_id: 1 },
  // broccoli pesto pasta (recipe_id: 2)
  { ingredient_name: 'broccoli', recipe_id: 2 },
  { ingredient_name: 'pesto', recipe_id: 2 },
  { ingredient_name: 'pasta', recipe_id: 2 }
]

// enter step_number, step_instruction, recipe_id
const instructions = [
  // blackbean sauce noodles
  { 
    step_number: 1,
    step_instruction: 'Cut 1/2 pound of pork belly into 1/2 inch cubes (worth about 1 1/2 cups)',
    recipe_id: 1  
  },
  {
    step_number: 2,
    step_instruction: 'Cut the korean radish into 1/2 inch cubes (prepare 1 cup)',
    recipe_id: 1
  },
  {
    step_number: 3,
    step_instruction: 'Cut zucchini in 1/2 inch cubes (prepare 1 cup)',
    recipe_id: 1
  },
  // broccoli pesto pasta (recipe_id: 2)
  {
    step_number: 1,
    step_instruction: 'Heat pan',
    recipe_id: 2
  },
  {
    step_number: 2,
    step_instruction: 'Add broccoli',
    recipe_id: 2
  },
  {
    step_number: 3,
    step_instruction: 'Add pesto mixed with pasta',
    recipe_id: 2
  },
]

exports.seed = async function(knex) {
  await knex('recipes').insert(recipes);
  await knex('ingredients').insert(ingredients);
  await knex('instructions').insert(instructions);
};
