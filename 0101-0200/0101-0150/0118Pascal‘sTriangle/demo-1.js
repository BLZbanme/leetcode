"use strict";
function generate(numRows) {
    if (!numRows) {
        return [];
    }
    var result = [[1]];
    for (var i = 1; i < numRows; i++) {
        var now = [1];
        for (var j = 1; j < result[i - 1].length; j++) {
            now.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        now.push(1);
        result.push(now);
    }
    return result;
}
;
