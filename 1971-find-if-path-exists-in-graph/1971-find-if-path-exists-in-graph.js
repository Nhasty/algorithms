/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  debugger
  const adjacency = {};
  for (let i = 0; i < n; i += 1) {
    adjacency[i] = [];
  }
  for (let [a, b] of edges) {
    adjacency[a].push(b);
    adjacency[b].push(a);
  }
  const q = [source];
  const visited = new Set();
  while (q.length) {
    const current = q.pop();
    visited.add(current)
    if (current === destination) {
      return true;
    }
    for (let neighbor of adjacency[current]) {
      if (!visited.has(neighbor)) {
        q.push(neighbor);  
      }
    }
  }
  return false;
};