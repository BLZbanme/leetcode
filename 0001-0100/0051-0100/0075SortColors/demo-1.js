function sortColors(nums) {
    var _a, _b;
    var N = nums.length;
    var lo = 0;
    var hi = N - 1;
    var i = 0;
    while (i <= hi) {
        if (nums[i] == 0 && i != lo) {
            _a = [nums[i], nums[lo]], nums[lo] = _a[0], nums[i] = _a[1];
            lo++;
        }
        else if (nums[i] == 2) {
            _b = [nums[i], nums[hi]], nums[hi] = _b[0], nums[i] = _b[1];
            hi--;
        }
        else {
            i++;
        }
    }
    return nums;
}
;
console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([1, 2, 0]));
