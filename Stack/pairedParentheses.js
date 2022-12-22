

const pairedParentheses = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      count += 1;
    }
    if (str[i] === ')') {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }
  return !count
}