/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {

    nums.sort((a, b) => a - b);
    let zeroNum = 0;
    let tmp = null;

    for (let i = 0; i < 5; i++) {
        if (nums[i] === 0) {
            zeroNum++;
        }
        else {
            if (!tmp) {
                tmp = nums[i];
            }
            else {
                if (nums[i] <= tmp) {
                    return false;
                }
                if (nums[i] === tmp + 1) {
                    tmp = tmp + 1;
                    continue;
                }
                else {
                    let diff = nums[i] - tmp;
                    if (diff > zeroNum + 1) {
                        return false;
                    }
                    tmp += diff;
                    zeroNum -= diff - 1;

                }
            }
        }
    }
    return true;
};

var isStraight = function(nums) {

    nums.sort((a, b) => a - b);
    let min = Infinity;
    let max = -Infinity;


    for (let i = 0; i < 5; i++) {
        if (!nums[i]) {
            continue;
        }
        if (i < 4 && nums[i + 1] === nums[i]) {
            return false;
        }
        min = Math.min(nums[i], min);
        max = Math.max(nums[i], max);
    }
    return max - min <= 4;
};



console.log(isStraight([9,0,6,0,10])) //true

console.log(isStraight([1, 2, 3, 4, 5])) //true
console.log(isStraight([0,0,1,2,5])) //true

console.log(isStraight([0,0,1,2,6])) //false