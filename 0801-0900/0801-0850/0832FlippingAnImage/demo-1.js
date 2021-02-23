/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const m = A.length;
    const n = A[0].length;
    const half = (n >> 1) + (n & 1);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < half; j++) {
            let tmp = A[i][j];
            A[i][j] = A[i][n - 1 - j] ? 0 : 1;
            A[i][n - 1 - j] = tmp ? 0 : 1;
        }
    }
    return A;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
// [[1,0,0],[0,1,0],[1,1,1]]

console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))
// [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]