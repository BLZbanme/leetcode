# 992. Subarrays with K Different Integers

Given an array `A` of positive integers, call a (contiguous, not necessarily distinct) subarray of `A` *good* if the number of different integers in that subarray is exactly `K`.

(For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.)

Return the number of good subarrays of `A`.

 

**Example 1:**

```
Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
```

**Example 2:**

```
Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```

 

**Note:**

1. `1 <= A.length <= 20000`
2. `1 <= A[i] <= A.length`
3. `1 <= K <= A.length`

#### 2021.02.04

##### 	我的思路：

暴力！超时

```javascript
function subarraysWithKDistinct1(A: number[], K: number): number {
    const n = A.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        const set = new Set();
        for (let j = i; j < n; j++) {
            set.add(A[j]);
            if (set.size === K) {
                result++;
            }
            if (set.size > K) {
                break;
            }
        }
    }
    return result;
};
```

##### 别人的方法：

滑动窗口

题目转换成，用满足条件不超过k种元素的子数组个数 - 不超过k-1种元素的子数组个数

```typescript
function subarraysWithKDistinct(A: number[], K: number): number {
    const n = A.length;

    const helper = (k: number): number => {
        let left = 0;
        const map = new Map();
        let result = 0;
        for (let right = 0; right < n; right++) {
            map.set(A[right], (map.get(A[right]) || 0) + 1);
            while (map.size > k && left <= right) {
                let tmp = map.get(A[left]);
                if (tmp > 1) {
                    map.set(A[left], tmp - 1);
                }
                else {
                    map.delete(A[left]);
                }
                left++;
            }
            result += right - left + 1;
        }
        return result;
    }

    return helper(K) - helper(K - 1);
};
```

