/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, visited = {}) {
  if (node === null) {
    return null;
  }
  const val = node.val;
  if (val in visited) {
    return visited[val];
  }
  const copy = new Node(val);
  visited[val] = copy;
  for (let neighbor of node.neighbors) {
    copy.neighbors.push(cloneGraph(neighbor, visited));    
  }
  return copy;
};