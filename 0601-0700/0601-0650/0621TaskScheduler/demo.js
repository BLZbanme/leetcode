"use strict";
function leastInterval(tasks, n) {
    var map = new Map();
    var max = 0;
    var maxCount = 0;
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        var tmp = (map.get(task) || 0) + 1;
        map.set(task, tmp);
        if (tmp > max) {
            max = tmp;
            maxCount = 0;
        }
        if (tmp === max) {
            maxCount++;
        }
    }
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length);
}
;
