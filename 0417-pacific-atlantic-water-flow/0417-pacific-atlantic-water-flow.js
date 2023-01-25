/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const pacific = new Set();
  const atlantic = new Set();
  const h = heights.length;
  const w = heights[0].length;
  const flows = (x, y, prev, set) => {
    if (x < 0 || x >= w || y < 0 || y >= h) {
      return;
    }
    const height = heights[y][x];
    if (height < prev) {
      return
    }
    const key = (y * w) + x;
    if (set.has(key)) {
      return
    }
    set.add(key);
    flows(x + 1, y, height, set);
    flows(x - 1, y, height, set);
    flows(x, y + 1, height, set);
    flows(x, y - 1, height, set);
  }
  for (let i = 0; i < w; i += 1) {
    flows(i, 0, 0, pacific);
  }
  for (let i = 0; i < h; i += 1) {
    flows(0, i, 0, pacific);
  }
  for (let i = 0; i < w; i += 1) {
    flows(i, h - 1, 0, atlantic);
  }
  for (let i = 0; i < h; i += 1) {
    flows(w - 1, i, 0, atlantic);;
  }
  
  const highPoints = [];
  for (let index of pacific) {
    if (atlantic.has(index)) {
      const x = index % w;
      const y = Math.floor(index / w);
      highPoints.push([y, x]);
    }
  }
  return highPoints;
};

