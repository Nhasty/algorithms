// Write a function, combineIntervals, that takes in an array of intervals as an argument. Each interval is an array containing a pair of numbers representing a start and end time. Your function should combine overlapping intervals and return an array containing the combined intervals.

const combineIntervals = (intervals) => {
  // todo
  intervals.sort((a, b) => {
    if (a[0] <= b[0]) {
      return -1;
    } else {
      return 1
    }
  })
  const combinedIntervals = [intervals[0]];
  let lastInterval = combinedIntervals[0];
  for (let i = 1; i < intervals.length; i += 1) {
    const interval = intervals[i];
    if (interval[0] <= lastInterval[1]) {
      if (interval[1] > lastInterval[1]) {
        lastInterval[1] = interval[1];
      }
    } else {
      combinedIntervals.push(interval);
      lastInterval = interval;
    }
  }
  return combinedIntervals
};