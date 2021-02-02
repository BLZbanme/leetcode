"use strict";
function findItinerary(tickets) {
    var map = new Map();
    tickets.forEach(function (e) {
        if (map.has(e[0])) {
            var arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]]);
        }
    });
    var result = [];
    function dfs(str) {
        while (map.get(str) && map.get(str).length) {
            dfs(map.get(str).shift());
        }
        result.unshift(str);
    }
    dfs('JFK');
    return result;
}
;
