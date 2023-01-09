// Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once.

// Cities will be numbered 0 to n - 1.

// You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

const rareRouting = (n, roads) => {
  // todo
  const citiesMap = writeGraph(roads);
  const visited = new Set();
  const cyclePresent = cycleDetect(citiesMap, 0, visited);
  return !cyclePresent && visited.size === n;
}

const writeGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (graph[a] === undefined) {
      graph[a] = [];
    }
    if (graph[b] === undefined) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b]. push(a);
  }
  return graph;
};

const cycleDetect = (graph, node, visited, lastNode = null) => {
  if (visited.has(node)) {
     return true;
  }
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (neighbor !== lastNode && cycleDetect(graph, neighbor, visited, node)) {
      return true;
    }
  }
  return false;
};