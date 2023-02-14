/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const root = new TreeNode(preorder[0]);
  const inorderRootI = inorder.indexOf(preorder[0]);
  if (inorderRootI > 0) {
    root.left = buildTree(preorder.slice(1, inorderRootI + 1), inorder.slice(0, inorderRootI))
  }
  if (inorderRootI !== inorder.length - 1) {
    root.right = buildTree(preorder.slice(inorderRootI + 1), inorder.slice(inorderRootI + 1))
  }
  return root;
};