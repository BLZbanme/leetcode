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