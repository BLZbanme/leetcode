"use strict";
function uniqueOccurrences(arr) {
    var map = new Map();
    arr.forEach(function (e) {
        map.set(e, (map.get(e) || 0) + 1);
    });
    var set = new Set();
    for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
        var _a = map_1[_i], key = _a[0], value = _a[1];
        if (set.has(value)) {
            return false;
        }
        set.add(value);
    }
    return true;
}
;
