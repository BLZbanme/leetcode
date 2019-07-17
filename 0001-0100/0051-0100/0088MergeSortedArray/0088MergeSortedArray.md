# 88. Merge Sorted Array

Given two sorted integer arrays *nums1* and *nums2*, merge *nums2* into *nums1* as one sorted array.

**Note:**

- The number of elements initialized in *nums1* and *nums2* are *m* and *n*respectively.
- You may assume that *nums1* has enough space (size that is greater or equal to *m* + *n*) to hold additional elements from *nums2*.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

##### 2019.07.17

##### 	我的思路：

​		算法第四版中，原地合并一个数组用的这种方式。

```javascript
var merge = function(nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    let tmp = [...nums1];
    for (let i = 0, len = nums1.length; i < len; i++) {
        if (index1 >= m) {
            nums1[i] = nums2[index2++];
        }
        else if (index2 >= n) {
            nums1[i] = tmp[index1++];
        }
        else if (tmp[index1] < nums2[index2]) {
            nums1[i] = tmp[index1++];
        }
        else {
            nums1[i] = nums2[index2++];
        }
    }
    return nums1;
};
```

##### 		别人的方法：

​		从后面合并起。如果j >= 0说明nums1的排完了，继续插nums2的。若j < 0，说明i不一定插完了，但是i前面本来就是有序的，不用继续插了

```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]; 
        }
        else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
}
```

