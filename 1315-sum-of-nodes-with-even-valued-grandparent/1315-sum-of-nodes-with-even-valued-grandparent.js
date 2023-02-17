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
 * @return {number}
 */
var sumEvenGrandparent = function(root, par = false, gp = false) {
  if (root === null) {
    return 0;
  }
  return gp? root.val + sumEvenGrandparent(root.left, root.val % 2 === 0, par) + sumEvenGrandparent(root.right, root.val % 2 === 0, par) : sumEvenGrandparent(root.left, root.val % 2 === 0, par) + sumEvenGrandparent(root.right, root.val % 2 === 0, par)
};