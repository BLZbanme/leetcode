/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const n = row.length;
    const tot = n >> 1;

    const uf = new UnionFind(tot);
    for (let i = 0; i < n; i += 2) {
        const l = row[i] >> 1;
        const r = row[i + 1] >> 1;
        uf.union(l, r);
    }

    return tot - uf.getPoints();
};

class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill(-1);
        this.point = n;
    }

    getPoints() {
        return this.point;
    }

    find(x) {
        if (this.parent[x] == -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x, y) {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) return false;
        this.point--;
        this.parent[xRoot] = yRoot;
        return true;
    }
}