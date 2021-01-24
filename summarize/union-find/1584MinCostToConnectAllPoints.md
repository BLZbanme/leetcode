# 1584. Min Cost to Connect All Points

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the **manhattan distance** between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return *the minimum cost to make all points connected.* All points are connected if there is **exactly one** simple path between any two points.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/08/26/d.png)

```
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.
```

**Example 2:**

```
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
```

**Example 3:**

```
Input: points = [[0,0],[1,1],[1,0],[-1,1]]
Output: 4
```

**Example 4:**

```
Input: points = [[-1000000,-1000000],[1000000,1000000]]
Output: 4000000
```

**Example 5:**

```
Input: points = [[0,0]]
Output: 0
```

 

**Constraints:**

- `1 <= points.length <= 1000`
- `-106 <= xi, yi <= 106`
- All pairs `(xi, yi)` are distinct.

#### 2021.01.24

#### 	我的思路：

没写出来

#### 别人的思路：

亮点：利用并查集来实现prim算法生成最小生成树

```javascript
function minCostConnectPoints(points: number[][]): number {
    const dist = (x: number, y: number): number => {
        return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
    };
    const N = points.length;
    const dsu = new DisjointedSet1(N);
    const edges = [];
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            edges.push([dist(i, j), i, j]);
        }
    }
    edges.sort((a: Array<number>, b: Array<number>) => a[0] - b[0]);
    
    let ret = 0;
    let num = 1;
    for (const [length, x, y] of edges) {
        if (dsu.union(x, y)) {
            ret += length;
            num++;
            if (num === N) break;
        }
    }
    return ret;
};

class DisjointedSet1 {
    parent: Array<number>
    rank: Array<number>

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.rank = Array(n).fill(0);
    }

    findRoot(x: number): number {
        if (this.parent[x] === -1) return x;
        return this.findRoot(this.parent[x]);
    }

    union(x: number, y: number): boolean {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return false;
        if (this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        }
        else if (this.rank[xRoot] > this.rank[yRoot]) {
            this.parent[yRoot] = xRoot;
        }
        else {
            this.parent[xRoot] = yRoot;
            this.rank[yRoot]++;
        }
        return true;
    }
}
```

