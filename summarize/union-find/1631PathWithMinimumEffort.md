# 1631. Path With Minimum Effort

You are a hiker preparing for an upcoming hike. You are given `heights`, a 2D array of size `rows x columns`, where `heights[row][col]` represents the height of cell `(row, col)`. You are situated in the top-left cell, `(0, 0)`, and you hope to travel to the bottom-right cell, `(rows-1, columns-1)` (i.e., **0-indexed**). You can move **up**, **down**, **left**, or **right**, and you wish to find a route that requires the minimum **effort**.

A route's **effort** is the **maximum absolute difference** in heights between two consecutive cells of the route.

Return *the minimum **effort** required to travel from the top-left cell to the bottom-right cell.*

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/10/04/ex1.png)

```
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
```

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/10/04/ex2.png)

```
Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
```

**Example 3:**





```
Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
```

 

**Constraints:**

- `rows == heights.length`
- `columns == heights[i].length`
- `1 <= rows, columns <= 100`
- `1 <= heights[i][j] <= 106`

#### 2021.01.29

#### 	我的思路：

再次没能看出是图论的题！

#### 别人的思路：

将点抽象成图的连通性

```typescript
function minimumEffortPath(heights: number[][]): number {
    const m = heights.length;
    const n = heights[0].length;
    const edges = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const idx = i * n + j;
            if (i) {
                edges.push([Math.abs(heights[i][j] - heights[i - 1][j]), idx, idx - n]);
            }
            if (j) {
                edges.push([Math.abs(heights[i][j] - heights[i][j - 1]), idx, idx - 1]);
            }
        }
    }
    edges.sort((a, b) => a[0] - b[0]);
    const uf = new UnionFind1631(m * n);
    let count = 0;
    for (const edge of edges) {
        const [diff, x, y] = edge;
        uf.union(x, y);
        if (uf.isConnected(0, m * n - 1)) {
            count = diff;
            break;
        }
    }
    return count;
};

class UnionFind1631 {
    parent: Array<number>

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
    }

    find(x: number): number {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        return true;
    }

    isConnected(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        return xRoot === yRoot;
    }
}
```
