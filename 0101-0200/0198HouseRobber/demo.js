/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let opt = [];
    opt[0] = nums[0];
    opt[1] = Math.max(nums[0], nums[1]);
    for(var i = 2; i < len; i++){
        opt[i] = Math.max(opt[i - 2] + nums[i], opt[i - 1]);
    };
    return opt[len - 1];
};

var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let max = pre1;
    for(var i = 2; i < len; i++){
        max = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = max;
    };
    return max;
};

console.log(rob([0]));
console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([1]));
console.log(rob([1,2]));
