/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    while (invalidChar(s.charCodeAt(start)) && start < s.length) {
      start += 1;
    }
    while (invalidChar(s.charCodeAt(end)) && end >= 0) {
      end -= 1;
    }
    if (differentChars(s.charCodeAt(start), s.charCodeAt(end))) {
      break
    }
    start += 1;
    end -= 1;
  }
  return start >= end
};
  
const invalidChar = (a) => {
  if ((a >= 65 && a <= 90) || (a >= 97 && a <= 122) || (a >= 48 && a <= 57)) {
    return false;
  }
  return true;
}

const differentChars = (a, b) => {
  if (a >= 65 && a <= 90) {
    a += 32;
  }
  if (b >= 65 && b <= 90) {
    b += 32;
  }
  return a !== b;
}