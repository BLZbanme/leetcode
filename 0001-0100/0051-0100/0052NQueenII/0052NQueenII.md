# 52.N-Queens II

The *n*-queens puzzle is the problem of placing *n* queens on an *n*×*n* chessboard such that no two queens attack each other.

![img](https://assets.leetcode.com/uploads/2018/10/12/8-queens.png)

Given an integer *n*, return the number of distinct solutions to the *n*-queens puzzle.

**Example:**

```
Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```



#### 2020.10.17

#### 我的思路

没写出来

#### 别人的思路

##### 回溯

```typescript
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
```

