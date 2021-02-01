"use strict";
function matrixScore(A) {
    var M = A.length;
    var N = A[0].length;
    var ret = M * (1 << (N - 1));
    for (var j = 1; j < N; j++) {
        var nOnes = 0;
        for (var i = 0; i < M; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            }
            else {
                nOnes += (1 - A[i][j]);
            }
        }
        var k = Math.max(nOnes, M - nOnes);
        ret += k * (1 << (N - j - 1));
    }
    return ret;
}
;
console.log(matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]])); // 39
