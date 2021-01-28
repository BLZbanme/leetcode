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

maxNumEdgesToRemove(4, [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]])