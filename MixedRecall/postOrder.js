// Write a function, postOrder, that takes in the root of a binary tree. The function should return an array containing the post-ordered values of the tree.

// Post-order traversal is when nodes are recursively visited in the order: left child, right child, self.

const postOrder = (root) => {
  // todo
  if (root === null) {
    return [];
  }
  return [...postOrder(root.left), ...postOrder(root.right), root.val];
};

const postOrder = (root) => {
  const values = [];
  postOrderTraversal(root, values);
  return values;
};

const postOrderTraversal = (root, values) => {
  if (root === null) return;
  postOrderTraversal(root.left, values);
  postOrderTraversal(root.right, values);
  values.push(root.val);
};