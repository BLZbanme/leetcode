"use strict";
function numJewelsInStones(J, S) {
    var set = new Set(J.split(''));
    return S.split('').filter(function (e) { return set.has(e); }).length;
}
;
