// Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph. The function should return a boolean indicating whether or not it is possible to color nodes of the graph using two colors in such a way that adjacent nodes are always different colors.

const canColor = (graph) => {
  // to do
  // debugger
  const colored = {}
  for (let node in graph) {
    if (!(node in colored)) {
      if (!traverseAndColor(node, graph, colored, true)) {
        return false;
      }
    }
  }
  return true;
}

const traverseAndColor = (node, graph, colored, mark)  => {
  if (node in colored) {
    return colored[node] === mark;
  }
  colored[node] = mark;
  for (let neighbor of graph[node]) {
    if (!traverseAndColor(neighbor, graph, colored, !mark)) {
      return false;
    }
  }
  return true;
}