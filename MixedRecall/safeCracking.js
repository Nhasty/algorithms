// Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

// The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

// Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.

const safeCracking = (hints) => {
  // todo
  const parentsMap = {};
  for (let hint of hints) {
    const [a, b] = hint;
    if (!(a in parentsMap)) {
      parentsMap[a] = 0
    }
    if (!(b in parentsMap)) {
      parentsMap[b] = 0
    }
    parentsMap[b] += 1;
  }
  const stack = [];
  const combo = '';
  for (let node in parentsMap) {
    if (parentsMap[node] === 0) {
      stack.push(node);
    }
  }
  while (stack.length) {
    const current = stack.pop();
    combo += current;
    for (let child of parentsMap[current]) {
      parentsMap[child] -= 1;
      if (parentsMap[child] === 0) {
        stack.push(child);
      }
    }
  }
  return combo;
};