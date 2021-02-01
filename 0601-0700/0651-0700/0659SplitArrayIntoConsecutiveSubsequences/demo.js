"use strict";
function isPossible(nums) {
    var countMap = new Map();
    var endMap = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var x = nums_1[_i];
        countMap.set(x, (countMap.get(x) || 0) + 1);
    }
    for (var _a = 0, nums_2 = nums; _a < nums_2.length; _a++) {
        var x = nums_2[_a];
        var count_1 = countMap.get(x) || 0;
        if (count_1 > 0) {
            var prevEndCount = endMap.get(x - 1) || 0;
            if (prevEndCount > 0) {
                countMap.set(x, count_1 - 1);
                endMap.set(x - 1, prevEndCount - 1);
                endMap.set(x, (endMap.get(x) || 0) + 1);
            }
            else {
                var count1 = countMap.get(x + 1) || 0;
                var count2 = countMap.get(x + 2) || 0;
                if (count1 > 0 && count2 > 0) {
                    countMap.set(x, count_1 - 1);
                    countMap.set(x + 1, count1 - 1);
                    countMap.set(x + 2, count2 - 1);
                    endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
                }
                else {
                    return false;
                }
            }
        }
    }
    return true;
}
;
console.log(isPossible([1, 2, 3, 3, 4, 5])); //true
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5])); //true
console.log(isPossible([1, 2, 3, 4, 4, 5])); //false
