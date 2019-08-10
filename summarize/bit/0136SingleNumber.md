# 136. Single Number

Given a **non-empty** array of integers, every element appears *twice* except for one. Find that single one.

**Note:**

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**

```
Input: [2,2,1]
Output: 1
```

**Example 2:**

```
Input: [4,1,2,1,2]
Output: 4
```

##### 2019.08.10

##### 我的方法：

​		因为很久以前做过了，所以知道是用位运算。

````javascript
var singleNumber = function(nums) {
    let result = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        result ^= nums[i]; 
    }
    return result;
};
````

​		但其实我这样写的并不是深入理解位运算了，下面这样写体现了知道```0 ^ n = n```

```javascript
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        result ^= nums[i]; 
    }
    return result;
};
```
