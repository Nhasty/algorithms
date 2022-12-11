// Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.


//df recursive

const levelAverages = (root) => {
  // todo
  const levels = [];
  _levelAverages(root, levels, 0);
  return levels.map((level) => level.reduce((memo, value) => memo + value, 0) / level.length)
};

const _levelAverages = (root, levels, levelNum) => {
  if (root === null) return;
  if (levels.length === levelNum) {
    levels[levelNum] = [ root. val ];
  } else {
    levels[levelNum].push(root.val);
  }
  _levelAverages(root.left, levels, levelNum + 1);
  _levelAverages(root.right, levels, levelNum + 1);
}