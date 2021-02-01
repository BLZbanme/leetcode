"use strict";
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    var _a, _b;
    if (!matrix || !matrix.length)
        return;
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            _a = [matrix[j][i], matrix[i][j]], matrix[i][j] = _a[0], matrix[j][i] = _a[1];
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n >> 1; j++) {
            _b = [matrix[i][n - 1 - j], matrix[i][j]], matrix[i][j] = _b[0], matrix[i][n - 1 - j] = _b[1];
        }
    }
    return;
}
;
