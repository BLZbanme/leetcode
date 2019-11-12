/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const N = nums.length;
    let res = new Array(N);
    res[0] = 1;
    for (let i = 1; i < N; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = N - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]));