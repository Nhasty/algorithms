// Write a function, tolerantTeams, that takes in an array of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.

const tolerantTeams = (rivalries) => {
  // todo
  const rivalriesGraph = writeGraph(rivalries);
  const teams = {}
  for (let person in rivalriesGraph) {
    if (!(person in teams) && !validTeams(rivalriesGraph, person, teams, true)) {
      return false;
    }
  }
  return true;
};

const writeGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const validTeams = (graph, node, teams, team) => {
  if (node in teams) {
    return teams[node] === team;
  }
  teams[node] = team;
  for (let neighbor of graph[node]){
    if (!validTeams(graph, neighbor, teams, !team)) {
      return false
    }
  }
  return true;
}