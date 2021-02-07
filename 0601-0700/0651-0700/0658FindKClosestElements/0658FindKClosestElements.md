# 658. Find K Closest Elements

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`

 

**Example 1:**

```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

**Example 2:**

```
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

 

**Constraints:**

- `1 <= k <= arr.length`
- `1 <= arr.length <= 104`
- `arr` is sorted in **ascending** order.
- `-104 <= arr[i], x <= 104`

#### 2021.02.07

##### 	我的思路：

```javascript
function findClosestElements1(arr: number[], k: number, x: number): number[] {
    const n = arr.length;
    
    const binarySearch = () => {
        let lo = 0;
        let hi = n - 1;
        while (lo <= hi) {
            let mid = lo + ((hi - lo) >> 1);
            if (arr[mid] === x) {
                return mid;
            }
            if (arr[mid] < x) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    let index = binarySearch();

    let i = 1;
    let j = 1
    if (arr[index] !== x) {
        if (index === n || (index > 0 && (x - arr[index - 1] <= arr[index] - x))) {
            index--;
        }
    }
    const result = [arr[index]];
    while (k > 1) {
        let leftDiff = index - i >= 0 ? x - arr[index - i] : Infinity;
        let rightDiff = index + j < n ? arr[index + j] - x : Infinity;
        if (leftDiff <= rightDiff) {
            result.unshift(arr[index - i++]);
        }
        else {
            result.push(arr[index + j++]);;
        }
        k--;
    }
    return result;
};
```
