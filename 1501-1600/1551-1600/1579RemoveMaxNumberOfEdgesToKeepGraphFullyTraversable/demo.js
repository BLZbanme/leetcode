"use strict";
function maxNumEdgesToRemove(n, edges) {
    var count = 0;
    var ufA = new UnionFind1579(n + 1);
    var ufB = new UnionFind1579(n + 1);
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        if (edge[0] === 3) {
            if (ufA.union(edge[1], edge[2])) {
                ufB.union(edge[1], edge[2]);
            }
            else {
                count++;
            }
        }
    }
    for (var _a = 0, edges_2 = edges; _a < edges_2.length; _a++) {
        var edge = edges_2[_a];
        if (edge[0] === 1) {
            if (!ufA.union(edge[1], edge[2])) {
                count++;
            }
        }
    }
    for (var _b = 0, edges_3 = edges; _b < edges_3.length; _b++) {
        var edge = edges_3[_b];
        if (edge[0] === 2) {
            if (!ufB.union(edge[1], edge[2])) {
                count++;
            }
        }
    }
    return (!ufA.pointCount && !ufB.pointCount) ? count : -1;
}
;
var UnionFind1579 = /** @class */ (function () {
    function UnionFind1579(n) {
        this.parent = Array(n).fill(-1);
        this.pointCount = n - 2;
    }
    UnionFind1579.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind1579.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot) {
            return false;
        }
        this.pointCount--;
        this.parent[xRoot] = yRoot;
        return true;
    };
    return UnionFind1579;
}());
maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]]);
