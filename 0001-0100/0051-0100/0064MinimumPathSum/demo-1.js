/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    
    if (!M && !N) {
        return 0;
    }
    
    const dp = Array(N + 1).fill(0);
    dp[0] = Infinity;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!i && j) {
                dp[j + 1] = dp[j] + grid[i][j];
            }
            else {
                dp[j + 1] = Math.min(dp[j], dp[j + 1]) + grid[i][j];
            }
            
        }
    }

    return dp[N];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))
