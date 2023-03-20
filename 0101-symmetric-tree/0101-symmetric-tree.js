/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return mirror(root.left, root.right)   
};

const mirror = (a, b) => {
  if (a === null || b === null) {
    return a === b;
  };
  return a.val === b.val && mirror(a.left, b.right) && mirror(a.right, b.left)
}