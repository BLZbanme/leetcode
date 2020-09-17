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

console.log(findRedundantDirectedConnection([[1,2], [2,3], [3,4], [4,1], [1,5]]));