// Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. If the second word should appear first, then return false.

// Note that the alphabet string may be any arbitrary string.

// Intuitively, Lexical Order is like "dictionary" order:

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.

const lexicalOrder = (word1, word2, alphabet) => {
  // todo
  let index = 0;
  while (word1[index] === word2[index] && word1[index]) {
    index += 1;
  }
  if (word1[index] === undefined) {
    return true;
  }
  return alphabet.indexOf(word1[index]) < alphabet.indexOf(word2[index]);
};