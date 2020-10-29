function islandPerimeter(grid) {
    if (!grid || !grid.length || !grid[0].length)
        return 0;
    var perimeter = 0;
    var x = grid.length;
    var y = grid[0].length;
    var visited = Array(x).fill(0).map(function (e) { return Array(y).fill(false); });
    var check = function (i, j) {
        if (i < 0 || j < 0 || i == x || j == y || grid[i][j] == 0) {
            return 1;
        }
        return 0;
    };
    var dfs = function (i, j) {
        if (i < 0 || j < 0 || i == x || j == y || grid[i][j] == 0 || visited[i][j])
            return;
        visited[i][j] = true;
        perimeter += check(i + 1, j) + check(i - 1, j) + check(i, j + 1) + check(i, j - 1);
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j);
                break;
            }
        }
    }
    return perimeter;
}
;
console.log(islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]));
