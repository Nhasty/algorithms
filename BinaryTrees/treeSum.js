// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

// iterative

const treeSum = (root) => {
  // todo
  if (root === null) return 0;
  let sum = 0;
  const stack = [ root ];
  while (stack.length) {
    const visiting = stack.pop();
    sum += visiting.val;
    if (visiting.right !== null) {
      stack.push(visiting.right)
    }
    if (visiting.left !== null) {
      stack.push(visiting.left)
    }
  }
  return sum;
};

// recursive

const treeSum = (root) => {
  // todo
  if (root === null) return 0;
  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);
  return root.val + leftSum + rightSum;
};