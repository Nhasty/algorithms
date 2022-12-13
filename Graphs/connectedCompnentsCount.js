// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

//df iterative

const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (!visited.has(node)) {
      const stack = [node];
      while (stack.length) {
        const current = stack.pop();
        visited.add(current);
        for (let neighbor of graph[current]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
      count += 1;
    }
  }
  return count;
}

//df recursive

const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (traverse(graph, node, visited)) {
      count += 1;
    }
  }
  return count;
}

const traverse = (graph, current, visited) => {
  if (visited.has(String(current))) {
    return false
  }
  visited.add(String(current));
  for (let neighbor of graph[current]) {
    traverse(graph, neighbor, visited)
  }
  return true
}