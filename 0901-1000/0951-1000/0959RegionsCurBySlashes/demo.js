"use strict";
function regionsBySlashes(grid) {
    var n = grid.length;
    var uf = new UnionFind00959(n * n * 4);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var idx = i * n + j;
            if (i < n - 1) {
                var bottom = idx + n;
                uf.union(idx * 4 + 2, bottom * 4);
            }
            if (j < n - 1) {
                var right = idx + 1;
                uf.union(idx * 4 + 1, right * 4 + 3);
            }
            if (grid[i][j] === '/') {
                uf.union(idx * 4, idx * 4 + 3);
                uf.union(idx * 4 + 1, idx * 4 + 2);
            }
            else if (grid[i][j] == '\\') {
                uf.union(idx * 4, idx * 4 + 1);
                uf.union(idx * 4 + 2, idx * 4 + 3);
            }
            else {
                uf.union(idx * 4, idx * 4 + 1);
                uf.union(idx * 4 + 1, idx * 4 + 2);
                uf.union(idx * 4 + 2, idx * 4 + 3);
            }
        }
    }
    return uf.setCount;
}
;
var UnionFind00959 = /** @class */ (function () {
    function UnionFind00959(n) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }
    UnionFind00959.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind00959.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        this.setCount--;
        return true;
    };
    return UnionFind00959;
}());
