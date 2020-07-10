/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let max = 0;
    const M = grid.length;
    const N = grid[0].length;
    const dp = Array(N + 1).fill(0);
    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            dp[j] = grid[i - 1][j - 1] + Math.max(dp[j], dp[j - 1]);
            max = Math.max(dp[j], max);
        }
    }
    return max;
};


console.log(maxValue([[1,2,5],[3,2,1]]))

console.log(maxValue([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))