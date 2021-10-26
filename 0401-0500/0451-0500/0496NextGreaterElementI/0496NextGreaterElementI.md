# 496. Next Greater Element I

You are given two arrays **(without duplicates)** `nums1` and `nums2` where `nums1`’s elements are subset of `nums2`. Find all the next greater numbers for `nums1`'s elements in the corresponding places of `nums2`.

The Next Greater Number of a number **x** in `nums1` is the first greater number to its right in `nums2`. If it does not exist, output -1 for this number.

**Example 1:**

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

**Example 2:**

```
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
```

**Note:**

1. All elements in `nums1` and `nums2` are unique.
2. The length of both `nums1` and `nums2` would not exceed 1000.

##### 2020.06.11

##### 	别人的写法：

​	对nums2进行单调栈判断，用map存储nums2中每个元素的下一个比他大的元素。然后遍历nums1从map中查找下一个比它大的元素。

时间复杂度O(n)，空间复杂度O(n)

```javascript
var nextGreaterElement = function(nums1, nums2) {
    const result = new Array(nums1.length);
    const map = new Map();
    const stack = [];
    nums2.forEach(e => {
        while (stack.length && stack[stack.length - 1] < e) {
            map.set(stack.pop(), e);
        }
        stack.push(e);
    })

    nums1.forEach((e, index) => {
        result[index] = map.get(e) || -1;
    })
    return result;
};
```

##### 2021.10.26

##### redo

一开始理解错题意

```python
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        map = {}
        stack = []
        for item in nums2:
            while stack and stack[-1] < item:
                map[stack.pop()] = item
            stack.append(item)
        
        return  [map.get(num, -1) for num in nums1]
```

