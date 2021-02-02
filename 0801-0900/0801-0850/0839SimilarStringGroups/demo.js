"use strict";
function numSimilarGroups(strs) {
    var n = strs.length;
    var uf = new UnionFind0839(n);
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (check(strs[i], strs[j])) {
                uf.union(i, j);
            }
        }
    }
    return uf.setCount;
}
;
var UnionFind0839 = /** @class */ (function () {
    function UnionFind0839(n) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }
    UnionFind0839.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind0839.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        this.setCount--;
        return true;
    };
    return UnionFind0839;
}());
function check(str1, str2) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i])
            count++;
    }
    if (count > 2)
        return false;
    return true;
}
