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