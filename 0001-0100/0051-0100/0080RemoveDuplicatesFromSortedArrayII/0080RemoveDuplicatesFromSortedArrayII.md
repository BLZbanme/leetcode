# 80. Remove Duplicates from Sorted Array II

Given a sorted array *nums*, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that duplicates appeared at most *twice* and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

**Example 1:**

```
Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

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

##### 别人的写法

​		设一个变量i完事。n > nums[i - 2]这个条件可以防止出现重复次数大于2的。如果把2全部换成k，这就是重复k次的通解。

```javascript
var removeDuplicates = function(nums) {
    let i = 0;
    for (let n of nums) {
        if (n > nums[i - 2] || i < 2) {
            nums[i++] = n;
        }
    }
    return i;
}
```

