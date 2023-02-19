/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    debugger
  let results = [];
  for (let index in tokens) {
    let token = tokens[index];
    if (isNaN(token)) {
      const operand2 = results.pop();
      const operand1 = results.pop();
      if (token === '+') {
        token = operand1 + operand2;
      } else if (token === '*') {
        token = operand1 * operand2;
      } else if (token === '-') {
        token = operand1 - operand2;
      } else if (token === '/') {
        token = Math.trunc(operand1 / operand2);
      }
    }
    results.push(Number(token));
  }
  return results[0];
};