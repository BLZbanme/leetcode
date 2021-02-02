# 1004. Max Consecutive Ones III

Given an array `A` of 0s and 1s, we may change up to `K` values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 

 

**Example 1:**

```
Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation: 
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
```

**Example 2:**

```
Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation: 
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
```

 

**Note:**

1. `1 <= A.length <= 20000`
2. `0 <= K <= A.length`
3. `A[i]` is `0` or `1` 

#### 2021.01.29

#### 	我的思路：

```javascript
function longestOnes(A: number[], K: number): number {
    const n = A.length;
    if (n < 2) return n;
    
    let zeroCount = 0;
    let left = 0;
    let right = 0;
    let res = 0;
    while (right < n) {
        A[right] || zeroCount++;
        if (zeroCount >  K) {
            A[left] || zeroCount--;
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
};
```
