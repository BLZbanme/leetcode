/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    let max = dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        dpArr[i] = nums[i] + (dpArr[i - 1] > 0 ? dpArr[i - 1] : 0);
        max = Math.max(max, dpArr[i]);
    }
    return max;
};

var maxSubArray = function(nums) {
    let max = sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(sum < 0){
            sum = nums[i];
        }else{
            sum += nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}

var maxSubArray = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        dpArr[i] = nums[i] + (dpArr[i - 1] > 0 ? dpArr[i - 1] : 0);
    }
    return Math.max(...dpArr);
};

console.log(maxSubArray([-2,1]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));