/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M ; i++) {
        dp[i] = Array(N + 1).fill(0);
    }

    dp[0][1] = 1;

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            dp[i][j] = obstacleGrid[i - 1][j - 1] ? 0 : (dp[i - 1][j] + dp[i][j - 1]);
        }
    }
    return dp[M][N];
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;
    const dp = Array(N + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            dp[j] = obstacleGrid[i - 1][j - 1] ? 0 : (dp[j - 1] + dp[j]);
        }
        dp[0] = 0;
    }
    return dp[N];
};

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
])); //2

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
])); //1

console.log(uniquePathsWithObstacles([
    [0,1,0],
    [0,1,0],
])); //0

console.log(uniquePathsWithObstacles([
    [0,1],
    [0,1],
])); //0


console.log(uniquePathsWithObstacles([
    [0,1]
])); //0

console.log(uniquePathsWithObstacles([
    [0,0]
])); //1