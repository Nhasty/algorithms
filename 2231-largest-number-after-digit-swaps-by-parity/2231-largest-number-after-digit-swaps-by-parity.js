/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
  const odds = [];
  const evens = [];
  debugger
  const nums = String(num).split('');
  for (let n of nums) {
    
    if (n % 2 === 0) {
      evens.push(Number(n));
    } else {
      odds.push(Number(n));
    }
  }
  odds.sort((a, b) => a - b);
  evens.sort((a, b) => a - b);
  results = '';
  for (let n of nums) {
    if (n % 2 === 0) {
      results += evens.pop();
    } else {
      results += odds.pop();
    }
  }
  return results;
};