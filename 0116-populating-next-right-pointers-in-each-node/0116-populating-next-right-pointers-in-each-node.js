/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root, right = null) {
  if (!root) {
    return null;
  };
  root.next = right;
  connect(root.left, root.right)
  right ? connect(root.right, right.left) : connect(root.right, null);
  return root
};