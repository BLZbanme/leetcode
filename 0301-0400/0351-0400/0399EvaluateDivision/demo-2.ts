function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const N = equations.length;
    const ufww = new UnionFindWithWeight(2 * N);

    let idCount = 0;
    const val2Id = new Map<string, number>();
    for (let equation of equations) {
        const [x, y] = equation;
        val2Id.has(x) || val2Id.set(x, idCount++);
        val2Id.has(y) || val2Id.set(y, idCount++);
    }

    for (let i = 0; i < N; i++) {
        const [x, y] = equations[i];
        const value = values[i];
        ufww.union(val2Id.get(x)!, val2Id.get(y)!, value);
    }

    const result = [];

    for (let query of queries) {
        const [x, y] = query;
        result.push(ufww.isConnected(val2Id.get(x)!, val2Id.get(y)!))
    }
    return result;
};

class UnionFindWithWeight {
    parent: Array<number>
    weight: Array<number>

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.weight = Array(n).fill(1);
    }

    findRoot(x: number): number {
        if (this.parent[x] === -1) return x;
        let origin = this.parent[x];
        this.parent[x] = this.findRoot(this.parent[x]);
        this.weight[x] *= this.weight[origin];
        return this.parent[x];
    }

    union(x: number, y: number, value: number): boolean {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        this.weight[xRoot] = (this.weight[y] * value) / this.weight[x];
        return true;
    }

    isConnected(x: number, y: number): number {
        if (x === undefined || y === undefined) return -1.0;
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) {
            return this.weight[x] / this.weight[y];
        }
        return -1.0;
    }
}

console.log(calcEquation(
    [
        ["x1","x2"],["x2","x3"],
        ["x3","x4"],["x4","x5"]
    ], 
    [3.0,4.0,5.0,6.0],
    [
        ["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]
    ]))
console.log(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]))