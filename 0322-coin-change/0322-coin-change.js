/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const count = countChange(coins.reverse(), amount, {});
  return count !== Infinity ? count : -1;
};

const countChange = (coins, amount, memo) => {
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
    const change = 1 + countChange(coins, amount - coin, memo);
    min = Math.min(change, min)
  };
  memo[amount] = min;
  return memo[amount];
}