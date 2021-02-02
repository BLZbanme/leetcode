"use strict";
function minCostToMoveChips(position) {
    var oneCount = 0, twoCount = 0;
    position.forEach(function (e) { return e & 1 ? oneCount++ : twoCount++; });
    return Math.min(oneCount, twoCount);
}
;
