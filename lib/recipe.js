'use strict'

// ingredients
const flour = {
    name: 'flour',
    location: 'pantry'
}

const butter = {
    name: 'butter',
    location: 'fridge'
}

const sugar = {
    name: 'sugar',
    location: 'pantry'
}

const egg = {
    name: 'egg',
    location: 'fridge'
}
// ingredient quantities
const butterQuantity = {
    ingredient: butter,
    unitOfMeasure: 'sticks',
    quantity: 1,
    notes: 'softened'
}

const flourQuantity = {
    ingredient: flour,
    unitOfMeasure: 'cups',
    quantity: 2,
    notes: 'sifted'
}

const sugarQuantity = {
    ingredient: sugar,
    unitOfMeasure: 'cups',
    quantity: 1
}

const eggQuantity = {
	ingredient: egg,
	unitOfMeasure: null,
	quantity: 2,
	notes: 'beaten',
}

// recipe
const recipe = {
    name: 'Sugar Cookies',
    ingredients: [
        flourQuantity,
        sugarQuantity,
        eggQuantity,
        butterQuantity
    ],
    servings: 24,
    author: 'Timm',
    steps: [
        'Cream the butter and sugar together',
        'add the egg',
        'mix in to the flour',
        'roll out the dough',
        'cut out cute shapes',
        'bake on a greased cookie sheet for 11 minutes at 350f'
    ],
    printIngredients: function () {
        for (let i = 0; i < recipe.ingredients.length; i++) {
            console.log(recipe.ingredients[i].quantity + ' ' + recipe.ingredients[i].unitOfMeasure + ' of ' + recipe.ingredients[i].ingredient.name)
        }
    }
}

console.log('this is the recipe \n', recipe)
console.log('these are the recipe ingredients \n', recipe.ingredients)
recipe.printIngredients()