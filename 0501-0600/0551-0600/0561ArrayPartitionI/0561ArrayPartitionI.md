Given an array of **2n** integers, your task is to group these integers into **n** pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

**Example 1:**

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

**Note:**

1. **n** is a positive integer, which is in the range of [1, 10000].
2. All the integers in the array will be in the range of [-10000, 10000].

##### 2019.06.16

##### 	我的思路：

​	nums排序 然后把奇数位的和加起来

​	时间复杂度O(n)

​	第一种简写的写法是为了练下reduce()的用法= =

```javascript
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).filter((v, index) => index % 2 == 0).reduce((a, b) => a + b);
};
```

```javascript
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < nums.length; i += 2){
        sum += nums[i];
    }
    return sum;
};

```

##### 别人的写法：

​	和我大同小异
