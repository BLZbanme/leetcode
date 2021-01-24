# 959. Regions Cut By Slashes

In a N x N `grid` composed of 1 x 1 squares, each 1 x 1 square consists of a `/`, `\`, or blank space.  These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a `\` is represented as `"\\"`.)

Return the number of regions.

 



**Example 1:**

```
Input:
[
  " /",
  "/ "
]
Output: 2
Explanation: The 2x2 grid is as follows:
```

**Example 2:**

```
Input:
[
  " /",
  "  "
]
Output: 1
Explanation: The 2x2 grid is as follows:
```

**Example 3:**

```
Input:
[
  "\\/",
  "/\\"
]
Output: 4
Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
The 2x2 grid is as follows:
```

**Example 4:**

```
Input:
[
  "/\\",
  "\\/"
]
Output: 5
Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
The 2x2 grid is as follows:
```

**Example 5:**

```
Input:
[
  "//",
  "/ "
]
Output: 3
Explanation: The 2x2 grid is as follows:
```

 

**Note:**

1. `1 <= grid.length == grid[0].length <= 30`
2. `grid[i][j]` is either `'/'`, `'\'`, or `' '`.



#### 2021.01.25

#### 	我的思路：

##### 没写出来

#### 别人的方法：

太秀了

层次遍历，碰到第一个有子树为空的结点后，直接用一个变量标识，后边遍历的结点不可有子树了

```javascript
function regionsBySlashes(grid: string[]): number {
    const n = grid.length;
    const uf = new UnionFind00959(n * n * 4);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const idx = i * n + j;
            if (i < n - 1) {
                const bottom = idx + n;
                uf.union(idx * 4 + 2, bottom * 4);
            }
            if (j < n - 1) {
                const right = idx +1;
                uf.union(idx * 4 +1, right * 4 + 3);
            }
            if (grid[i][j] === '/') {
                uf.union(idx * 4, idx * 4 + 3);
                uf.union(idx * 4 + 1, idx * 4 + 2);
            }
            else if (grid[i][j] == '\\') {
                uf.union(idx * 4, idx * 4 + 1);
                uf.union(idx * 4 + 2, idx * 4 + 3);
            }
            else {
                uf.union(idx * 4, idx * 4 + 1);
                uf.union(idx * 4 + 1, idx * 4 + 2);
                uf.union(idx * 4 + 2, idx * 4 + 3);
            }
        }
    }

    return uf.setCount;
};

class UnionFind00959 {
    parent: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }

    find(x: number): number {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x])
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        let xRoot = this.find(x);
        let yRoot = this.find(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        this.setCount--;
        return true;
    }
}
```

