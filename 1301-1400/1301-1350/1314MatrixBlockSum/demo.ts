function matrixBlockSum(mat: number[][], K: number): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const dp = Array(m + 1).fill(0).map(e => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i - 1][j - 1];
        }
    }

    const result = Array(m).fill(0).map(e => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let iL = Math.max(0, i - K);
            let iR = Math.min(m, i + K  + 1);
            let jL = Math.max(0, j - K);
            let jR = Math.min(n, j + K  + 1);
            result[i][j] = dp[iR][jR] + dp[iL][jL] - dp[iL][jR] - dp[iR][jL];
        }
    }
    return result;
};

console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 1))
//[
//     [12,21,16],
//     [27,45,33],
//     [24,39,28]
// ]