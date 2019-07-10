/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1);
    }
    for(let i = 1; i <= width; i++){
        dp[0][i] = Infinity;
    }
    for(let j = 2; j <= height; j++){
        dp[j][0] = Infinity;
    }
    dp[1][0] = 0;
    for(let i = 1; i <=height; i++){
        for(let j = 1; j <= width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[height][width];
};

var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height);
    for(let i = 0; i < height; i++){
        dp[i] = new Array(width);
    }
    dp[0][0] = grid[0][0];
    for(let i = 1; i < width; i++){
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for(let j = 1; j < height; j++){
        dp[j][0] = dp[j - 1][0] + grid[j][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[height - 1][width - 1];
};

var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    let pre = new Array(width);
    pre[0] = grid[0][0];
    for(let i = 1; i < width; i++) {
        pre[i] = pre[i - 1] + grid[0][i]; 
    }
    for(let i = 1; i < height; i++){
        cur[0] = pre[0] + grid[i][0];
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(pre[j], cur[j - 1]) + grid[i][j];
        }
        pre = cur;
    }
    return pre[width - 1];
}

var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    cur[0] = grid[0][0];
    for(let i = 1; i < width; i++){
        cur[i] = cur[i - 1] + grid[0][i];
    }
    for(let i = 1; i < height; i++){
        cur[0] += grid[i][0]; 
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(cur[j], cur[j - 1]) + grid[i][j];
        }
    }
    return cur[width - 1];
}



console.log(minPathSum([
    [1,2,5],
    [3,2,1]
]))

console.log(minPathSum([
    [1,2],
    [1,1]
]))

console.log(minPathSum([
    [1]
]))

console.log(minPathSum([
    [1,3,1]
]))

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))