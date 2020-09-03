# 51. N-Queens

The *n*-queens puzzle is the problem of placing *n* queens on an *n*×*n* chessboard such that no two queens attack each other.

![img](https://assets.leetcode.com/uploads/2018/10/12/8-queens.png)

Given an integer *n*, return all distinct solutions to the *n*-queens puzzle.

Each solution contains a distinct board configuration of the *n*-queens' placement, where `'Q'` and `'.'` both indicate a queen and an empty space respectively.

**Example:**

```
Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
```

#### 2020.09.03

#### 	我的思路：

没写出来

#### 别人的思路：

经典回溯

```javascript
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
```

