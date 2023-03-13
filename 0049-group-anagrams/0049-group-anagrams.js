/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let str of strs) {
    const count = Array(26).fill(0);
    for (let letter of str) {
      count[letter.charCodeAt() - 97] += 1;
    }
    const key = count.join(',');
    if (!(key in map)) {
      map[key] = []
    }
    map[key].push(str);
  }
  return Object.values(map);
};