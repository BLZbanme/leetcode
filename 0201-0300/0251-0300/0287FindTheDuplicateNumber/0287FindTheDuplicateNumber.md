# 283. Move Zeroes

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note**:

1. You must do this **in-place** without making a copy of the array.
2. Minimize the total number of operations.

##### 2019.10.11

##### 	我的思路：

​		遇到非零的数往前面的index上放，遍历完后把index后面的值全部置0

```javascript
var moveZeroes = function(nums) {
    let i = 0;
    const N = nums.length;
    for (let j = 0; j < N; j++) {
        if (nums[j]) {
            nums[i++] = nums[j];
        }
    }
    while (i < N) {
        nums[i++] = 0;
    }
    return nums;
};
```
