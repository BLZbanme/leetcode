# 36.Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without repetition.

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

**Example 1:**

```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

**Example 2:**

```
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits `1-9` and the character `'.'`.
- The given board size is always `9x9`.

##### 2019.05.27

##### 	我的思路：

​	 用一个长度为10的整形数组代替set的作用（用10是因为我不想求下标的时候再用数独项的值减"1"了）。

​	本意是把横向和纵向和数独块的判断放一个O(n<sup>2</sup>)的循环，由于不想声明第二个arr，导致分别循环的。（我可真是傻逼）。

​	时间复杂度O(n<sup>2</sup>) [同样是n<sup>2</sup>，比其他方法的开销大不少]

```javascript
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
```

##### 别人的方法：

##### 	方法1：

​	声明了3个数组，然后在两层循环里面一次完事

```javascript
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
```

​	又老老实实用set写了一遍

```javascript
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
```

##### 	方法2：

​	上面的方法声明3个set（或数组），就是为了区分各行、各列各块的项。于是某一个高手就用给数值加些标记来区分它是哪行、哪列、哪块。

```javascript
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
```

