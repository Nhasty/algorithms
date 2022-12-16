// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

const semestersRequired = (numCourses, prereqs) => {
  // todo
  const prereqsGraph = writeCourseGraph(numCourses, prereqs)
  const semesters = {};
  for (let i = 0; i < numCourses; i++) {
    if (!prereqsGraph[i].length) {
      semesters[i] = 1;
    }
  }
  for (let course in prereqsGraph) {
    countSemesters(prereqsGraph, course, semesters)
  }
  return Math.max(...Object.values(semesters))
};

const writeCourseGraph = (numCourses, edges) => {
  const graph = {}
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
  }
  return graph;
};

const countSemesters = (graph, node, semesters) => {
  if (semesters[node]) {
    return semesters[node];
  }
  let max = 1;
  for (let nextCourse of graph[node]) {
    const semestersUntillFreedom = countSemesters(graph, nextCourse, semesters);
    if (semestersUntillFreedom > max) {
      max = semestersUntillFreedom;
    }
  }
  semesters[node] = max + 1
  return semesters[node];
}