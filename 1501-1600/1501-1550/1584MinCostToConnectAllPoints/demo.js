"use strict";
function minCostConnectPoints(points) {
    var dist = function (x, y) {
        return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
    };
    var N = points.length;
    var dsu = new DisjointedSet1(N);
    var edges = [];
    for (var i = 0; i < N; i++) {
        for (var j = i + 1; j < N; j++) {
            edges.push([dist(i, j), i, j]);
        }
    }
    edges.sort(function (a, b) { return a[0] - b[0]; });
    var ret = 0;
    var num = 1;
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var _a = edges_1[_i], length_1 = _a[0], x = _a[1], y = _a[2];
        if (dsu.union(x, y)) {
            ret += length_1;
            num++;
            if (num === N)
                break;
        }
    }
    return ret;
}
;
var DisjointedSet1 = /** @class */ (function () {
    function DisjointedSet1(n) {
        this.parent = Array(n).fill(-1);
        this.rank = Array(n).fill(0);
    }
    DisjointedSet1.prototype.findRoot = function (x) {
        if (this.parent[x] === -1)
            return x;
        return this.findRoot(this.parent[x]);
    };
    DisjointedSet1.prototype.union = function (x, y) {
        var xRoot = this.findRoot(x);
        var yRoot = this.findRoot(y);
        if (xRoot === yRoot)
            return false;
        if (this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        }
        else if (this.rank[xRoot] > this.rank[yRoot]) {
            this.parent[yRoot] = xRoot;
        }
        else {
            this.parent[xRoot] = yRoot;
            this.rank[yRoot]++;
        }
        return true;
    };
    return DisjointedSet1;
}());
