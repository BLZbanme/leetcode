/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let pos = Number.MAX_SAFE_INTEGER;
    let nai = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k){
            if(nums[i] + nums[j] + nums[k] > target){
                pos = Math.min(pos, (nums[i] + nums[j] + nums[k--]));
            }else if(nums[i] + nums[j] + nums[k] < target){
                nai = Math.max(nai, (nums[i] + nums[j++] + nums[k]));
            }else{
                return target;
            }
        }
    }
    return (pos - target) > (target - nai) ? nai : pos; 
};


console.log(threeSumClosest([0,1,2], 3));
console.log(threeSumClosest([-1,2,1,-4], 1));