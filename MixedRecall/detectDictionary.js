// Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.


const detectDictionary = (dictionary, alphabet) => {
  // todo
  debugger
  for (let i = 1; i < dictionary.length; i += 1) {
    const firstWord = dictionary[i - 1];
    const secondWord = dictionary[i];
    if (!lexicalOrder(firstWord, secondWord, alphabet)) {
      return false;
    }
  }
  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  let pointer = 0;
  while (word1[pointer] === word2[pointer] && word1 !== undefined) {
    pointer += 1;
  }
  if (word1 === undefined) {
    return true;
  }
  return alphabet.indexOf(word1[pointer]) < alphabet.indexOf(word2[pointer]);
}
module.exports = {
  detectDictionary,
};