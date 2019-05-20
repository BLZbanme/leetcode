/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    let length = nums.length;
    for(let i = 0; i < length; i++){
        if(i == 0 || nums[i] != nums[i - 1]){
            for(let j = i + 1; j < length; j++){
                if(j == i + 1 || nums[j] != nums[j - 1]){
                    let k = j + 1;
                    let m = length - 1;
                    while(k < m){
                        if(nums[i] + nums[j] + nums[k] + nums[m] > target){
                            m--;
                        }else if(nums[i] + nums[j] + nums[k] + nums[m] < target){
                            k++;
                        }else{
                            result.push([nums[i], nums[j], nums[k], nums[m]]);
                            k++;
                            m--;
                            while(k < m && nums[k] == nums[k - 1]){
                                k++;
                            }
                            while(k < m && nums[m] == nums[m + 1]){
                                m--;
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
};



console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9))
console.log(fourSum([-1,-5,-5,-3,2,5,0,4], -7))
console.log(fourSum([0, 0, 0, 0], 0))
console.log(fourSum([1,0,-1,0,-2,2], 0))
