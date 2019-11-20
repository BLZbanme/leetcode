# 349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

**Note:**

- Each element in the result must be unique.
- The result can be in any order.

##### 2019.11.20

##### 	我的思路：

​		时间、空间复杂度O(n)

```javascript
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();
    nums2.forEach(e => {
        if (set1.has(e)) {
            result.add(e);
        }
    })
    return Array.from(result);
};
```

