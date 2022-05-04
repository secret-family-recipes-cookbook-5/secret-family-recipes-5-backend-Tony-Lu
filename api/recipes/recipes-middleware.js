const Recipe = require('./recipes-model')

async function checkRecipeId (req, res, next) {
    const recipe = await Recipe.getRecipeById(req.params.id)
    if (!recipe) {
        res.status(404).json({
            message: "recipe not found"
        })
    } else {
        req.recipe = recipe
        next()
    }
}

function validateRecipe (req, res, next) {
    const newRecipe = req.body
    if (!newRecipe.title || !newRecipe.source || !newRecipe.category) {
        res.status(400).json({
            message: "Please provide title, source, and category"
        })
    } else {
        next()
    }
}

function validateIngredients (req, res, next) {
    const newIngredient = req.body
    if (
        !newIngredient.ingredient_name || 
        !newIngredient.recipe_id
    ) {
        res.status(400).json({
            message: "ingredient name and recipe id required"
        })
    } else {
        next()
    }
}

function checkIngredientId (req, res, next) {
    next()
}

function validateInstructions (req, res, next) {
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
    checkRecipeId,
    validateRecipe,
    validateIngredients,
    checkIngredientId,
    validateInstructions, 
    checkInstructionId
}