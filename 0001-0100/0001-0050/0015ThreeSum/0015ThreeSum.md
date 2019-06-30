#### 问题描述

​	Given an array `nums` of *n* integers, are there elements *a*, *b*, *c* in `nums` such that *a* + *b* + *c* = 0? Find all unique triplets in the array which gives the sum of zero.

**Note:**

The solution set must not contain duplicate triplets.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

##### 我的解决方法	

##### 2019.05.19

##### 	我的思路：

​	遍历数组，把遍历的起点的相反数，作为twoSum的和值，把threeSum问题转成TwoSum问题，如题目(001TwoSum)的思路。时间复杂度为O(n<sup>2</sup>)，但是由于需要去重，增加了两个set，开销很大。

##### 	还需注意，这个代码有问题nums.sort() 应该是 nums.sort((a, b) => a - b)，因为js默认是按ascii码排序的，nums.sort()其实并没有排负数

```javascript
let twoSum = function(result, arr, target){
    let map = new Map();
    let set = new Set();
    let tmp;
    for(let i = 0; i < arr.length; i++){
        if(!set.has(arr[i])){
            tmp = target - arr[i];
            if(map.get(tmp) != undefined){
                result.push([0 - target, tmp, arr[i]]);
                set.add(tmp);
                set.add(arr[i]);
            }
        }
        map.set(arr[i], i);
    }
    return result;
}

var threeSum = function(nums) {
    nums.sort();
    let set = new Set();
    let result = [];
    while(nums.length >= 3){
        let tmp = nums.shift();
        if(!set.has(tmp)){
            set.add(tmp);
            let target = 0 - tmp;
            twoSum(result, nums, target);
        } 
    }
    return result;
};
```

##### 	改进1：

​	利用循环条件来去重，因为相同的值，按第一次出现时候算出来的结果已经包含了剩余相同值的存在。所以相同的值应该只算第一次出现时得到的结果。

#### 注意：

##### 	这里一开始使用的是let map = {}，发现还是超时了，应该是使用obj来当map，属性名额外进行了一次toString()操作，开销很大

```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if ((i == 0 || (i > 0 && nums[i] != nums[i - 1])) && nums[i] <= 0) {
            let tmp = nums[i];
            let target = 0 - tmp;
            let map = new Map();
            for(let j = i + 1; j < nums.length; j++){
                if(map.get(target - nums[j]) == undefined){
                    map.set(nums[j], 1);
                }else{
                    result.push([tmp, target - nums[j], nums[j]]);
                    while(j < nums.length - 1 && nums[j] == nums[j + 1]) {
                        j++;
                    }
                }
            }
        }
    }
    return result;
};
```

##### 最佳思路：

​	排序后使用两点法，如题目（011ContainerWithMostWater）中的思路

```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if ((i == 0 || (i > 0 && nums[i] != nums[i - 1])) && nums[i] <= 0) {
            let tmp = nums[i];
            let target = 0 - tmp;
            let j = i + 1;
            let k = nums.length - 1;
            while(j < k){
                let sum = nums[j] + nums[k];
                if(sum > target){
                    k--;
                    continue;
                }else if(sum < target){
                    j++;
                    continue;
                }else{
                    result.push([tmp, nums[j], nums[k]]);
                    while(j < k && nums[j + 1] == nums[j]){
                        j++;
                    }
                    while(k > j && nums[k - 1] == nums[k]){
                        k--;
                    }
                    j++;
                    k--;
                }
            }
        }
    }
    return result;
}
```

