function makeConnected(n, connections) {
    var ds = new DisjointedSet(n);
    for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
        var conn = connections_1[_i];
        var x = conn[0], y = conn[1];
        debugger
        ds.union(x, y);
    }
    return ds.size - 1;
}
var DisjointedSet = /** @class */ (function () {
    function DisjointedSet(n) {
        this.parent = Array(n).fill(-1);
        this.size = n;
    }
    DisjointedSet.prototype.findRoot = function (x) {
        if (this.parent[x] === -1)
            return x;
        return this.findRoot(this.parent[x]);
    };
    DisjointedSet.prototype.union = function (x, y) {
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        this.size--;
        return true;
    };
    return DisjointedSet;
}());
console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]]));
