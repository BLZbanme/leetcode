"use strict";
function minCostClimbingStairs(cost) {
    var p = cost[0];
    var q = cost[1];
    for (var i = 2; i < cost.length; i++) {
        var tmp = q;
        q = Math.min(p, q) + cost[i];
        p = tmp;
    }
    return Math.min(p, q);
}
;
console.log(minCostClimbingStairs([10, 15, 20])); //15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); //6
