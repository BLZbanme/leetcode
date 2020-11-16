function allCellsDistOrder(R, C, r0, c0) {
    var map = new Map();
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            var dis = Math.abs(i - r0) + Math.abs(j - c0);
            var tmp = map.get(dis);
            if (tmp) {
                tmp.push([i, j]);
            }
            else {
                map.set(dis, [[i, j]]);
            }
        }
    }
    var keys = map.keys();
    var keysArr = Array.from(keys).sort(function (a, b) { return a - b; });
    var result = [];
    for (var _i = 0, keysArr_1 = keysArr; _i < keysArr_1.length; _i++) {
        var key = keysArr_1[_i];
        var now = map.get(key);
        for (var _a = 0, now_1 = now; _a < now_1.length; _a++) {
            var kv = now_1[_a];
            result.push(kv);
        }
    }
    return result;
}
;
console.log(allCellsDistOrder(1, 2, 0, 0)); //[[0,0],[0,1]]
console.log(allCellsDistOrder(2, 2, 0, 1)); //[[0,1],[0,0],[1,1],[1,0]]
console.log(allCellsDistOrder(2, 3, 1, 2)); //[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
