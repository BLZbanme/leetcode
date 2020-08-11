/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (!triangle || !triangle[0]) {
        return 0;
    }

    let min = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        let length = triangle[i].length;
        min = Infinity;
        for (let j = 0; j < length; j++) {
            if (j == 0) {
                triangle[i][0] += triangle[i - 1][0];
            }
            else if (j == length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
            }
            else {
                triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
            min = Math.min(triangle[i][j], min);
        }
    }

    return min;
};

var minimumTotal = function(triangle) {
    if (!triangle || !triangle[0]) {
        return 0;
    }

    const N = triangle.length - 1;
    const dp = triangle[N]
    for (let i = triangle.length - 2; i >= 0; i--) {
        const length = triangle[i].length;
        for (let j = 0; j < length; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }

    return dp[0];
};