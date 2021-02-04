# 795. Number of Subarrays with Bounded Maximum

We are given an array `A` of positive integers, and two positive integers `L` and `R` (`L <= R`).

Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least `L` and at most `R`.

```
Example :
Input: 
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
```

**Note:**

- L, R  and `A[i]` will be an integer in the range `[0, 10^9]`.
- The length of `A` will be in the range of `[1, 50000]`.

#### 2021.02.04

##### 	我的思路：

```javascript
function numSubarrayBoundedMax(A: number[], L: number, R: number): number {
    const n = A.length;

    const smallK = (k: number): number => {
        let result = 0;
        let pre = 1;
        for (let right = 0; right < n; right++) {
            if (A[right] > k) {
                pre = 1;
            }
            else {
                result += pre++;
            }
        }
        return result;
    }

    return smallK(R) - smallK(L - 1);
};
```
