/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tMap = {}; 
  for (let letter of t) {
    if(letter in tMap) {
      tMap[letter] += 1;
    } else {
      tMap[letter] = 1;
    }
  }
  for (let letter of s) {
    if (!(letter in tMap)) {
      return false
    }
    tMap[letter] -= 1;
    if (tMap[letter] < 0) {
      return false
    }
  }
  return Object.values(tMap).reduce((a, b) => a + b, 0) === 0;
};