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