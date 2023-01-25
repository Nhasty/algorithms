/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
    let H = heights.length
    let W = heights[0].length
    
    // The sets of cells reachable from the pacific and atlantic.
    // ( Stored as 1D-indices rather than x, y coordinates )
    let pacific = new Set()
    let atlantic = new Set()
    
    // Depth first search from (x, y) in the direction of increasing height.
    // Marks reachable nodes in the passed in set.
    function dfs(x, y, previousHeight, set) {
        if (x < 0 || x >= W || y < 0 || y >= H)
            return
        
        let height = heights[y][x]
        if (height < previousHeight)
            return // Water can't flow from this cell into the previous cell.
        
        // Get index of (x, y) cell.
        let index = x + y * W
        
        if (set.has(index))
            return
        set.add(index)
        
        dfs(x + 1, y, height, set)
        dfs(x - 1, y, height, set)
        dfs(x, y + 1, height, set)
        dfs(x, y - 1, height, set)
    }
    
    // Scan along coast lines:
    // Pacific coast:
    for (let i = 0; i < W; i++) dfs(i,     0, 0, pacific)  // Top row
    for (let i = 0; i < H; i++) dfs(0,     i, 0, pacific)  // Left column
    // Atlantic coast:
    for (let i = 0; i < W; i++) dfs(i, H - 1, 0, atlantic) // Bottom row
    for (let i = 0; i < H; i++) dfs(W - 1, i, 0, atlantic) // Right column
    
    // Build a list of cells reachable from both oceans.
    let result = []
    for (let index of pacific) {
        if (atlantic.has(index)) {
            
            // Unpack index of cell.
            let x = index % W
            let y = Math.floor(index / W)
            
            result.push([y, x])
        }
    }
    
    return result
};

