// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

const prereqsPossible = (numCourses, prereqs) => {
  // todo
  const visited = new Set();
  const graph = writeUnidirectionalGraph(numCourses, prereqs);
  for (let course in graph) {
    if (detectCycle(graph, course, visited, new Set())) {
      return false;
    }
  }
  return true;
};

const writeUnidirectionalGraph = (numCourses, prereqs) => {
  const graph = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  };
  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  };
  return graph;
};

const detectCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) {
    return false;
  }
  if (visiting.has(node)) {
    return true;
  }
  visiting.add(node);
  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visited, visiting)) {
      return true;
    }
  }
  visited.add(node);
  return false;
};