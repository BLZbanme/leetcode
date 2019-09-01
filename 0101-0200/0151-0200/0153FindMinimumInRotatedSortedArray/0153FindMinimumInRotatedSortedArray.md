# 153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

Find the minimum element.

You may assume no duplicate exists in the array.

**Example 1:**

```
Input: [3,4,5,1,2] 
Output: 1
```

**Example 2:**

```
Input: [4,5,6,7,0,1,2]
Output: 0
```

##### 2019.09.01

##### 	我的思路：

​		这种题必是二分查找

```javascript
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length;
    const N = nums.length - 1;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if ((mid == 0 && nums[0] < nums[N]) || (nums[mid] < nums[mid - 1])) {
            return nums[mid];
        }
        else if (nums[mid] > nums[N]) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return nums[lo];
};

```

##### 别人的写法:

​		改良的二分查找

````javascript
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        if (nums[start] < nums[end]) {
            return nums[start];
        }
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= nums[start]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return nums[start];
};
````

