/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const courseGraph = writeGraph(numCourses, prerequisites);
  const visited = new Set();
  for (let node in courseGraph) {
    if (detectCycle(node, courseGraph, visited, new Set())) {
      return false
    }
  }
  return true;
};

const writeGraph = (numCourses, prerequisites) => {
  const graph = {}
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  for (let prereq of prerequisites) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  return graph;
}

const detectCycle = (node, graph, visited, visiting) => {
    if (visited.has(node)) {
    return false
  }
  if (visiting.has(node)) {
    return true;
  }
  visiting.add(node);
  for (let neighbor of graph[node]) {
    if (detectCycle(neighbor, graph, visited, visiting)) {
      return true;
    }
  }
  visited.add(node);
  return false;
}