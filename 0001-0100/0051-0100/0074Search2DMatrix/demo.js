/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let len = matrix.length;
    let lo = 0, hi = matrix.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (matrix[mid][0] == target) {
            return true;
        }
        else if (matrix[mid][0] < target) {
            if (mid == len - 1 || matrix[mid + 1][0] > target) {
                return searchInRow(matrix[mid], target);            
            }   
            else {
                lo = mid + 1;
            }
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
};

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return true;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    const height = matrix.length;
    if(height == 0){
        return false;
    }
    let firstCol = [];
    for (let i = 0; i < height; i++) {
        if (matrix[i][0] != undefined) {
            firstCol[i] = matrix[i][0];
        }
        else {
            return false;
        }
    }
    let row = searchInRow(firstCol, target);
    if (row < 0) { 
        return false;
    }
    let col = searchInRow(matrix[row], target);
    return matrix[row][col] == target;
}

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo - 1;
}

console.log(searchMatrix([
    [-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]
], 0))

console.log(searchMatrix([
    [1]
], 0))

console.log(searchMatrix([
    []
], 1))

console.log(searchMatrix([
], 0))

console.log(searchMatrix([
    [1, 3]
], 3))

console.log(searchMatrix([
    [1],
    [3]
], 4))

console.log(searchMatrix([
    [1]
], 1))

console.log(searchMatrix([
    [1]
], 2))

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 3))

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 13))