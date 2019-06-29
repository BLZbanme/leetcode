/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length;
    if(len == 1){
        return matrix;
    }
    let index = parseInt(len / 2) - 1;
    let nowLen = len % 2 == 0 ? 2 : 3;
    while(nowLen <= len){
        let tmp = new Array(nowLen);
        for(let i = 0; i < nowLen; i++){
            tmp[i] = matrix[index][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index][index + i] = matrix[index + nowLen - 1 - i][index];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index] = matrix[index + nowLen - 1][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + nowLen - 1][index + i] = matrix[index + nowLen - 1 - i][index + nowLen - 1];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index + nowLen - 1] = tmp[i];
        }
        nowLen += 2;
        index--;
    }
    return matrix;
};

console.log(rotate(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
))

console.log(rotate(
    [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ]
))