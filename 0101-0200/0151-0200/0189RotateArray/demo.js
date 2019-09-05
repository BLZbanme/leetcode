/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (k-- > 0) {
        nums.unshift(nums.pop());
    }
    return;
};

var rotate = function(nums, k) {
    const N = nums.length;
    k %= N;
    reverse(nums, 0, N - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, N - 1);
    return nums;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start++], arr[end--]] = [arr[end], arr[start]];
    }
}

var rotate = function(nums, k) {
    const N = nums.length;
    k %= N;
    let copy = Array.from(nums);
    for (let i = 0; i < N; i++) {
        nums[i] = copy[(N - k + i) % N];
    }
    return;
}

console.log(rotate([1,2,3,4,5,6,7], 3))