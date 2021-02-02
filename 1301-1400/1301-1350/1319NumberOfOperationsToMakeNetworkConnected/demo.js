"use strict";
function makeConnected1(n, connections) {
    if (connections.length < n - 1)
        return -1;
    var edges = new Map();
    for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
        var _a = connections_1[_i], x = _a[0], y = _a[1];
        edges.has(x) ? edges.get(x).push(y) : edges.set(x, [y]);
        edges.has(y) ? edges.get(y).push(x) : edges.set(y, [x]);
    }
    var used = Array(n).fill(0);
    var ans = 0;
    for (var i = 0; i < n; i++) {
        if (!used[i]) {
            dfsHelper(i, used, edges);
            ans++;
        }
    }
    return ans - 1;
}
;
var dfsHelper = function (u, used, edges) {
    used[u] = 1;
    if (edges.get(u)) {
        for (var _i = 0, _a = edges.get(u); _i < _a.length; _i++) {
            var v = _a[_i];
            if (!used[v]) {
                dfsHelper(v, used, edges);
            }
        }
    }
};
function makeConnected(n, connections) {
    if (connections.length < n - 1)
        return -1;
    var uf = new TheUnionFind(n);
    for (var _i = 0, connections_2 = connections; _i < connections_2.length; _i++) {
        var conn = connections_2[_i];
        uf.unite(conn[0], conn[1]);
    }
    return uf.setCount - 1;
}
var TheUnionFind = /** @class */ (function () {
    function TheUnionFind(n) {
        this.parent = Array(n).fill(0).map(function (e, index) { return index; });
        this.size = Array(n).fill(1);
        //当前连通分量数目
        this.setCount = n;
    }
    TheUnionFind.prototype.findset = function (x) {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x]);
        return this.parent[x];
    };
    TheUnionFind.prototype.unite = function (a, b) {
        var _a;
        var x = this.findset(a);
        var y = this.findset(b);
        if (x === y)
            return false;
        if (this.size[x] < this.size[y]) {
            _a = [y, x], x = _a[0], y = _a[1];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    };
    TheUnionFind.prototype.connected = function (a, b) {
        var x = this.findset(a);
        var y = this.findset(b);
        return x === y;
    };
    return TheUnionFind;
}());
