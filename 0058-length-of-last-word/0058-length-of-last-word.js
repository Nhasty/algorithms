/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const wordList = s.trim().split(' ');
  return wordList[wordList.length - 1].length;  
};