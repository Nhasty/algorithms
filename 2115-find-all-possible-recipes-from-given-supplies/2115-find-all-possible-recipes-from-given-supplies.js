/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    debugger;
  const canMake = {};
  const recipesMap = new Map();
  recipes.forEach((recipe, index) => {
    canMake[recipe] = null;
    recipesMap.set(recipe, ingredients[index]);
  })
  supplies.forEach((supply) => {
    canMake[supply] = true;
  })
  const output = [];
  recipes.forEach((recipe, index) => {
    canMake[recipe] = findOneRecipe(recipe, recipesMap, canMake, new Set());
    if (canMake[recipe]) {
      output.push(recipe);
    }
  })
  return output;
};
                  
const findOneRecipe = (recipe, ingredients, canMake, cycle) => {
  if (canMake[recipe]) {
    return true;
  }
  if (cycle.has(recipe)) {
    return false;
  }
  cycle.add(recipe);
  for (let ingredient of ingredients.get(recipe)) {
    if (canMake[ingredient] === null) {
      canMake[ingredient] = findOneRecipe(ingredient, ingredients, canMake, cycle);
    }
    if (!canMake[ingredient]) {
      return false;
    }
  }
  return true;
};