// Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and preorder are unique.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (inOrder, preOrder) => {
  // todo
  if (!inOrder.length) {
    return null;
  }
  const preOrderRoot = preOrder[0];
  const inOrderRootIndex = inOrder.indexOf(preOrderRoot);
  const inOrderLeft = inOrder.slice(0, inOrderRootIndex);
  const inOrderRight = inOrder.slice(inOrderRootIndex + 1);
  const preOrderLeft = preOrder.slice(1, inOrderLeft.length + 1);
  const preOrderRight = preOrder.slice(inOrderLeft.length + 1);
  const root = new Node(preOrderRoot);
  root.left = buildTreeInPre(inOrderLeft, preOrderLeft);
  root.right = buildTreeInPre(inOrderRight, preOrderRight);
  return root;
};

const buildTreeInPre = (inOrder, preOrder, inOrderStart = 0, inOrderStop = inOrder.length - 1, preOrderStart = 0, preOrderStop = preOrder.length - 1) => {
  // todo
  if (inOrderStop < inOrderStart) {
    return null;
  }
  const preOrderRoot = preOrder[preOrderStart];
  const inOrderMid = inOrder.indexOf(preOrderRoot);
  const root = new Node(preOrderRoot);
  const leftSize = inOrderMid - inOrderStart;
  root.left = buildTreeInPre(inOrder, preOrder, inOrderStart, inOrderMid - 1, preOrderStart + 1, preOrderStart + leftSize);
  root.right = buildTreeInPre(inOrder, preOrder, inOrderMid + 1, inOrderStop, preOrderStart + leftSize + 1, preOrderStop);
  return root;
};