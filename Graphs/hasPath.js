// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

// df recursive

const hasPath = (graph, src, dst) => {
  // todo
  if (graph[src] === graph[dst]) {
    return true;
  }
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false
};

// df iterative

const hasPath = (graph, src, dst) => {
  // todo
  const stack = [src];
  while (stack.length) {
    const current = stack.pop();
    if (graph[current] === graph[dst]) {
      return true;
    }
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
   }
   return false;
}

//bf iterative

const hasPath = (graph, src, dst) => {
  // todo
  const q = [src];
  while (q.length) {
    const current = q.shift();
    if (graph[current] === graph[dst]) {
      return true;
    }
    for (let neighbor of graph[current]) {
      q.push(neighbor);
    }
  }
  return false;
}