# 130. Surrounded Regions

Given a 2D board containing `'X'` and `'O'` (**the letter O**), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

**Example:**

```
X X X X
X O O X
X X O X
X O X X
```

After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X
```

**Explanation:**

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.

##### 2019.08.19

##### 我的方法：

##### 		失败！

​		我想的是递归判断每个点是否被围了，但是现实告诉我超出栈数量限制了

```javascript
var solve = function(board) {
    const HEIGHT = board.length - 1;
    const WIDTH = board.length - 1;

    function direction(i, j, dir) {

        if (i < 0 || i > HEIGHT || j < 0 || j > WIDTH) {
            return false;
        }

        if (board[i][j] === "X") {
            return true;
        }

        switch (dir) {
            case "left" : 
                return direction(i, j - 1, "left") && direction(i - 1, j, "top") && direction(i + 1, j, "down")
            case "right" :
                return direction(i, j + 1, "right") && direction(i - 1, j, "top") && direction(i + 1, j, "down")
            case "top" :
                return direction(i - 1, j, "top") && direction(i, j - 1, "left") && direction(i, j + 1, "right")
            case "down" :
                return direction(i + 1, j, "down") && direction(i, j - 1, "left") && direction(i, j + 1, "right")
        }
    }

    function isSorrounded(i, j) {
        return board[i][j] === "O" && direction(i, j, "top") 
            && direction(i, j, "down") && direction(i, j, "left")  && direction(i, j, "right");
    }

    for (let i = 1; i < HEIGHT ; i++) {
        for (let j = 1; j < WIDTH; j++) {
            if (isSorrounded(i, j)) {
                board[i][j] = "X";
            }
        }
    }

    return board;
};
```

##### 别人的写法：

​		dfs，主要是思路比我好，先找到边界以及边界中为"O"的点，把这些点标记起来，然后把再一次便利把为"O"的点全部改为"X"。最后一次遍历把标记的点改为"O"

```javascript
var solve = function(board) {
    const HEIGHT = board.length;
    if (HEIGHT <= 1) {
        return;
    }

    const WIDTH = board[0].length;
    if (WIDTH <= 1) {
        return;
    }

    function check(i, j) {
        if (board[i][j] === "O") {
            board[i][j] = "1";
            if (i > 1) {
                check(i - 1, j);
            }
            if (j > 1) {
                check(i, j - 1);
            }
            if (i < HEIGHT - 1) {
                check(i + 1, j);
            }
            if (j < WIDTH - 1) {
                check(i, j + 1);
            }
        }
    }

    for (let i = 0; i < HEIGHT; i++) {
        check(i, 0);
        check(i, WIDTH - 1);
    }

    for (j = 1; j < WIDTH - 1; j++) {
        check(0, j);
        check(HEIGHT - 1, j);
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === "1") {
                board[i][j] = "O";
            }
        }
    }

    return;
}
```