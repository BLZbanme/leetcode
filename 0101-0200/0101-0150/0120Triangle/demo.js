/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (!triangle) {
        return 0;
    }
    const N = triangle.length - 1;
    let dp = triangle[N];
    for (let i = N - 1; i >= 0; i--) {
        const len = triangle[i].length;
        for (let j = 0; j < len; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));