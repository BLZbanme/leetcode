var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function solveNQueens(n) {
    var board = Array(n);
    for (var i = 0; i < n; i++) {
        board[i] = Array(n).fill('.');
    }
    var res = [];
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
            var stringBoard = __spreadArrays(board);
            for (var i = 0; i < n; i++) {
                stringBoard[i] = stringBoard[i].join('');
            }
            res.push(stringBoard);
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
