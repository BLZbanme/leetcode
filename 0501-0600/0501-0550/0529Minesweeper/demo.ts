function updateBoard(board: string[][], click: number[]): string[][] {
    check(board, click[0], click[1]);
    return board;
};

function check(board: string[][], i: number, j: number): void {
    if (i < 0 || j < 0 || i === board.length || j === board[0].length) {
        return;
    }

    if (board[i][j] === 'M') {
        board[i][j] = 'X';
        return ;
    }

    if (board[i][j] === 'E') {
        let num = count(board, i + 1, j) + count(board, i - 1, j) + count(board, i, j + 1) + count(board, i, j - 1)
            + count(board, i + 1, j + 1) + count(board, i - 1, j - 1) + count(board, i - 1, j + 1) + count(board, i + 1, j - 1);
        if (num) {
            board[i][j] = '' + num;
        }
        else {
            board[i][j] = 'B';
            check(board, i, j + 1)
            check(board, i, j - 1)
            check(board, i + 1, j)
            check(board, i - 1, j)
            check(board, i + 1, j + 1)
            check(board, i + 1, j - 1)
            check(board, i - 1, j + 1)
            check(board, i - 1, j - 1)
        }
    } 
    return ;
}

function count(board: string[][], i: number, j: number): number {
    if (i < 0 || j < 0 || i === board.length || j === board[0].length) {
        return 0;
    }

    if (board[i][j] === 'M') {
        return 1;
    }

    return 0;
}