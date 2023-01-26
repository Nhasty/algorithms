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
var maxPathSum = function(root) {
  let maxPath = -Infinity;
  
  const checkPaths = (node) => {
    if (node === null) {
      return 0
    }
    const leftMax = checkPaths(node.left);
    const rightMax = checkPaths(node.right);
    const newPath = leftMax + rightMax + node.val;
    const oldPath = node.val + Math.max(leftMax, rightMax, 0);
    if (newPath > oldPath) {
      maxPath = Math.max(maxPath, newPath);
    }
    maxPath = Math.max(maxPath, oldPath);
    return oldPath;
  }
  checkPaths(root);
  return maxPath;
};