

const tokenReplace = (s, tokens) => {
  // todo
  let i = 0;
  let j = 1;
  let output = '';
  while (i < s.length) {
    if (s[i] === '$') {
      while (s[j] !== '$') {
        j += 1;
      }
      j += 1;
      const token = s.slice(i, j);
      output += tokens[token];
      i = j;
      j = i + 1;
    } else {
      output += s[i]
      i += 1;
      j += 1;
    }
  }
  return output;
};