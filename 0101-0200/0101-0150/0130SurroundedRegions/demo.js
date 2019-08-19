/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
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

console.log(
    solve([])
)


console.log(
    solve([
        ["X","X","X","X","X"],
        ["X","O","O","O","X"],
        ["X","X","O","O","X"],
        ["X","X","X","O","X"],
        ["X","O","X","X","X"]
    ])
)

console.log(
    solve([
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"]
    ])
)

