/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n % 2 === 0) {
        return myPow(x ** 2, n / 2);
    }
    if (n < 0) {
      return 1 / myPow(x, Math.abs(n))
    }
    return x * myPow(x, n-1)
    
};