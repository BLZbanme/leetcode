"use strict";
function swimInWater(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var edges = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var id = i * n + j;
            if (i) {
                edges.push([Math.max(grid[i][j], grid[i - 1][j]), id, id - n]);
            }
            if (j) {
                edges.push([Math.max(grid[i][j], grid[i][j - 1]), id, id - 1]);
            }
        }
    }
    edges.sort(function (a, b) { return a[0] - b[0]; });
    var uf = new UnionFind0778(m * n);
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        var diff = edge[0], x = edge[1], y = edge[2];
        uf.union(x, y);
        if (uf.isConnected(0, m * n - 1)) {
            return diff;
        }
    }
    return 0;
}
;
var UnionFind0778 = /** @class */ (function () {
    function UnionFind0778(n) {
        this.parent = Array(n).fill(-1);
    }
    UnionFind0778.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind0778.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        return true;
    };
    UnionFind0778.prototype.isConnected = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        return xRoot === yRoot;
    };
    return UnionFind0778;
}());
