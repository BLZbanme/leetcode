/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    function check(direction, i, j) {
        if ( i < 0 || j < 0 || i === H || j === W 
            ||grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        switch(direction) {
            case "left":                
                check("left", i, j - 1);
                check("top", i - 1, j);
                check("down", i + 1, j);
                break;
            case "right":                
                check("right", i, j + 1);
                check("top", i - 1, j);
                check("down", i + 1, j);
                break;
            case "top":                
                check("left", i, j - 1);
                check("right", i, j + 1);
                check("top", i - 1, j);
                break;
            case "down":                
                check("left", i, j - 1);
                check("right", i, j + 1);
                check("down", i + 1, j);
                break;
            default:
                check("right", i, j + 1);
                check("down", i + 1, j);
                break;
        }
    }

    let count = 0;
    const H = grid.length;
    if (!H) {
        return count;
    }
    const W = grid[0].length;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === '1') {
                count++;
                check(null,i, j);
            }
        }
    }
    return count;
};

var numIslands = function(grid) {
    let count = 0;
    const H = grid.length;
    if (H === 0) {
        return count;
    }
    const W = grid[0].length;

    function dfs(i, j) {
        if (i < 0 || j < 0 || i === H || j === W 
            || grid[i][j] !== '1') {
                return;
        }
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}

console.log(numIslands(
    [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
    ]
))

console.log(numIslands(
    [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ]
))