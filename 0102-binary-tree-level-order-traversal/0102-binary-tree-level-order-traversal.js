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
  const ordered = [];
    if (root === null) {
    return ordered
  }
  const q = [[root, 0]];
  while (q.length) {
    const [current, level] = q.shift();
    if (level === ordered.length) {
      ordered.push([]);
    }
    ordered[level].push(current.val);
    if (current.left !== null) {
     q.push([current.left, level + 1]); 
    }
    if (current.right !== null) {
      q.push([current.right, level + 1]) ;
    }
  }
  return ordered;
};