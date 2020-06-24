# 16.3Sum Closest

Given an array `nums` of *n* integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers. You may assume that each input would have exactly one solution.

**Example 1:**

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

**Constraints:**

- `3 <= nums.length <= 10^3`
- `-10^3 <= nums[i] <= 10^3`
- `-10^4 <= target <= 10^4`



##### 我的解决方法	

##### 2019.05.20

##### 	我的思路：

​	使用两点法，因为总要求绝对值判断距离大小，我就干脆设了表示一个比target小的变量，一个比target大的变量。时间复杂度O(n<sup>2</sup>)

```javascript
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
```



##### 2020.06.24 redo

```javascript
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            let tmp = nums[i] + nums[lo] + nums[hi];
            if (tmp === target) {
                return target
            }
            else if (tmp < target) {
                lo++;
            }
            else {
                hi--;
            }
            if (Math.abs(tmp - target) < Math.abs(result - target)) {
                result = tmp;
            }
        }
    }

    return result;
};
```

