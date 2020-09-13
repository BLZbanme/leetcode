# 79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example:**

```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

**Constraints:**

- `board` and `word` consists only of lowercase and uppercase English letters.
- `1 <= board.length <= 200`
- `1 <= board[i].length <= 200`
- `1 <= word.length <= 10^3`

##### 2020.06.19

#### 我的方法

##### 回溯

思路是正确的，但是写的着实有几分丑。

碰到一个等于word[0]的点，就找它的上下左右，递归下去，把每个经过的点先改成```""```，等递归返回后再改回来。

还有种思路是用visited二维数组记录遍历过的点

**注：**二维数组找路径常用回溯

```javascript
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
```

##### 写的好看的回溯！

```javascript
var exist = function(board, word) {
    if (!board) {
        return false;
    }

    const HEIGHT = board.length;
    if (!HEIGHT) {
        return false;
    }

    const WIDTH = board[0].length;
    if (!WIDTH) {
        return false;
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    function dfs(i, j, k) {
        if (i < 0 || i === HEIGHT 
            || j < 0 || j === WIDTH 
            ||  board[i][j] !== word[k]) {
            return false
        }

        if (k === word.length - 1) {
            return true;
        }

        board[i][j] = "";
        let res = dfs(i, j + 1, k + 1) 
            || dfs(i + 1, j, k + 1) 
            || dfs(i, j - 1, k + 1) 
            || dfs(i - 1, j, k + 1);
            
        board[i][j] = word[k];
        return res;

    }

    return false;
};
```

#### 2020.09.13

redo

```typescript
function exist(board: string[][], word: string): boolean {
    const M = board.length;
    const N = board[0].length;
    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            visited[i] = Array(N).fill(0);
        }
    }

    const dfs = (i: number, j: number, index: number): boolean => {
        if (i < 0 || j < 0 || i == M || j == N || visited[i][j] == 1 || board[i][j] !== word[index]) {
            return false;
        }
        if (index == word.length - 1) {
            return true;
        }
        visited[i][j] = 1;
        if (dfs(i + 1, j, index + 1) || dfs(i, j + 1, index + 1) 
            || dfs(i - 1, j, index + 1) || dfs(i, j - 1, index + 1)){
            return true;
        }
        else {
            visited[i][j] = 0;
            return false;
        }
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
```

