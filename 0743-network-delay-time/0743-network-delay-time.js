/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  const minTravel = Array(n + 1).fill(Infinity);
  minTravel[0] = -Infinity;
  minTravel[k] = 0;
  for (j = 0; j < n; j += 1) {
    let edited = false;
    for (let time of times) {
      const [a, b, wait] = time;
      const newTime = minTravel[a] + wait;
      if (newTime < minTravel[b]) {
        minTravel[b] = newTime;
        edited = true;
      }
    }
    if (!edited) {
      break;
    }
  }
  const max = Math.max(...minTravel);
  return max !== Infinity ? max : -1; 
};