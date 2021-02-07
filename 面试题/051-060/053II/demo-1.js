function missingNumber(nums) {
    var lo = 0;
    var hi = nums.length - 1;
    while (lo <= hi) {
        debugger
        var mid = lo + ((hi - lo) >> 1);
        if (nums[mid] <= mid) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}
;
console.log(missingNumber([1])) //0
console.log(missingNumber([0])); //1
console.log(missingNumber([0, 1, 2])); //3
console.log(missingNumber([0, 1, 3])); //2
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])); //8
