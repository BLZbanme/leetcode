/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length;
    const width = obstacleGrid[0].length;
    const optArr = new Array(height);
    for(let i = 0; i < height; i++){
        optArr[i] = new Array(width);
    }
    let trigger = false;
    for(let i = 0; i < width; i++){
        if(trigger || obstacleGrid[0][i] == 1){
            optArr[0][i] = 0;
            trigger = true;
        }else{
            optArr[0][i] = 1;
        }
    }
    trigger = false;
    for(let i = 0; i < height; i++){
        if(trigger || obstacleGrid[i][0] == 1){
            optArr[i][0] = 0;
            trigger = true;
        }else{
            optArr[i][0] = 1;
        }
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            optArr[i][j] = obstacleGrid[i][j] == 1 ? 0 : optArr[i - 1][j] + optArr[i][j - 1];
        }
    }
    return optArr[height - 1][width - 1];
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length;
    const width = obstacleGrid[0].length;
    const optArr = new Array(height);
    for(let i = 0; i < height; i++){
        optArr[i] = new Array(width);
    }
    optArr[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
    for(let i = 1; i < width; i++){
        optArr[0][i] = obstacleGrid[0][i] == 1 ? 0 : optArr[0][i - 1];
    }
    for(let i = 1; i < height; i++){
        optArr[i][0] = obstacleGrid[i][0] == 1 ? 0 : optArr[i - 1][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            optArr[i][j] = obstacleGrid[i][j] == 1 ? 0 : optArr[i - 1][j] + optArr[i][j - 1];
        }
    }
    return optArr[height - 1][width - 1];
};

var uniquePathsWithObstacles = function(obstacleGrid) {
    const width = obstacleGrid[0].length;
    let dp = new Array(width).fill(0);
    dp[0] = 1;
    for(arr of obstacleGrid){
        for(let i = 0; i < width; i++){
            if(arr[i] == 1){
                dp[i] = [0];
            }else if(i > 0){
                dp[i] += dp[i - 1];
            }
        }
    }
    return dp[width - 1];
}

var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length, width = obstacleGrid[0].length;
    let dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1).fill(0);
    }
    dp[0][1] = 1;
    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            if(!obstacleGrid[i - 1][j - 1]){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[height][width];
}


console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
]))

console.log(uniquePathsWithObstacles([
    [0,0,0,0],
    [0,1,1,0],
    [0,0,1,0]
]))

console.log(uniquePathsWithObstacles([
    [0,0,0,0],
    [0,1,0,0],
    [0,0,1,0]
]))

console.log(uniquePathsWithObstacles([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,1,0]
]))