"use strict";
function findCircleNum(isConnected) {
    var provinces = isConnected.length;
    var visited = new Set();
    var circles = 0;
    var dfs = function (i) {
        for (var j = 0; j < provinces; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    };
    for (var i = 0; i < provinces; i++) {
        if (!visited.has(i)) {
            dfs(i);
            circles++;
        }
    }
    return circles;
}
;
