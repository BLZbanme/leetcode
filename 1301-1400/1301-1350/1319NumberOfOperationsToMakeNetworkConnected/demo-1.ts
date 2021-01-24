function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;
    const ds = new DisjointedSet(n);
    for (let conn of connections) {
        const [x, y] = conn;
        ds.union(x, y);
    } 
    return ds.size - 1;
}

class DisjointedSet {
    parent: Array<number>
    rank: Array<number>
    size: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.rank = Array(n).fill(0);
        this.size = n;
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
            this.rank[yRoot]++;
            this.parent[xRoot] = yRoot;
        }
        this.size--;
        return true;
    }
}

console.log(makeConnected(4, [[0,1],[0,2],[1,2]]));