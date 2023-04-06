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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const inOrder = dfs(root);
  return inOrder[k - 1]
};

const dfs = (root) => {
  if (!root) {
    return [];
  }
  return [...dfs(root.left), root.val, ...dfs(root.right)];
}