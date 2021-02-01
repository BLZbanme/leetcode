"use strict";
function numEquivDominoPairs1(dominoes) {
    var n = dominoes.length;
    var tmpArr = [];
    var uf = new UnionFind1128(n);
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1])
                || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
                tmpArr.push([i, j]);
            }
        }
    }
    for (var _i = 0, tmpArr_1 = tmpArr; _i < tmpArr_1.length; _i++) {
        var arr = tmpArr_1[_i];
        var x = arr[0], y = arr[1];
        uf.union(x, y);
    }
    return uf.setNum();
}
;
var UnionFind1128 = /** @class */ (function () {
    function UnionFind1128(n) {
        this.num = 0;
        this.parent = Array(n).fill(-1);
        this.size = Array(n).fill(1);
    }
    UnionFind1128.prototype.find = function (x) {
        if (this.parent[x] === -1)
            return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    };
    UnionFind1128.prototype.union = function (x, y) {
        var xRoot = this.find(x);
        var yRoot = this.find(y);
        if (xRoot === yRoot)
            return false;
        this.parent[xRoot] = yRoot;
        this.size[yRoot] += this.size[xRoot];
        return true;
    };
    UnionFind1128.prototype.setNum = function () {
        var _this = this;
        var num = 0;
        this.parent.forEach(function (e, index) {
            if (e === -1) {
                num += Cm2(_this.size[index]);
            }
        });
        return num;
    };
    return UnionFind1128;
}());
function Cm2(m) {
    return m * (m - 1) / 2;
}
function numEquivDominoPairs(dominoes) {
    var num = Array(100).fill(0);
    var ret = 0;
    for (var _i = 0, dominoes_1 = dominoes; _i < dominoes_1.length; _i++) {
        var domino = dominoes_1[_i];
        var val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        ret += num[val];
        num[val]++;
    }
    return ret;
}
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])); // 1
