# 685. Redundant Connection II

In this problem, a rooted tree is a **directed** graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of `edges`. Each element of `edges` is a pair `[u, v]` that represents a **directed** edge connecting nodes `u` and `v`, where `u` is a parent of child `v`.

Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

**Example 1:**

```
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given directed graph will be like this:
  1
 / \
v   v
2-->3
```



**Example 2:**

```
Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
Output: [4,1]
Explanation: The given directed graph will be like this:
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3
```



**Note:**

The size of the input 2D-array will be between 3 and 1000.

Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

#### 2020.09.17

#### 	我的思路：

没做出来

#### 别人的思路：

并查集

```typescript
function findRedundantDirectedConnection(edges: number[][]): number[] {
    const N = edges.length;
    let uf = new UnionFind(N + 1);
    let parent = Array(N + 1);
    for (let i = 1; i <= N; i++) {
        parent[i] = i;
    }

    let conflict = -1;
    let cycle = -1;
    for (let i = 0; i < N; i++) {
        let [node1, node2] = edges[i];
        if (parent[node2] != node2) {
            conflict = i;
        }
        else {
            parent[node2] = node1;
            if (uf.find(node1) == uf.find(node2)) {
                cycle = i;
            }
            else {
                uf.union(node1, node2);
            }
        }
    }

    if (conflict < 0) {
        let redundant = [edges[cycle][0], edges[cycle][1]];
        return redundant;
    }
    else {
        let conflictEdge = edges[conflict];
        if (cycle >= 0) {
            let redundant = [parent[conflictEdge[1]], conflictEdge[1]];
            return redundant;
        }
        else {
            let redundant = [conflictEdge[0], conflictEdge[1]];
            return redundant;
        }
    }
};

class UnionFind {
    private ancestor: Array<number>;

    constructor(n: number) {
        this.ancestor = Array(n);
        for (let i = 0; i < n; i++) {
            this.ancestor[i] = i;
        }
    }

    public union(index1: number, index2: number): void {
        this.ancestor[this.find(index1)] = this.find(index2);
    }

    public find(index: number): number {
        if (this.ancestor[index] != index) {
            this.ancestor[index] = this.find(this.ancestor[index]);
        }
        return this.ancestor[index];
    }
}
```

