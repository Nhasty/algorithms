// Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and postorder are unique.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inOrder, postOrder) => {
  // todo
  if (!inOrder.length) {
    return null;
  }
  const postOrderRoot = postOrder.pop();
  const inOrderRootIndex = inOrder.indexOf(postOrderRoot);
  const inOrderLeft = inOrder.slice(0, inOrderRootIndex);
  const inOrderRight = inOrder.slice(inOrderRootIndex + 1);
  const postOrderLeft = postOrder.slice(0, inOrderLeft.length);
  const postOrderRight = postOrder.slice(inOrderLeft.length);
  const root = new Node(postOrderRoot);
  root.left = buildTreeInPost(inOrderLeft, postOrderLeft);
  root.right = buildTreeInPost(inOrderRight, postOrderRight);
  return root;
};