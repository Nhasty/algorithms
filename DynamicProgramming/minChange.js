// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.

const minChange = (amount, coins, memo = {}) => {
  // todo
  if (amount === 0) {
    return 0;
  }
  if (amount < 0) {
    return -1;
  }
  if (amount in memo) {
    return memo[amount];
  }
  let min = Infinity;
  for (let coin of coins) {
    const coinsUsed = minChange(amount - coin, coins);
    if (coinsUsed < min && coinsUsed >= 0) {
      min = coinsUsed;
    }
  }
  memo[amount] = min === Infinity ? -1 : min + 1;
  return min === Infinity ? -1 : min + 1;
};