function calcEquation(equations, values, queries) {
    var N = equations.length;
    var ufww = new UnionFindWithWeight(2 * N);
    var idCount = 0;
    var val2Id = new Map();
    for (var _i = 0, equations_1 = equations; _i < equations_1.length; _i++) {
        var equation = equations_1[_i];
        var x = equation[0], y = equation[1];
        val2Id.has(x) || val2Id.set(x, idCount++);
        val2Id.has(y) || val2Id.set(y, idCount++);
    }
    for (var i = 0; i < N; i++) {
        var _a = equations[i], x = _a[0], y = _a[1];
        var value = values[i];
        ufww.union(val2Id.get(x), val2Id.get(y), value);
    }
    var result = [];
    for (var _b = 0, queries_1 = queries; _b < queries_1.length; _b++) {
        var query = queries_1[_b];
        var x = query[0], y = query[1];
        result.push(ufww.isConnected(val2Id.get(x), val2Id.get(y)));
    }
    return result;
}
;
var UnionFindWithWeight = /** @class */ (function () {
    function UnionFindWithWeight(n) {
        this.parent = Array(n).fill(-1);
        this.weight = Array(n).fill(1);
    }
    UnionFindWithWeight.prototype.findRoot = function (x) {
        if (this.parent[x] === -1)
            return x;
        var origin = this.parent[x];
        this.parent[x] = this.findRoot(this.parent[x]);
        this.weight[x] *= this.weight[origin];
        return this.parent[x];
    };
    UnionFindWithWeight.prototype.union = function (x, y, value) {
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        this.weight[xRoot] = (this.weight[y] * value) / this.weight[x];
        return true;
    };
    UnionFindWithWeight.prototype.isConnected = function (x, y) {
        if (x === undefined || y === undefined)
            return -1.0;
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot) {
            return this.weight[x] / this.weight[y];
        }
        return -1.0;
    };
    return UnionFindWithWeight;
}());
console.log(calcEquation([
    ["x1", "x2"], ["x2", "x3"],
    ["x3", "x4"], ["x4", "x5"]
], [3.0, 4.0, 5.0, 6.0], [
    ["x1", "x5"], ["x5", "x2"], ["x2", "x4"], ["x2", "x2"], ["x2", "x9"], ["x9", "x9"]
]));
console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));
