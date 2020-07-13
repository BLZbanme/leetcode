Let's call an array `A` a *mountain* if the following properties hold:

- `A.length >= 3`
- There exists some `0 < i < A.length - 1` such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`

Given an array that is definitely a mountain, return any `i` such that `A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]`.

**Example 1:**

```
Input: [0,1,0]
Output: 1
```

**Example 2:**

```
Input: [0,2,1,0]
Output: 1
```

**Note:**

1. `3 <= A.length <= 10000`
2. `0 <= A[i] <= 10^6`
3. A is a mountain, as defined above.

##### 2019.06.12

##### 	我的思路：

​	二分查找

​	时间复杂度O(logn)

```javascript
var peakIndexInMountainArray = function(A) {
    let lo = 1, hi = A.length - 2;
    return twoFind(A, lo, hi);
};

function twoFind(arr, lo, hi){
    let mid = parseInt((lo + hi) / 2);
    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
        return mid;
    }
    if(arr[mid] < arr[mid + 1]){
        return twoFind(arr, mid + 1, hi);
    }
    if(arr[mid] < arr[mid - 1]){
        return twoFind(arr, lo, mid - 1);
    }
}
```

##### 别人的思路：

​	黄金比例搜索法，没看懂
