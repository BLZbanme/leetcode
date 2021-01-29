function swimInWater(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const edges = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const id = i * n + j;
            if (i) {
                edges.push([Math.max(grid[i][j], grid[i - 1][j]), id, id - n])
            }
            if (j) {
                edges.push([Math.max(grid[i][j], grid[i][j - 1]), id, id - 1])
            }
        }
    }
    edges.sort((a, b) => a[0] - b[0])
    const uf = new UnionFind0778(m * n);
    for (const edge of edges) {
        const [diff, x, y] = edge;
        uf.union(x, y);
        if (uf.isConnected(0, m * n - 1)) {
            return diff;
        }
    }
    return 0;
};

class UnionFind0778 {
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