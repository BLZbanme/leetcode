"use strict";
function reversePairs(nums) {
    var count = 0;
    function helper(lo, hi) {
        if (lo >= hi) {
            return;
        }
        var mid = lo + Math.floor((hi - lo) >> 1);
        helper(lo, mid);
        helper(mid + 1, hi);
        var i = lo;
        var j = mid + 1;
        while (i <= mid && j <= hi) {
            if (nums[i] > 2 * nums[j]) {
                count += mid - i + 1;
                j++;
            }
            else {
                i++;
            }
        }
        i = lo;
        j = mid + 1;
        var temp = Array(hi - lo + 1);
        for (var k = 0; k <= hi - lo; k++) {
            if (i > mid) {
                temp[k] = nums[j++];
            }
            else if (j > hi) {
                temp[k] = nums[i++];
            }
            else if (nums[i] < nums[j]) {
                temp[k] = nums[i++];
            }
            else {
                temp[k] = nums[j++];
            }
        }
        for (var i_1 = lo, k = 0; i_1 <= hi; i_1++, k++) {
            nums[i_1] = temp[k];
        }
        return;
    }
    helper(0, nums.length - 1);
    return count;
}
;
console.log(reversePairs([1, 3, 2, 3, 1])); //2
console.log(reversePairs([2, 4, 3, 5, 1])); //3
console.log(reversePairs([233, 2000000001, 234, 2000000006, 235, 2000000003, 236, 2000000007, 237, 2000000002, 2000000005, 233, 233, 233, 233, 233, 2000000004])); //40
