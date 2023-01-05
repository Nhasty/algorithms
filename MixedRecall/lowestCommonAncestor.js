// Write a function, lowestCommonAncestor, that takes in the root of a binary tree and two values. The function should return the value of the lowest common ancestor of the two values in the tree.

// You may assume that the tree values are unique and the tree is non-empty.

// Note that a node may be considered an ancestor of itself.

const lowestCommonAncestor = (root, val1, val2) => {
  // todo
  const pathA = findPath(root, val1);
  const pathB = findPath(root, val2);
  const pathSet = new Set(pathA);
  for (let val of pathB) {
    if (pathSet.has(val)) {
      return val;
    }
  }
  return null;
};

const findPath = (root, val) => {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return [val];
  }
  const leftPath = findPath(root.left, val);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }
  const rightPath = findPath(root.right, val) {
    if (rightPath) {
      rightPath.push(root.val);
      return rightPath
    }
  }
  return null;
};