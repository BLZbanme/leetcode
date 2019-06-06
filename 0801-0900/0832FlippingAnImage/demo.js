/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let tmp = 0;
    for(let i = 0; i < A.length; i++){
        let length = A[i].length;
        for(let j = 0; j < length / 2; j++){
            tmp = A[i][j];
            A[i][j] = A[i][length - 1 - j] == 0 ? 1 : 0;
            A[i][length - 1 - j] = tmp == 0 ? 1 : 0;
        }
    }
    return A;
};

var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        A[i].reverse();
        for(let j = 0; j < A[i].length; j++){
            A[i][j] = A[i][j] == 0 ? 1 : 0;
        }
    }
    return A;
};

var flipAndInvertImage = function(A) {
    let tmp = 0;
    let length = A[0].length;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < length / 2; j++){
            tmp = A[i][j] ^ 1;
            A[i][j] = A[i][length - 1 - j] ^ 1;
            A[i][length - 1 - j] = tmp;
        }
    }
    return A;
};

var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        A[i].reverse();
        for(let j = 0; j < A[i].length; j++){
            A[i][j] ^= 1;
        }
    }
    return A;
};



var flipAndInvertImage = function(A) {
    let tmp = 0;
    let length = A[0].length;
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < length / 2; j++){
            if(A[i][j] == A[i][length - 1 - j]){
                A[i][j] = A[i][length - 1 -j] = 1 - A[i][length - 1 -j];
            }
        }
    }
    return A;
};