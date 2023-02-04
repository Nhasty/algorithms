/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  const topology = topoCount(n, edges);
  const graph = writeGraph(n, edges);
  const leafDistances = []
  const q = [];
  for (let node in graph) {
    if (topology[node] === 1 || topology[node] === 0) {
      q.push([node, 0]);
    }
  }
  while (q.length) {
    const [current, dist] = q.shift();
    if (leafDistances.length === dist) {
      leafDistances.push([]);
    }
    leafDistances[dist].push(current)
    for (let neighbor of graph[current]) {
      topology[neighbor] -= 1
      if (topology[neighbor] === 1) {
        q.push([neighbor, dist + 1]);
      }
    }    
  }
  return leafDistances[leafDistances.length - 1];
};



const topoCount = (n, edges) => {
  //debugger
  const map = {};
  for (let i = 0; i < n; i += 1) {
    map[i] = 0
  }
  for (let edge of edges) {
    const [a, b] = edge;
    map[a] += 1;
    map[b] += 1;
  }
  return map;
}

const writeGraph = (n, edges) => {
  //debugger
  const graph = {};
  for (let i = 0; i < n; i += 1) {
    graph[i] = []
  }
  for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}