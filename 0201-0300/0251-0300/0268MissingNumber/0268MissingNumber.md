# 268. Missing Number

Given an array containing *n* distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

**Example 1:**

```
Input: [3,0,1]
Output: 2
```

**Example 2:**

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

**Note**:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

##### 2019.10.12

##### 我的思路：

 排序找到第一个和下标不符合的数

```javascript
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};
```

 数学的写法

```javascript
var missingNumber = function(nums) {
    const N = nums.length;
    return (1 + N) * N / 2 - nums.reduce((total, num) => total + num);
};
```

##### 别人的方法：

​		跟我的思路相同，利用```a ^ b ^ b = a```更加牛逼！

```javascript
var missingNumber = function(nums) {
    let xor = 0;
    let i = 0;
    for (; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ i;
}
```
