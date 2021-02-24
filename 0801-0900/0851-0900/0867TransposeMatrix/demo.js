/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const res = Array(n).fill(0).map(e => Array(m));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] = matrix[i][j];
        }
    }
    return res;
};