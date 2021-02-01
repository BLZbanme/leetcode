"use strict";
function checkStraightLine(coordinates) {
    var N = coordinates.length;
    if (N <= 2)
        return true;
    coordinates.sort(function (a, b) {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });
    var xDiff = coordinates[1][0] - coordinates[0][0];
    var yDiff = coordinates[1][1] - coordinates[0][1];
    for (var i = 2; i < N; i++) {
        if ((!yDiff && coordinates[i][1] - coordinates[i - 1][1] === 0)
            || ((coordinates[i][0] - coordinates[i - 1][0]) / (coordinates[i][1] - coordinates[i - 1][1]) === xDiff / yDiff)) {
            continue;
        }
        return false;
    }
    return true;
}
;
