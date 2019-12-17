# 442. Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ *n* (*n* = size of array), some elements appear **twice** and others appear **once**.

Find all the elements that appear **twice** in this array.

Could you do it without extra space and in O(*n*) runtime?

**Example:**

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

##### 2019.12.12

#### 	我的思路：

##### 	我没想出满足条件的实现方式

#### 别人的方法：

​	遍历，把已经出现值对应下标对应的值置为负，这样便利时发现的已经为负数的值就是重复的。

```javascript
var findDuplicates = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(Math.abs(index + 1));
        }
        nums[index] = -nums[index];
    }
    return result;
};、
```

注：下面是找到重复数组中所有出现的值的实现方法：

```javascript
var findAllNumbers = function(nums) {
    let result = [];
    for (let num of nums) {
        let index = Math.abs(num) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            result.push(i + 1);
        }
    }
    return result;
}
```

