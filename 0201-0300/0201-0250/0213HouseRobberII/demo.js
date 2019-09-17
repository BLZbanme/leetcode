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
    if(len == 2){
        return Math.max(...nums);
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let res1 = pre1;
    for(let i = 2; i < len - 1; i++){
        res1 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res1;
    }
    pre2 = nums[1];
    pre1 = Math.max(nums[1], nums[2]);
    let res2 = pre1;
    for(let i = 3; i < len; i++){
        res2 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res2;
    }
    return Math.max(res1, res2);
};


var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    if(len == 2){
        return Math.max(...nums);
    }
    return Math.max(dp(nums, 2, len - 1), dp(nums, 3, len));
};

function dp(nums, index, end) {
    let pre2 = nums[index - 2];
    let pre1 = Math.max(nums[index - 2], nums[index - 1]);
    let res = pre1;
    for(let i = index; i < end; i++){
        res = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}

console.log(rob([1]));
console.log(rob([2,3]));
console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));