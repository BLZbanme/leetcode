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

console.log(minimumEffortPath([[1,10,6,7,9,10,4,9]])) //9
console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]])) //2
console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]])) //1
console.log(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]])) //0