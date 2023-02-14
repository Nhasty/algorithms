/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i = 0;
  let j = 1;
  let profit = 0;
  while (j <= prices.length) {
    let min = prices[i];
    let max = prices[j];
    if (min < max) {
      profit = Math.max(profit, max - min);  
    }
    if (min >= max) {
      i = j
    }
    j += 1;
  }
  return profit;
};