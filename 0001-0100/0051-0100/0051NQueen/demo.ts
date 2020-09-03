function solveNQueens(n: number): string[][] {
    const board = Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = (Array(n) as any).fill('.');
    }

    const res: Array<Array<string>> = [];
    const isValid = (row: number, col: number): boolean => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'Q' &&
                    (j == col || i + j === row + col || i - j === row - col)) {
                    return false;
                }
            }
        }
        return true;
    }

    const helper = (row: number) => {
        if (row == n) {
            const stringBoard = [...board];
            for (let i = 0; i < n; i++) {
                stringBoard[i] = stringBoard[i].join('');
            }
            res.push(stringBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                helper(row + 1);
                board[row][col] = '.';
            }
        }
    }
    helper(0);
    return res;
};