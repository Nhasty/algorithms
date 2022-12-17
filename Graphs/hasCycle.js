// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

const hasCycle = (graph) => {
  // todo
  const fullyExplored = new Set();
  for (let node in graph) {
    if (detectCycle(graph, node, fullyExplored, new Set())) {
      return true;
    }
  }
  return false;
};

const detectCycle = (graph, node, fullyExplored, currentlyExploring) => {
  if (fullyExplored.has(node)) {
    return false;
  }
  if (currentlyExploring.has(node)) {
    return true
  }
  currentlyExploring.add(node);
  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, fullyExplored, currentlyExploring)) {
      return true
    }
  }
  fullyExplored.add(node);
  return false;
};