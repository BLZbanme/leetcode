function minimumEffortPath(heights) {
    var m = heights.length;
    var n = heights[0].length;
    var edges = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var idx = i * n + j;
            if (i) {
                edges.push([Math.abs(heights[i][j] - heights[i - 1][j]), idx, idx - n]);
            }
            if (j) {
                edges.push([Math.abs(heights[i][j] - heights[i][j - 1]), idx, idx - 1]);
            }
        }
    }
    edges.sort(function (a, b) { return a[0] - b[0]; });
    var uf = new UnionFind1631(m * n);
    var count = 0;
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        var diff = edge[0], x = edge[1], y = edge[2];
        uf.union(x, y);
        if (uf.isConnected(0, m * n - 1)) {
            count = diff;
            break;
        }
    }
    return count;
}
;
var UnionFind1631 = /** @class */ (function () {
    function UnionFind1631(n) {
        this.parent = Array(n).fill(-1);
    }
    UnionFind1631.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind1631.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        return true;
    };
    UnionFind1631.prototype.isConnected = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        return xRoot === yRoot;
    };
    return UnionFind1631;
}());
console.log(minimumEffortPath([[1, 10, 6, 7, 9, 10, 4, 9]])); //9
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]])); //2
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]])); //1
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]])); //0
