# 448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ *n* (*n* = size of array), some elements appear twice and others appear once.

Find all the elements of [1, *n*] inclusive that do not appear in this array.

Could you do it without extra space and in O(*n*) runtime? You may assume the returned list does not count as extra space.

**Example:**

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

##### 2019.12.29

#### 	我的思路：

​		前几天写`0442FindAllDuplicatesInAnArray`时写过

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

