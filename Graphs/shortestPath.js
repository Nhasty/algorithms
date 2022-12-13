// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph(edges);
  const visited = new Set([ nodeA ]);
  const q = [[nodeA, 0]];
  while (q.length) {
    const [node, distance] = q.shift();
    if (node === nodeB) {
      return pathLength;
    }
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push([neighbor, distance + 1]);
      }
    }
  }
  return -1
};

const edgesToGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = []
    }
    if (!(b in graph)) {
      graph[b] = []
    }
    graph[a].push(b);
    graph[b].push(a);
  })
  return graph;
};