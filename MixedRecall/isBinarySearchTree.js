// Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.

// A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

const isBinarySearchTree = (root) => {
  // todo
  const leftSelfRight = [];
  traverse(root, leftSelfRight);
  for (let i = 1; i < leftSelfRight.length; i += 1) {
    if (leftSelfRight[i -1] > leftSelfRight[i]) {
      return false;
    }
  }
  return true;
};

const traverse = (root, values) => {
  if (root === null) {
    return [];
  }
  traverse(root.left, values);
  values.push(root.val);
  traverse(root.right, values);
};