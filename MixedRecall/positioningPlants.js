// You've been hired to plant flowers in a garden with n different positions. There are m different flower types. The prices of flowers types vary depending on which position they are planted. Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. What is the minimum cost we need to plant a flower in each position of the garden?

// Write a function, positioningPlants, that takes in a 2D array with dimensions n * m. Each row of the array represents the costs of the flower types at that position. This means that costs[i][j] represents the cost of planting flower type j at position i. For example:

const positioningPlants = (costs, position = 0, lastPlant = null, memo = {}) => {
  // todo
  if (position === costs.length) {
    return 0;
  }
  const key = position + ',' + lastPlant;
  if (key in memo) {
    return memo[key];
  }
  const options = []
  const plantPositionCost = costs[position];
  for (let i = 0; i < plantPositionCost.length; i += 1) {
    if (i !== lastPlant) {
      const sum = plantPositionCost[i] + positioningPlants(costs, position + 1, i, memo);
      options.push(sum);
    }
  }
  memo[key] = Math.min(...options);
  return memo[key];
}