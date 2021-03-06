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

#### 2020.11.19

##### 	我的思路：

```javascript
function moveZeroes(nums: number[]): void {
    const N = nums.length;
    let i = 0;
    let j = 0;
    while (j < N || i < N) {
        if (j < N) {
            if (nums[j]) {
                nums[i++] = nums[j]
            }
            j++;
        }
        else {
            nums[i++] = 0
        }
    }
};
```

##### 别人的方法：

```javascript
function moveZeroes(nums: number[]): void {
    const N = nums.length;
    let i = 0;
    let j = 0;
    while (j < N) {
        if (nums[j]) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            i++;
        }
        j++;
    }
    return;
}
```

