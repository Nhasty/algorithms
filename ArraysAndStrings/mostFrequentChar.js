// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  // empty object
  const charMap = {};
  // currentMax = object with count 0
  let currentMax = {count: 0};
  // iterate over string
  for (let i = 0; i < s.length; i++) {
    // if char not in object
    if (charMap[s[i]] === undefined) {
      // define key = object containg count and first appearence index and char
      charMap[s[i]] = {
        count: 1,
        index: i,
        char: s[i],
      }
    } else {
      // else increment key
      charMap[s[i]].count++;
    }
  }
  // iterate object
  for (key in charMap) {
    if (charMap[key].count > currentMax.count) {
      currentMax = charMap[key];
    }
    if (charMap[key].count === currentMax.count && charMap.index < currentMax.index) {
      currentMax = charMap[key]
    }
  }
  return currentMax.char;
    // if count > current max count
      // currentMax = object
    // if count === current max count
      // select by lowest index
  // return currentMax
};