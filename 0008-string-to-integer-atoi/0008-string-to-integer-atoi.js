/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  debugger
  let int = '';
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (isNaN(char) || char === ' ') {
      if (int.length > 0 || !(char === '-' || char === '+' || char === ' ')) {
        break;
      }
      if (char === '-') {
        int = '-'
      }
      if (char === '+') {
        int = '+'
      }
    } else {
     int += char; 
    }
  }
  if (!int.length || int === '-' || int === '+') {
    return 0;
  }
  int = Number(int);
  range = Math.pow(2, 31);
  if (int < -range) {
    return -range;
  }
  if (int > range - 1) {
    return range - 1;
  }
  return int
};