/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let arr = new Array(10).fill(0);
        for(let num of board[i]){
            if(num === "."){
                continue;
            }else{
                if(arr[num] == 0){
                    arr[num]++;
                }else{
                    return false;
                }
            }
        }
        arr = new Array(10).fill(0);
        for(let j = 0; j < 9; j++){
            let num = board[j][i];
            if(num === "."){
                continue;
            }else{
                if(arr[num] == 0){
                    arr[num]++;
                }else{
                    return false;
                }
            }
        }
    }
    let i = 0;
    let times = 0;
    while(times < 3){
        let arr = new Array(10).fill(0);
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                let num = board[i + j][times * 3 + k];
                if(num === "."){
                    continue;
                }else{
                    if(arr[num] == 0){
                        arr[num]++;
                    }else{
                        return false;
                    }
                }
            }
        }
        i += 3;
        times += parseInt(i / 9);
        i %= 9;
    }
    return true;
};


var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let row = new Array(10).fill(0);
        let column = new Array(10).fill(0);
        let block = new Array(10).fill(0);
        for(let j = 0; j < 9; j++){
            let rowtmp = board[i][j];
            if(rowtmp !== "."){
                if(row[rowtmp] == 0){
                    row[rowtmp]++;
                }else{
                    return false;
                }
            }
            let coltmp = board[j][i];
            if(coltmp !== "."){
                if(column[coltmp] == 0){
                    column[coltmp]++;
                }else{
                    return false;
                }
            }
            let rowIndex = 3 * parseInt(i / 3);
            let colIndex = 3 * (i % 3);
            let bloTmp = board[rowIndex + parseInt(j / 3)][colIndex + j % 3];
            if(bloTmp !== "."){
                if(block[bloTmp] == 0){
                    block[bloTmp]++;
                }else{
                    return false;
                }
            }
        }
    }
    return true;
};

var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let row = new Set();
        let column = new Set();
        let block = new Set();
        for(let j = 0; j < 9; j++){
            let rowtmp = board[i][j];
            if(rowtmp !== "." ){
                if(row.has(rowtmp)){
                    return false;
                }else{
                    row.add(rowtmp)
                }
            }
            let coltmp = board[j][i];
            if(coltmp !== "." ){
                if(column.has(coltmp)){
                    return false;
                }else{
                    column.add(coltmp)
                }
            }
            let rowIndex = 3 * parseInt(i / 3);
            let colIndex = 3 * (i % 3);
            let bloTmp = board[rowIndex + parseInt(j / 3)][colIndex + j % 3];
            if(bloTmp !== "." ){
                if(block.has(bloTmp)){
                    return false;
                }else{
                    block.add(bloTmp)
                }
            }
        }
    }
    return true;
};

var isValidSudoku = function(board) {
    let set = new Set();
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let num = board[i][j];
            if(num !== "."){
                if(set.has(num + "in row " + i) || set.has(num + "in column " + j) || set.has(num + "in block " + parseInt(i / 3) + "-" + parseInt(j / 3))){
                    return false;
                }else{
                    set.add(num + "in row " + i);
                    set.add(num + "in column " + j);
                    set.add(num + "in block " + parseInt(i / 3) + "-" + parseInt(j / 3));
                }
            }
        }
    }
    return true;
}

console.log(isValidSudoku([
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]))

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]))

  console.log(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]))