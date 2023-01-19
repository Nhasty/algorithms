/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  const graph = {};
  const ancestors = []
  for (let i = 0; i < n; i += 1) {
    graph[i] = [];
    ancestors[i] = new Set();
  }
  for (let edge of edges) {
      const [a, b] = edge;
      graph[a].push(b);
  }
  const parentCounts = countParents(graph);
  const stack = []
  for (let node in parentCounts) {
    if (parentCounts[node] === 0) {
      stack.push(node)
    }
  }
  while (stack.length) {
    const current = stack.pop();
    for (let child of graph[current]) {
      ancestors[current].forEach((ancestor) => {ancestors[child].add(Number(ancestor))});
      ancestors[child].add(Number(current));
      parentCounts[child] -= 1;
      if (parentCounts[child] === 0) {
        stack.push(child);
      }
    }
  }
  return ancestors.map((node) => Array.from(node).sort((a , b) => a - b));
}
const countParents = (graph) => {
  const parentCounts = {};
  for (let node in graph) {
    if (!(node in parentCounts)) {
      parentCounts[node] = 0;
    }
    for (let child of graph[node]) {
      if (!(child in parentCounts)) {
        parentCounts[child] = 0;
      }
      parentCounts[child] += 1;
    }
  }
  return parentCounts
}