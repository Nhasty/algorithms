/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = {};
  const parentCounts = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
    parentCounts[i] = 0;
  }
  for (let prereq of prerequisites) {
    const [a, b] = prereq;
    graph[b].push(a);
    parentCounts[a] += 1;
  }
  const q = [];
  const output = [];
  for (let child in parentCounts) {
    if (parentCounts[child] === 0) {
      q.push(Number(child));
    }
  }
  while (q.length) {
    const current = q.shift();
    output.push(current);
    for (let child of graph[current]) {
      parentCounts[child] -= 1;
      if (parentCounts[child] === 0) {
        q.push(child);
      }
    }
  }
  if (Object.values(parentCounts).some((element) => element > 0)) {
    return [];
  }
  return output;
};