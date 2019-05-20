#### 问题描述

​	Given an array `nums` of *n* integers and an integer `target`, are there elements *a*, *b*, *c*, and *d* in `nums` such that *a* + *b* + *c* + *d* = `target`? Find all unique quadruplets in the array which gives the sum of `target`.

**Note:**

​	The solution set must not contain duplicate quadruplets.

**Example:**

```
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

##### 我的解决方法	

##### 2019.05.20

##### 	我的思路：

​	把4Sum降维3Sum(如题015ThreeSum)，再降维TwoSum(如题001TwoSum)，再采用两点法(如题011ContainerWithMostWater)。时间复杂度O(n<sup>3</sup>)

##### 注意：

​	这种思路优化的地方就是如何去重和优化迭代。

```javascript
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
```

