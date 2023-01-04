// Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments. The object contains words as keys whose values are arrays containing synonyms. The function should return an array containing all possible sentences that can be formed by substituting words of the sentence with their synonyms.

// You may return the possible sentences in any order, as long as you return all of them.

const substituteSynonyms = (sentence, synonyms) => {
  // todo
  const words = sentence.split(' ');
  const combos = generate(words, synonyms)
  return combos.map((newSentence) => newSentence.join(' '));
}

const generate = (words, synonyms)  => {
  if (!words.length) {
    return [[]];
  }

  const first = words[0];
  const combos = generate(words.slice(1), synonyms);
  const allSentences = [];
  for (let combo of combos) {
    if (first in synonyms) {
      for (let synonym of synonyms[first]) {
        allSentences.push([synonym, ...combo]);
      }
    } else {
      allSentences.push([first, ...combo]);
    }
  }
  return allSentences;
};