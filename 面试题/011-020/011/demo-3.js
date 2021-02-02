"use strict";
function minArray(numbers) {
    var lo = 0;
    var hi = numbers.length - 1;
    while (lo < hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (numbers[mid] < numbers[hi]) {
            hi = mid;
        }
        else if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        }
        else {
            hi--;
        }
    }
    return numbers[lo];
}
;
