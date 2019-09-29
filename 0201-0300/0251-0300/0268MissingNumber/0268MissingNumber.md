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

##### 2019.09.29

##### 	我的思路：

​		因为已知条件1~N的和是固定的，然后减去现有数组的值，得到的就是缺失值。

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

