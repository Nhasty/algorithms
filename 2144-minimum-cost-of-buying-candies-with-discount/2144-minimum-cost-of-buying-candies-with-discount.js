/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  cost.sort((a,b) => b - a);
  const solution = cost.reduce((memo, item, index) => {
    if ((index + 1) % 3 !== 0) {
      return memo + item;
    } else {
      return memo;
    }
  }, 0);
  return solution;
};
