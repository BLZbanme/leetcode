/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board) {
        return;
    }

    const M = board.length;
    if (!M) {
        return;
    }
    const N = board[0].length;
    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(0);
    }

    for (let i = 0; i < N; i++) {
            dfs(0, i);
            dfs(M - 1, i);

    }

    for (let i = 0; i < M; i++) {
        dfs(i, 0);
        dfs(i, N - 1);
    }

    
    function dfs(i, j) {
        visited[i][j] = 1;
        
        if (board[i][j] === 'O') {
            board[i][j] = '#';
            if (i && !visited[i - 1][j]) {
                dfs(i - 1, j);
            }
            if (j < N - 1 && !visited[i][j + 1]) {
                dfs(i, j + 1);
            }
            if (i < M - 1 && !visited[i + 1][j]) {
                dfs(i + 1, j);
            }
            if (j && !visited[i][j - 1]) {
                dfs(i, j - 1);
            }
        }

        visited[i][j] = 0;
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            board[i][j] = board[i][j] === '#' ? 'O' : 'X';
        }
    }

    return board;

};
console.log(solve(
    [
        ["X","O","X","O","X","O"],
        ["O","X","O","X","O","X"],
        ["X","O","X","O","X","O"],
        ["O","X","O","X","O","X"]
    ]
))

console.log(solve(
    [
        ['X','X','X','X'],
        ['X','O','O','X'],
        ['X','X','O','X'],
        ['X','O','X','X'],
    ]
))


console.log(solve(
    [
        ['X','X','X','X'],
        ['X','O','O','X'],
        ['X','X','O','X'],
        ['X','O','O','X'],
    ]
))