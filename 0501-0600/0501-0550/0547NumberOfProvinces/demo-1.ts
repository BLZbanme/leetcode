function findCircleNum(isConnected: number[][]): number {
    const N = isConnected.length;
    const UF = new UnionFind547(N);
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            isConnected[i][j] && UF.union(i, j)
        }
    }
    return UF.setCount;
}

class UnionFind547 {
    parent: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }

    findRoot(x: number): number {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.findRoot(this.parent[x]);
        return this.parent[x]
    }

    union(x: number, y: number): boolean {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return false;
        this.setCount--;
        this.parent[xRoot] = yRoot;
        return true;
    }
}