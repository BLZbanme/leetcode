/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        if(dpArr[i - 1] < i){
            return false;
        }
        dpArr[i] = Math.max(dpArr[i - 1], nums[i] + i);
    }
    return dpArr[len - 1] >= len - 1;
};

var canJump = function(nums) {
    let len = nums.length;
    let distance = nums[0];
    for(let i = 1; i < len; i++){
        if(distance < i){
            return false;
        }
        distance = Math.max(distance, nums[i] + i);
    }
    return distance >= len - 1;
};


console.log(canJump([0,1]));
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([1]));
console.log(canJump([0]));
console.log(canJump([1, 0]));
console.log(canJump([1, 1]));