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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const q = [[root, 0]];
  const ordered = [];
  while (q.length) {
    const [current, level] = q.shift();
    if (current !== null) {
      if (level === ordered.length) {
        ordered.push([]);
      }
      ordered[level].push(current.val);
      q.push([current.left, level + 1]);
      q.push([current.right, level + 1])
    }
  }
  return ordered;
};