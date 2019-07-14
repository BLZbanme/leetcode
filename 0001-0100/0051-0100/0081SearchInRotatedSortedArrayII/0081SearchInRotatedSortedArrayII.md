# 81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,0,1,2,2,5,6]` might become `[2,5,6,0,0,1,2]`).

You are given a target value to search. If found in the array return `true`, otherwise return `false`.

**Example 1:**

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

**Follow up:**

- This is a follow up problem to [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/), where `nums`may contain duplicates.
- Would this affect the run-time complexity? How and why?

##### 2019.07.14

##### 	我的思路：

​		设三个变量，index记录前面的下标，trigger记录重复的数字出现了几次，num记录当前的数字

​		时间复杂度O(n)，空间复杂度O(1)

```javascript
var removeDuplicates = function(nums) {
    let index = 0, trigger = 0, num = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (num != nums[i]) {
            trigger = 1;
            nums[index++] = num = nums[i];
        }
        else {
            if (trigger == 2) {
                continue;
            }
            else {
                trigger++
                nums[index++] = num;
            }
        }
    }
    return index;
};
```
