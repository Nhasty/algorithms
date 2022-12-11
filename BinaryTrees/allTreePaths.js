// Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non-empty.

// df recursive

const allTreePaths = (root) => {
  //todo
  if (root === null) return [];
  if (root.left === null && root.right === null) {
    return [[root.val]];
  }
  let paths = [...allTreePaths(root.left), ... allTreePaths(root.right)]
  paths.forEach((path) => {
    path.reverse().push(root.val);
    path.reverse();
  })
  return paths
};