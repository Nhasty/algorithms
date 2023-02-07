/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  debugger;
  if (!roads.length) {
    return 0;
  }
  const graph = {};
  for (let road of roads) {
    const [a, b] = road;
    if (graph[a] === undefined) {
      graph[a] = [];
    }
    if (graph[b] === undefined) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  let gas = 0;
  const dfs = (node, last) => {
    let passengers = 1;
    for (let neighbor of graph[node]) {
      if (neighbor !== last) {
        passengers +=  dfs(neighbor, node);
      }
    }
    if (node) {
      gas += Math.ceil(passengers / seats);
    }
    return passengers;
  }
  dfs(0, -1)
  return gas;
};
