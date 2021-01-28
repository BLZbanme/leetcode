# 1579. Remove Max Number of Edges to Keep Graph Fully Traversable

Alice and Bob have an undirected graph of `n` nodes and 3 types of edges:

- Type 1: Can be traversed by Alice only.
- Type 2: Can be traversed by Bob only.
- Type 3: Can by traversed by both Alice and Bob.

Given an array `edges` where `edges[i] = [typei, ui, vi]` represents a bidirectional edge of type `typei` between nodes `ui` and `vi`, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

Return *the maximum number of edges you can remove, or return* `-1` *if it's impossible for the graph to be fully traversed by Alice and Bob.*

 

**Example 1:**

**![img](https://assets.leetcode.com/uploads/2020/08/19/ex1.png)**

```
Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
Output: 2
Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2020/08/19/ex2.png)**

```
Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
Output: 0
Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.
```

**Example 3:**

**![img](https://assets.leetcode.com/uploads/2020/08/19/ex3.png)**

```
Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
Output: -1
Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the graph fully traversable.
```

 

 

**Constraints:**

- `1 <= n <= 10^5`
- `1 <= edges.length <= min(10^5, 3 * n * (n-1) / 2)`
- `edges[i].length == 3`
- `1 <= edges[i][0] <= 3`
- `1 <= edges[i][1] < edges[i][2] <= n`
- All tuples `(typei, ui, vi)` are distinct.

#### 2021.01.27

#### 	我的思路：

```typescript
function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    let count = 0;
    const ufA = new UnionFind1579(n + 1);
    const ufB = new UnionFind1579(n + 1);
    for (let edge of edges) {
        if (edge[0] === 3) {
            let bool = ufA.union(edge[1], edge[2])
            ufB.union(edge[1], edge[2])
            if (!bool) {
                count++;
            }
        }
    }

    for (let edge of edges) {
        if (edge[0] === 1) {
            if (!ufA.union(edge[1] , edge[2])) {
                count++;
            }
        }
    }

    for (let edge of edges) {
        if (edge[0] === 2) {
            if (!ufB.union(edge[1] , edge[2])) {
                count++;
            }
        }
    }

    return (!ufA.pointCount && !ufB.pointCount) ? count : -1;
};

class UnionFind1579 {
    parent: Array<number>
    pointCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.pointCount = n - 2;
    }

    find(x: number) {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) {
            return false;
        }
        this.pointCount--;
        this.parent[xRoot] = yRoot;
        return true;
    }
}
```

#### 别人的思路：

比我的优化之处是：ufa.union出错时，不需要ufb.union了

```javascript
function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    let count = 0;
    const ufA = new UnionFind1579(n + 1);
    const ufB = new UnionFind1579(n + 1);
    for (let edge of edges) {
        if (edge[0] === 3) {
            if (ufA.union(edge[1], edge[2])) {
                ufB.union(edge[1], edge[2])
            }
            else {
                count++;
            }
        }
    }

    for (let edge of edges) {
        if (edge[0] === 1) {
            if (!ufA.union(edge[1] , edge[2])) {
                count++;
            }
        }
    }

    for (let edge of edges) {
        if (edge[0] === 2) {
            if (!ufB.union(edge[1] , edge[2])) {
                count++;
            }
        }
    }

    return (!ufA.pointCount && !ufB.pointCount) ? count : -1;
};

class UnionFind1579 {
    parent: Array<number>
    pointCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.pointCount = n - 2;
    }

    find(x: number) {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) {
            return false;
        }
        this.pointCount--;
        this.parent[xRoot] = yRoot;
        return true;
    }
}
```

