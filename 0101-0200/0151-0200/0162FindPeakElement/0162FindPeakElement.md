# 162. Find Peak Element

A peak element is an element that is greater than its neighbors.

Given an input array `nums`, where `nums[i] ≠ nums[i+1]`, find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that `nums[-1] = nums[n] = -∞`.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

**Example 2:**

```
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
```

**Note:**

Your solution should be in logarithmic complexity.

##### 2019.09.02

##### 	我的思路：

​		蠢蠢的遍历

```javascript
var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    const N = nums.length;
    for (let i = 1; i < N - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i - 1;
        }
    }
    return;
};
```

##### 别人的写法:

##### 		方法1：优美的暴力遍历

​		这是由于题目要求说的边界为负无穷，所以找到第一个非递增的点，它的前一项就是局部顶点。

````javascript
var findPeakElement = function(nums) {
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        if (nums[i] < nums[i - 1]) {
            return i - 1;
        }
    }
    return N - 1;
}
````

##### 		方法2：二分查找

​		思路引用之leetcode-cn官方讲解

​		首先从数组 nums 中找到中间的元素 mid。若该元素恰好位于降序序列或者一个局部下降坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的左边。于是，我们将搜索空间缩小为 mid 的左边(包括其本身)，并在左侧子数组上重复上述过程。

​		若该元素恰好位于升序序列或者一个局部上升坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的右边。于是，我们将搜索空间缩小为 mid 的右边，并在右侧子数组上重复上述过程。

​		就这样，我们不断地缩小搜索空间，直到搜索空间中只有一个元素，该元素即为峰值元素。

```javascript
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = mid1 + 1;
        if (nums[mid1] < nums[mid2]) {
            low = mid2;
        }
        else {
            high = mid1;
        }
    }
    return low;
}
```

