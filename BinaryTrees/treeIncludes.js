// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

// iterative

const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  const stack = [ root ];
  while (stack.length) {
    const visiting = stack.pop();
    if (visiting.val === target) {
      return true;
    }
    if (visiting.right !== null) {
      stack.push(visiting.right);
    }
    if (visiting.left !== null) {
      stack.push(visiting.left);
    }
  }
  return false
};

// recursive

const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  if (root.val === target) return true;
  return (treeIncludes(root.left, target) || treeIncludes(root.right, target));
};