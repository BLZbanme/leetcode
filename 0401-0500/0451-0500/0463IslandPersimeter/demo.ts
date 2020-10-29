function islandPerimeter(grid: number[][]): number {

    if (!grid || !grid.length || !grid[0].length) return 0;

    let perimeter = 0;

    const x = grid.length;
    const y = grid[0].length;
    const visited = Array(x).fill(0).map(e => Array(y).fill(false))

    const check = (i: number, j: number): number => {
        if (i < 0 || j < 0 || i == x || j == y || grid[i][j] == 0) {
            return 1;
        }
        return 0;
    }

    const dfs = (i: number, j: number): void => {
        if (i < 0 || j < 0 || i == x || j == y || grid[i][j] == 0 || visited[i][j]) return;
        visited[i][j] = true;
        perimeter += check(i + 1, j) + check(i - 1, j) + check(i, j + 1) + check(i, j - 1);
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j);
                break;
            }
        }
    }

    return perimeter;
};

console.log(islandPerimeter([
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
]))