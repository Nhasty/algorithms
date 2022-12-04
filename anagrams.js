Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true

const anagrams = (s1, s2) => {
  // todo
  const map1 = {};
  const map2 = {};
  if (s1.length !== s2.length) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    if (map1[s1[i]] === undefined) {
      map1[s1[i]] = 1
    } else {
      map1[s1[1]]++
    }
    if (map2[s2[i]] === undefined) {
      map2[s2[i]] = 1
    } else {
      map2[s2[1]]++
    }
  }
  for (key in map1) {
    if (map1[key] !== map2[key]) {
      return false
    }
  }
  return true;
};

module.exports = {
  anagrams,
};
