const tokenTransform = (s, tokens, memo = {}) => {
  // todo
  let i = 0;
  let j = 1;
  let output = '';
  while (i < s.length) {
    if (s[i] === '$') {
      while(s[j] !== '$') {
        j += 1
      }
      j += 1;
      const token = s.slice(i, j)
      if (!(token in memo)) {
        memo[token] = tokenTransform(tokens[token], tokens, memo);
      }
      i = j;
      j = i + 1;
      output += memo[token];
    } else {
      output += s[i]
      i += 1;
      j += 1;
    }
  }
  return output;
};