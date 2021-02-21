/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isToeplitzMatrix([[18, 66]])) //true

console.log(isToeplitzMatrix([[18],[66]])) //true


console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])) //true
console.log(isToeplitzMatrix([[1,2],[2,2]])) //false