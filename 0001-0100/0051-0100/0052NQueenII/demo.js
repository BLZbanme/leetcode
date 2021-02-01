"use strict";
function totalNQueens(n) {
    var board = Array(n).fill(0).map(function (e) { return Array(n).fill('.'); });
    var res = 0;
    var isValid = function (row, col) {
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < n; j++) {
                if (board[i][j] === 'Q' &&
                    (j == col || i + j === row + col || i - j === row - col)) {
                    return false;
                }
            }
        }
        return true;
    };
    var helper = function (row) {
        if (row == n) {
            res++;
            return;
        }
        for (var col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                helper(row + 1);
                board[row][col] = '.';
            }
        }
    };
    helper(0);
    return res;
}
;
