/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
  if ( amount < 0) {
    return Infinity;
  }
  if (amount === 0) {
    return 0;
  }
  if (amount in memo) {
    return memo[amount];
  }
  let min = Infinity
  for (let coin of coins) {
    const change = coinChange(coins, amount - coin, memo);
    if (change >= 0) {
      min = Math.min(1 + change, min)
    } 
  };
  memo[amount] = min !== Infinity ? min : -1;
  return memo[amount];
};