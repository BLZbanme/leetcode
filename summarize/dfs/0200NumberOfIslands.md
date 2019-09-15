# 200. Number of Islands

Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**

```
Input:
11000
11000
00100
00011

Output: 3
```

##### 2019.09.15

##### 	我的思路：

​		dfs，每找到一个为```'1'```的点计数器就加1，并且把周围的每个点都遍历，把其中为```'1'```的都置为```'0'```。这里我额外对每个点判断了他来自的方向，这样的话可以不去判断他来自的方向的点是啥了。但后来我仔细思考了一下，这并不划算，因为每个点来自的方向的那个点必然是```'0'```了。

##### 		注：中间有个小插曲， 我把```grid[i][j] = '0';```一开始写成了```grid[i][j] === '0';```，导致始终报错溢出，我想当然的以为是dfs方法行不通，直到我看了高亮答案跟我思路基本一致，才仔细看了下。

```javascript
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
```

##### 别人的方法：

​		dfs

```javascript
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
```
