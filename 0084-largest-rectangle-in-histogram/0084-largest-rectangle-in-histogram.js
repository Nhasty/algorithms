/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const backward = distanceFromPrevMin(heights).reverse();
  const forward = distanceFromPrevMin(heights.reverse());
  let max = 0;
  for(let i = 0; i < heights.length; i ++) {
    max = Math.max(max, heights[i] * forward[i] + heights[i] * backward[i] - heights[i])
  }
  return max
};


const distanceFromPrevMin = (heights) => {
  const len = heights.length
  const results = Array(len);
  results[0] = 1;
  let min = heights[0];
  for (let i = 1; i < heights.length; i++) {
    const prev = i - 1;
    let minIndex = heights[i] <= heights[prev] ? prev - results[prev] : prev;
    while (heights[i] <= heights[minIndex]) {
      minIndex = minIndex - results[minIndex]
    }
    results[i] = i - minIndex;
  };
  return results;
}