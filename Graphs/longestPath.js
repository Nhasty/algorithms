// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

const longestPath = (graph) => {
  // todo
  const distance = {};
  for (let node in graph) {
    if (!graph[node].length) {
      distance[node] = 0;
    }
  }
  for (let node in graph) {
    measurePath(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
};

const measurePath = (graph, node, distanceMap) => {
  if (node in distanceMap) {
    return distanceMap[node];
  }
  let maxDistance = 0;
  for (let neighbor of graph[node]) {
    const attempt = measurePath(graph, node, distanceMap);
    if (attempt > maxDistance) {
      maxDistance = attempt;
    }
  }
  distanceMap[node] = 1 + maxDistance
  return distance[node];
};