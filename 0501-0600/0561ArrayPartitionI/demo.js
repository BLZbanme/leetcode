/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).filter((v, index) => index % 2 == 0).reduce((a, b) => a + b);
};

var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < nums.length; i += 2){
        sum += nums[i];
    }
    return sum;
};

arrayPairSum([1,4,3,2]);

function getSum(a, b){
    return a + b;
}