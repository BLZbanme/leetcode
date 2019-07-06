/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowSet = new Set();
    let colSet = new Set();
    matrix.forEach((arr, i) => {
        arr.forEach((v, j) => {
            if(v == 0){
                rowSet.add(i);
                colSet.add(j);
            }
        })
    });
    for(let r of rowSet){
        matrix[r].fill(0);
    }
    for(let c of colSet){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0;
        }
    }
    return matrix;
};

var setZeroes = function(matrix) {
    let col0 = 1;
    matrix.forEach((arr, i) => {
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        tmp = [...arr];
        tmp.shift();
        tmp.forEach((v, j) => {
            if(matrix[i][j + 1] == 0){
                matrix[i][0] = matrix[0][j + 1] = 0;
            }
        })
    })
    for(let i = matrix.length - 1; i >= 0; i--){
        for(let j = matrix[0].length - 1; j >= 1; j--){
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
        if(col0 == 0) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
}

var setZeroes = function(matrix) {
    let col0 = 1, rows = matrix.length, cols = matrix[0].length;
    for(let i = 0; i < rows; i++){
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        for(let j = 1; j < cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(matrix[0][0] == 0) {
        for(let i = 1; i < cols; i++){
            matrix[0][i] = 0;
        }
    }
    if(col0 == 0){
        for(let i = 0; i < rows; i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
}


console.log(setZeroes([
    [1,1,1],
    [1,0,1],
    [1,1,1]
]))

console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]))

console.log(setZeroes([
    [1, 0]
]))