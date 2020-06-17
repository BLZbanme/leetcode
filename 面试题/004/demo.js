/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }
    const height = matrix.length;
    const width = matrix[0].length;
    let row = 0;
    let column = width - 1;
    while (row < height && column >= 0) {
        if (matrix[row][column] === target) {
            return true;
        }
        else if (matrix[row][column] > target) {
            column--;
        }
        else {
            row++;
        }
    }
    return false;
};