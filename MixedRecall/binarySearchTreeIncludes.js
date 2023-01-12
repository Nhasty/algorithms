// Write a function, binarySearchTreeIncludes, that takes in the root of a binary search tree containing numbers and a target value. The function should return a boolean indicating whether or not the target is found within the tree.

// A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

// Your solution should have a best case runtime of O(log(n)).

const binarySearchTreeIncludes = (root, target) => {
  // todo
  if (root === null) {
    return false;
  }
  if (root.val === target) {
    return true;
  }
  if (target < root.val) {
    return binarySearchTreeIncludes(root.left, target);
  } else {
    return binarySearchTreeIncludes(root.right, target);
  }
};