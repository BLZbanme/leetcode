function findRedundantDirectedConnection(edges) {
    var N = edges.length;
    var uf = new UnionFind(N + 1);
    var parent = Array(N + 1);
    for (var i = 1; i <= N; i++) {
        parent[i] = i;
    }
    var conflict = -1;
    var cycle = -1;
    for (var i = 0; i < N; i++) {
        var _a = edges[i], node1 = _a[0], node2 = _a[1];
        if (parent[node2] != node2) {
            conflict = i;
        }
        else {
            parent[node2] = node1;
            if (uf.find(node1) == uf.find(node2)) {
                cycle = i;
            }
            else {
                uf.union(node1, node2);
            }
        }
    }
    if (conflict < 0) {
        var redundant = [edges[cycle][0], edges[cycle][1]];
        return redundant;
    }
    else {
        var conflictEdge = edges[conflict];
        if (cycle >= 0) {
            var redundant = [parent[conflictEdge[1]], conflictEdge[1]];
            return redundant;
        }
        else {
            var redundant = [conflictEdge[0], conflictEdge[1]];
            return redundant;
        }
    }
}
;
var UnionFind = /** @class */ (function () {
    function UnionFind(n) {
        this.ancestor = Array(n);
        for (var i = 0; i < n; i++) {
            this.ancestor[i] = i;
        }
    }
    UnionFind.prototype.union = function (index1, index2) {
        this.ancestor[this.find(index1)] = this.find(index2);
    };
    UnionFind.prototype.find = function (index) {
        if (this.ancestor[index] != index) {
            this.ancestor[index] = this.find(this.ancestor[index]);
        }
        return this.ancestor[index];
    };
    return UnionFind;
}());
console.log(findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]));
