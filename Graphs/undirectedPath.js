// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

//df iterative

const undirectedPath = (edges, nodeA, nodeB) => {
  // todo
  const graph = {};
  edges.forEach((edge) => {
    if (graph[edge[0]] === undefined) {
      graph[edge[0]] = [edge[1]];
    } else {
      graph[edge[0]].push(edge[1]);
    }
    if (graph[edge[1]] === undefined) {
      graph[edge[1]] = [edge[0]];
    } else {
      graph[edge[1]].push(edge[0]);
    }
  })
  const stack = [nodeA];
  const allVistited = new Set();
  while (stack.length) {
    const current = stack.pop();
    if (current === nodeB) {
      return true
    }
    allVistited.add(current);
    for (let neighbor of graph[current]) {
      if (!allVistited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
  return false;
}

// df recursive

const edgesToGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [a, b] = edge
    if (graph[a] === undefined) {
      graph[a] = [];
    }
    if (graph[b] === undefined) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
}

const hasPath = (graph, nodeA, nodeB, visited) => {
  if (nodeA === nodeB) {
    return true;
  }
  if (visited.has(nodeA)) {
    return false;
  }
  visited.add(nodeA);
  for (let neighbor of graph[nodeA]) {
    if (hasPath(graph, neighbor, nodeB, visited)) {
      return true
    }
  }
  return false
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
}