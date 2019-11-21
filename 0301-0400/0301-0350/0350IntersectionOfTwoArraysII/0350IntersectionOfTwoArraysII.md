# 350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

**Note:**

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

**Follow up:**

- What if the given array is already sorted? How would you optimize your algorithm?
- What if *nums1*'s size is small compared to *nums2*'s size? Which algorithm is better?
- What if elements of *nums2* are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

##### 2019.11.21

#### 	我的思路：

##### 方法1：

​		先排序，然后两个指针比

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    const N1 = nums1.length;
    const N2 = nums2.length;
    while (i < N1 && j < N2) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return result;
};
```

##### 方法2：

​		蠢蠢的map

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    const map1 = new Map();
    const map2 = new Map();
    nums1.forEach(e => {
        let tmp = map1.get(e);
        if (tmp) {
            map1.set(e, tmp + 1);
        }
        else {
            map1.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map2.get(e);
        if (tmp) {
            map2.set(e, tmp + 1);
        }
        else {
            map2.set(e, 1);
        }
    });

    map1.forEach((v, k) => {
        let v2 = map2.get(k) || 0;
        for (let i = 0; i < Math.min(v, v2); i++) {
            result.push(k);
        }
    })

    return result;
}
```

#### 别人的写法：

##### 给力的map：

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    const map = new Map();
    nums1.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp + 1);
        }
        else {
            map.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp - 1);
            result.push(e);
        }
    });

    return result;
}
```

