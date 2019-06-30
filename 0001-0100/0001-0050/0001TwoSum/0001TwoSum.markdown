#### 问题描述

​	Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

##### 我的解决方法	

##### 2019.05.19

思路是暴力遍历，时间复杂度O(n<sup>2</sup>)

```javascript
var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) == target){
                return [i, j];
            }
        }
    }
};
```

##### 别人的思路

​	方法1：使用map，我写的很蠢，因为没写好如何解决结果等于两个相同值的和的情况

```javascript
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) == undefined){
            map.set(nums[i], i);
        }else if(!isNaN(map.get(nums[i]))){
            map.set(nums[i], [map.get(nums[i]), i]);
        }
        if(map.get(target - nums[i]) != undefined){
            if(target == 2 * nums[i]){
                if(isNaN(map.get(target - nums[i]))){
                    return [map.get(target - nums[i])[0], map.get(target - nums[i])[1]];
                }else{
                    continue
                }
            }
            return [map.get(target - nums[i]), map.get(nums[i])];
        }
    }
}
```

​	方法2：两遍循环的hashmap,第一次循环可以把重复值赋成最后一次出现的位置，这样可以解决重复值的问题

```javascript
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map.get(tmp) != undefined && map.get(tmp) != i){
            return [i, map.get(tmp)]
        }
    }
}
```

​	方法3：一次循环的hashmap,先判断差值再赋值的方式也能避免重复值情况

```javascript
var twoSum = function(nums, target){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map.get(tmp) != undefined){
            return [map.get(tmp), i]
        }
        map.set(nums[i], i);
    }
}
```

​	方法3（另一种写法）：

```javascript
var twoSum = function(nums, target){
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let tmp = target - nums[i];
        if(map[tmp] != undefined){
            return [map[tmp], i]
        }
        map[nums[i]] = i;
    }
}
```

