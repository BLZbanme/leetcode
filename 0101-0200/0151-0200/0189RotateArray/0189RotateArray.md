# 189. Rotate Array

Given an array, rotate the array to the right by *k* steps, where *k* is non-negative.

**Example 1:**

```
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

**Example 2:**

```
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

**Note:**

- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?

##### 2019.09.05

##### 	我的思路：

```javascript
var rotate = function(nums, k) {
    while (k-- > 0) {
        nums.unshift(nums.pop());
    }
    return;
};
```

##### 	别人的方法：

##### 方法1：

​		3次逆序

1. 整体逆序
2. 前k个元素逆序
3. 后k个元素逆序

```javascript
var rotate = function(nums, k) {
    const N = nums.length;
    k %= N;
    reverse(nums, 0, N - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, N - 1);
    return nums;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start++], arr[end--]] = [arr[end], arr[start]];
    }
}
```

##### 方法2：

```javascript
var rotate = function(nums, k) {
    const N = nums.length;
    k %= N;
    let copy = Array.from(nums);
    for (let i = 0; i < N; i++) {
        nums[i] = copy[(N - k + i) % N];
    }
    return;
}
```

