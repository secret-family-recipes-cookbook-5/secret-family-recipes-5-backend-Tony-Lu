const recipes = [
    { 
        title: "Blackbean Sauce Noodles (jjajangmyun)", 
        source: "Maangchi", 
        description: "2-3 servings",
        category: "Korean",
        ingredients: "jjajangmyun noodles, pork belly, Korean radish (daikon), zucchini, potatoes, onions, vegetable oil, black bean paste, potato starch powder, sugar, toasted sesame oil, cucumber, water" 
    }
]

const instructions = [
    // Blackbean Sauce Noodles
    { 
        step_number: 1, 
        step_instruction: "",
        // recipe_id: ,
    },
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
}