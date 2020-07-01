/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return;
    }
    const N = matrix.length;
    const LEN = N * N + 1;
    for (let i = 1; i <= LEN >> 1; i++) {
        sink(i, LEN, N, matrix)
    }

    debugger
    let tmp = 1;
    while (tmp < k) {
        let a = Math.floor((LEN - tmp - 1) / N);
        let b = (LEN - tmp - 1) % N;
        [matrix[0][0], matrix[a][b]] =  [matrix[a][b], matrix[0][0]];
        sink(1, LEN - tmp, N, matrix);
        tmp++;
    }
    tmp = N * N + 1 - k;
    let a = Math.floor(tmp / N);
    let b = (tmp - 1) % N;
    return matrix[a][b];
};

function sink(index, length, N, matrix) {
    
    while ((index << 1) < length) {
        let j = index << 1;
        let a1 = Math.floor(j / N);
        let b1 = (j - 1) % N;
        
        if (j < length) {
            let a2 = Math.floor((j + 1) / N);
            let b2 = j % N;
            if (matrix[a1][b1] > matrix[a2][b2]) {
                j++;
                a1 = a2;
                b1 = b2;
            }
        }
        let c = Math.floor(index / N);
        let d = (index - 1) % N;
        if (matrix[c][d] > matrix[a1][b1]) {
            [matrix[c][d], matrix[a1][b1]] = [matrix[a1][b1], matrix[c][d]];
        }
        index = j;
    }
}

console.log(kthSmallest(
    [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
    ], 8)
);