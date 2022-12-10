// Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

// You may assume that the tree contains unique values.

// recursive
const PathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) return null;
  return result.reverse();
}

const  pathFinderHelper = (root, target) => {
  // todo
  if (root === null) {
    return null;
  }
  if (root.val === target) {
    return [ root.val ];
  }
  const leftPath = pathFinder(root.left, target)
  const rightPath = pathFinder(root.right, target)
  if (leftPath === null && rightPath === null) {
    return null;
  }
  if (leftPath === null) {
    leftPath.push(root.val);
    return leftPath
  }
  if (rightPath === null) {
    rightPath.push(root.val);
    return rightPath;
  }
};