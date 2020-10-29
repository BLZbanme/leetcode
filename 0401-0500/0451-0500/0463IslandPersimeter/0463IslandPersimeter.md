# 463. Island Perimeter

You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water.

Grid cells are connected **horizontally/vertically** (not diagonally). The `grid` is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2018/10/12/island.png)

```
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
```

**Example 2:**

```
Input: grid = [[1]]
Output: 4
```

**Example 3:**

```
Input: grid = [[1,0]]
Output: 4
```

 

**Constraints:**

- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 100`
- `grid[i][j]` is `0` or `1`.



#### 2020.10.30

#### 	我的思路：

```javascript
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
```
