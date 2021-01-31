function numSimilarGroups(strs: string[]): number {
    const n = strs.length;
    const uf = new UnionFind0839(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (check(strs[i], strs[j])) {
                uf.union(i, j);
            }
        }
    }
    return uf.setCount;
};

class UnionFind0839 {
    parent: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
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
        this.setCount--;
        return true;
    }
}

function check(str1: string, str2: string): boolean {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;
    }
    if (count > 2) return false;
    return true;
}