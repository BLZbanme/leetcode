"use strict";
function validSquare(p1, p2, p3, p4) {
    var queue = [p1, p2, p3, p4];
    queue.sort(function (a, b) {
        if (a[0] != b[0]) {
            return a[0] - b[0];
        }
        else {
            return a[1] - b[1];
        }
    });
    return dist(queue[0], queue[1]) != 0 && dist(queue[0], queue[1]) == dist(queue[1], queue[3]) && dist(queue[3], queue[2]) == dist(queue[1], queue[3])
        && dist(queue[3], queue[2]) == dist(queue[2], queue[0]) && dist(queue[0], queue[3]) == dist(queue[1], queue[2]);
}
;
function dist(p1, p2) {
    return Math.pow((p2[1] - p1[1]), 2) + Math.pow((p2[0] - p1[0]), 2);
}
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));
