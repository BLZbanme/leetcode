# 1319. Number of Operations to Make Network Connected

There are `n` computers numbered from `0` to `n-1` connected by ethernet cables `connections` forming a network where `connections[i] = [a, b]` represents a connection between computers `a` and `b`. Any computer can reach any other computer directly or indirectly through the network.

Given an initial computer network `connections`. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the *minimum number of times* you need to do this in order to make all the computers connected. If it's not possible, return -1. 

 

**Example 1:**

**![img](https://assets.leetcode.com/uploads/2020/01/02/sample_1_1677.png)**

```
Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2020/01/02/sample_2_1677.png)**

```
Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2
```

**Example 3:**

```
Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.
```

**Example 4:**

```
Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
Output: 0
```

 

**Constraints:**

- `1 <= n <= 10^5`
- `1 <= connections.length <= min(n*(n-1)/2, 10^5)`
- `connections[i].length == 2`
- `0 <= connections[i][0], connections[i][1] < n`
- `connections[i][0] != connections[i][1]`
- There are no repeated connections.
- No two computers are connected by more than one cable.

##### 2021.01.23

##### 	我的思路：

没写出来

#### 别人的写法：

##### 方法1：dfs判断连通分量个数

```javascript
function makeConnected1(n: number, connections: number[][]): number { 
    if (connections.length < n - 1) return -1;
    const edges = new Map();
    for (const [x, y] of connections) {
        edges.has(x) ? edges.get(x).push(y) : edges.set(x, [y]);
        edges.has(y) ? edges.get(y).push(x) : edges.set(y, [x]);
    }

    const used = Array(n).fill(0);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            dfsHelper(i, used, edges);
            ans++;
        }
    }
    return ans - 1;
};

const dfsHelper = (u: number, used: Array<number>, edges: Map<number, Array<number>>) => {
    used[u] = 1;
    if (edges.get(u)) {
        for (const v of edges.get(u)!) {
            if (!used[v]) {
                dfsHelper(v, used, edges);
            }
        }
    }
}

```

##### 方法2：并查集判断连通分量个数

```typescript
function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const uf = new TheUnionFind(n);
    for (const conn of connections) {
        uf.unite(conn[0], conn[1]);
    }
    return uf.setCount - 1;
}

class TheUnionFind {
    parent: Array<number>
    size: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(0).map((e, index) => index);
        this.size = Array(n).fill(1);
        //当前连通分量数目
        this.setCount = n;
    }

    findset(x: number) {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x])
        return this.parent[x];
    }

    unite (a: number, b: number) {
        let x = this.findset(a);
        let y = this.findset(b);
        if (x === y) return false;

        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    connected(a: number, b: number) {
        const x = this.findset(a);
        const y = this.findset(b);
        return x === y;
    }
}
```

#### 2021.01.14

#### redo

带rank的并查集！

```typescript
function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;
    const ds = new DisjointedSet(n);
    for (let conn of connections) {
        const [x, y] = conn;
        ds.union(x, y);
    } 
    return ds.size - 1;
}

class DisjointedSet {
    parent: Array<number>
    rank: Array<number>
    size: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.rank = Array(n).fill(0);
        this.size = n;
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
            this.rank[yRoot]++;
            this.parent[xRoot] = yRoot;
        }
        this.size--;
        return true;
    }
}
```

