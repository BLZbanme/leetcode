"use strict";
function findMinArrowShots1(points) {
    if (!points || !points.length) {
        return 0;
    }
    points.sort(function (a, b) {
        return a[0] - b[0] || a[1] - b[1];
    });
    var left = points[0][0];
    var right = points[0][1];
    var count = 0;
    for (var i = 1; i < points.length; i++) {
        if (points[i][0] <= right && points[i][1] >= left) {
            left = Math.max(left, points[i][0]);
            right = Math.min(right, points[i][1]);
        }
        else {
            count++;
            left = points[i][0];
            right = points[i][1];
        }
    }
    return count + 1;
}
;
function findMinArrowShots(points) {
    if (!points.length)
        return 0;
    points.sort(function (a, b) { return a[1] - b[1]; });
    var pos = points[0][1];
    var count = 1;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var balloon = points_1[_i];
        if (balloon[0] > pos) {
            pos = balloon[1];
            count++;
        }
    }
    return count;
}
