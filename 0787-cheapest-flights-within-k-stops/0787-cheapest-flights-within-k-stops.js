/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const graph = {};
  for (let flight of flights) {
    const [a, b, cost] = flight;
    if (graph[b] === undefined) {
      graph[b] = [];
    }
    graph[b].push([a, cost]);
  }
  let min = Infinity
  let dfs = (end, cost, dist) => {
    if (end === src) {
      min = Math.min(min, cost);
      return
    }
    if (dist > k || cost >= min || !graph[end]) {
      return
    }
    for (let [incoming, price] of graph[end]) {
      dfs(incoming, cost + price, dist + 1);
    }
  }
  dfs(dst, 0, 0)
  return min === Infinity ? -1 : min;
};  

      