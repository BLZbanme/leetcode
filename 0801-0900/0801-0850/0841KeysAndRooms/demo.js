"use strict";
function canVisitAllRooms11(rooms) {
    var set = new Set([0]);
    var N = rooms.length;
    var dfs = function (index) {
        if (set.size == N) {
            return;
        }
        var now = rooms[index];
        if (!now.length) {
            return;
        }
        while (now.length) {
            var tmp = now.shift();
            set.add(tmp);
            dfs(tmp);
        }
    };
    dfs(0);
    return set.size === N;
}
;
function canVisitAllRooms(rooms) {
    var N = rooms.length;
    var visited = Array(N).fill(false);
    var num = 0;
    var dfs = function (index) {
        visited[index] = true;
        num++;
        for (var _i = 0, _a = rooms[index]; _i < _a.length; _i++) {
            var i = _a[_i];
            if (!visited[i]) {
                dfs(i);
            }
        }
    };
    dfs(0);
    return num === N;
}
;
console.log(canVisitAllRooms([[1], [2], [3], []])); // true;
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // true;
