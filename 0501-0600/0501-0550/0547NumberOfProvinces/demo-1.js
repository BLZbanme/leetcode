"use strict";
function findCircleNum(isConnected) {
    var N = isConnected.length;
    var UF = new UnionFind547(N);
    for (var i = 0; i < N; i++) {
        for (var j = i + 1; j < N; j++) {
            isConnected[i][j] && UF.union(i, j);
        }
    }
    return UF.setCount;
}
var UnionFind547 = /** @class */ (function () {
    function UnionFind547(n) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }
    UnionFind547.prototype.findRoot = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.findRoot(this.parent[x]);
        return this.parent[x];
    };
    UnionFind547.prototype.union = function (x, y) {
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot)
            return false;
        this.setCount--;
        this.parent[xRoot] = yRoot;
        return true;
    };
    return UnionFind547;
}());
