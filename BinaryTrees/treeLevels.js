// Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.

// df iterative

const treeLevels = (root) => {
  // todo
  if (root === null) return [];
  const levels = [];
  const stack = [ { node: root, level: 0 } ];
  while (stack.length) {
    const visiting = stack.pop();
    if (levels[visiting.level]) {
      levels[visiting.level].push(visiting.node.val);
    } else {
      levels[visiting.level] = [ visiting.node.val ];
    }
    if (visiting.node.right !== null) {
      stack.push({ node: visiting.node.right, level: visiting.level + 1})
    }
    if (visiting.node.left !== null) {
      stack.push({ node: visiting.node.left, level: visiting.level + 1})
    }
  }
  return levels
};

// df recursive

const treeLevels = (root) => {
  // todo
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels
}

const _treeLevels = (root, levels, levelNum) => {
  if (root === null) {
    return;
  }
  if (levels.length === levelNum) {
    levels[levelNum] = [ root.val ];
  } else {
    levels[levelNum].push(root.val);
  }
  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
};


