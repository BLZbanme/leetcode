"use strict";
function exist(board, word) {
    var M = board.length;
    var N = board[0].length;
    var visited = Array(M);
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            visited[i] = Array(N).fill(0);
        }
    }
    var dfs = function (i, j, index) {
        if (i < 0 || j < 0 || i == M || j == N || visited[i][j] == 1 || board[i][j] !== word[index]) {
            return false;
        }
        if (index == word.length - 1) {
            return true;
        }
        visited[i][j] = 1;
        if (dfs(i + 1, j, index + 1) || dfs(i, j + 1, index + 1)
            || dfs(i - 1, j, index + 1) || dfs(i, j - 1, index + 1)) {
            return true;
        }
        else {
            visited[i][j] = 0;
            return false;
        }
    };
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}
;
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED')); //true
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'SEE')); //true
console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCB')); //false
console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB")); //true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS")); //true
