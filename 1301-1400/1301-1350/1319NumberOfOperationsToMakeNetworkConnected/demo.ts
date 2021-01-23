function makeConnected1(n: number, connections: number[][]): number { 
    if (connections.length < n - 1) return -1;
    const edges = new Map();
    for (const [x, y] of connections) {
        edges.has(x) ? edges.get(x).push(y) : edges.set(x, [y]);
        edges.has(y) ? edges.get(y).push(x) : edges.set(y, [x]);
    }

    const used = Array(n).fill(0);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            dfsHelper(i, used, edges);
            ans++;
        }
    }
    return ans - 1;
};

const dfsHelper = (u: number, used: Array<number>, edges: Map<number, Array<number>>) => {
    used[u] = 1;
    if (edges.get(u)) {
        for (const v of edges.get(u)!) {
            if (!used[v]) {
                dfsHelper(v, used, edges);
            }
        }
    }
}

function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const uf = new TheUnionFind(n);
    for (const conn of connections) {
        uf.unite(conn[0], conn[1]);
    }
    return uf.setCount - 1;
}

class TheUnionFind {
    parent: Array<number>
    size: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(0).map((e, index) => index);
        this.size = Array(n).fill(1);
        //当前连通分量数目
        this.setCount = n;
    }

    findset(x: number) {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x])
        return this.parent[x];
    }

    unite (a: number, b: number) {
        let x = this.findset(a);
        let y = this.findset(b);
        if (x === y) return false;

        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    connected(a: number, b: number) {
        const x = this.findset(a);
        const y = this.findset(b);
        return x === y;
    }
}