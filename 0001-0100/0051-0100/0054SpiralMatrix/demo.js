/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // debugger/
    let height = matrix.length;
    if(height == 0){
        return matrix;
    }
    let width = matrix[0].length;
    let res = [];
    addCircle(res, matrix, 0, width, height);
    return res;
};

function addCircle(res, matrix, index, width, height){
    for(let i = 0; i < width; i++){
        res.push(matrix[index][index + i]);
    }
    for(let i = 1; i < height; i++){
        res.push(matrix[index + i][index + width - 1]);
    }
    if(width > 1 && height > 1){
        for(let i = width - 2; i > 0; i--){
            res.push(matrix[index + height - 1][i + index]);
        }
        for(let i = height - 1; i > 0; i--){
            res.push(matrix[i + index][index]);
        }
    }
    width -= 2;
    height -= 2;
    if(height < 1 || width < 1){
        return;
    }else{
        addCircle(res, matrix, index + 1, width, height);
    }
}

console.log(spiralOrder(
    [[6,9,7]]
))

console.log(spiralOrder(
    [
        [ 3 ],
        [ 2 ]
    ]
))

console.log(spiralOrder(
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
))

console.log(spiralOrder(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]
))

console.log(spiralOrder(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [5, 0, 0, 8],
        [9,10,11,12]
    ]
))
console.log(spiralOrder(
    [
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 5],
        [5, 0, 0, 8, 5],
        [9,10,11,12, 5],
        [9,10,11,12, 5]
    ]
))