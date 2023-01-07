// Write a function, leftyNodes, that takes in the root of a binary tree. The function should return an array containing the left-most value on every level of the tree. The array must be ordered in a top-down fashion where the root is the first element.

// Note that the left-most node on a level may not necessarily be a left child.

const leftyNodes = (root) => {
  // todo
  const values = [];
  const traverse = (node, level) => {
    if (node === null) {
      return
    }
    if (values[level] === undefined) {
      values.push(node.val);
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return values;
};