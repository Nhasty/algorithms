// Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. The function should return an array containing the topological-order of the graph.

// The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.

const topologicalOrder = (graph) => {
  // todo
  const parentMap = mapParents(graph);
  const stack = [];
  const topoOrder = []
  for (let node in parentMap) {
    if (parentMap[node] === 0) {
      stack.push(node);
    }
  }
  while (stack.length) {
    const current = stack.pop();
    topoOrder.push(current);
    for (let child of graph[current]) {
      parentMap[child] -= 1;
      if (parentMap[child] === 0) {
        stack.push(child);
      }
    }
  }
  return topoOrder;
};

const mapParents = (graph) => {
  const parentMap = {};
  for (let node in graph) {
    if (!(node in parentMap)) {
      parentMap[node] = 0;
    }
    for (let child of graph[node]) {
      if (!(child in parentMap)) {
        parentMap[child] = 0;
      }
      parentMap[child] += 1;
    }
  }
  return parentMap;
};
