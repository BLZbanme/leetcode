/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board) {
        return false;
    }
    const HEIGHT = board.length;

    if (!HEIGHT) {
        return false;
    }

    const WIDTH = board[0].length

    if (!WIDTH) {
        return false;
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === word[0]) {
                board[i][j] = "";
                if (dfs(i, j, 1)) {
                    return true;
                }
                board[i][j] = word[0];
            }
        }
    }

    return false;

    function dfs(i, j, k) {

        if (k === word.length) {
            return true;
        }

        if (i > 0 && board[i - 1][j] === word[k]) {
            board[i - 1][j] = "";
            if (dfs(i - 1, j, k + 1)) {
                return true;
            }
            board[i - 1][j] = word[k];
        }

        if (i < HEIGHT - 1 && board[i + 1][j] === word[k]) {
            board[i + 1][j] = "";
            if (dfs(i + 1, j, k + 1)) {
                return true;
            }
            board[i + 1][j] = word[k];
        }

        if (j > 0 && board[i][j - 1] === word[k]) {
            board[i][j - 1] = "";
            if (dfs(i, j - 1, k + 1)) {
                return true;
            }
            board[i][j - 1] = word[k];
        }

        if (j < WIDTH - 1 && board[i][j + 1] === word[k]) {
            board[i][j + 1] = "";
            if (dfs(i, j + 1, k + 1)) {
                return true;
            }
            board[i][j + 1] = word[k];
        }

        return false;
    }
};

console.log(exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCCED"
))// true;

console.log(exist(
    [["a","b"],["c","d"]],
    "abcd"
)) // true;