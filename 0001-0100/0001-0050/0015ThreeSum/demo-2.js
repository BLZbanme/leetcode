/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const N = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        else {
            let tmp = nums[i];
            let lo = i + 1;
            let hi = N - 1;
            while (lo < hi) {
                let sum = nums[lo] + nums[hi] + tmp;
                if (sum > 0) {
                    hi--;
                }
                else if (sum < 0) {
                    lo++;
                }
                else {
                    result.push([tmp, nums[lo], nums[hi]]);
                    
                    while (lo < hi && nums[lo] == nums[lo + 1]) {
                        lo++;
                    }

                    while (lo < hi && nums[hi] == nums[hi - 1]) {
                        hi--;
                    }

                    lo++;
                    hi--;
                }
            }
        }
    }

    return result;
};

console.log(threeSum([-2,0,1,1,2])) //[[-2,0,2],[-2,1,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
