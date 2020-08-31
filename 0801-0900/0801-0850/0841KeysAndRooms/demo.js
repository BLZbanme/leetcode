function canVisitAllRooms(rooms) {
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
console.log(canVisitAllRooms([[1], [2], [3], []])); // true;
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // true;
