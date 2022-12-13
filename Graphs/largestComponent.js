// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
  //todo
  let max = 0;
  const visited = new Set();
  for (let node in graph) {
    const componentSize = countComponent(graph, node, visited)
    if (componentSize > max) {
      max = componentSize;
    }
  }
  return max;
};

const countComponent = (graph, current, visited) => {
  if (visited.has(current)) {
    return 0;
  }
  visited.add(current);
  let count = 1;
  for (let neighbor of graph[current]) {
    count += countComponent(graph, neighbor, visited)
  }
  return count;
};