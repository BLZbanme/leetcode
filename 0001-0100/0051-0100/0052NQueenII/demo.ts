function totalNQueens(n: number): number {
    const board = Array(n).fill(0).map(e => Array(n).fill('.'));
    
    let res = 0;

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
            res++;
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