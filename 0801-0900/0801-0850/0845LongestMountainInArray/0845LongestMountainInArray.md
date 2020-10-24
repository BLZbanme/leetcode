# 845. Longest Mountain in Array

Let's call any (contiguous) subarray B (of A) a *mountain* if the following properties hold:

- `B.length >= 3`
- There exists some `0 < i < B.length - 1` such that `B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]`

(Note that B could be any subarray of A, including the entire array A.)

Given an array `A` of integers, return the length of the longest *mountain*. 

Return `0` if there is no mountain.

**Example 1:**

```
Input: [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
```

**Example 2:**

```
Input: [2,2,2]
Output: 0
Explanation: There is no mountain.
```

**Note:**

1. `0 <= A.length <= 10000`
2. `0 <= A[i] <= 10000`

**Follow up:**

- Can you solve it using only one pass?
- Can you solve it in `O(1)` space?



#### 2020.10.25

#### 	我的思路：

两遍遍历

```javascript
function longestMountain1(A: number[]): number {
    const N = A.length;
    const dp = Array(N);
    dp[0] = 0;
    for (let i = 1; i < N; i++) {
        dp[i] = A[i] > A[i - 1] ? dp[i - 1] + 1 : 0;
    }

    let maxLen = 0;
    let tmp = 0;
    for (let j = N - 2; j > 0; j--) {
        if (A[j] > A[j + 1]) {
            tmp++;
            if (dp[j] !== 0) {
                maxLen = Math.max(maxLen, tmp + 1 + dp[j]);
            }
        }
        else {
            tmp = 0;
        }
    }
    return maxLen;
};
```

#### 别人的思路：

一遍遍历

```javascript
function longestMountain(A: number[]): number {
    const N = A.length;
    let ans = 0;
    let left = 0;
    while (left + 2 < N) {
        let right = left + 1;
        if (A[left] < A[left + 1]) {
            while (right + 1 < N && A[right] < A[right + 1]) {
                right++;
            }
            if (right < N - 1 && A[right] > A[right + 1]) {
                while (right + 1 < N && A[right] > A[right + 1]) {
                    right++;
                }
                ans = Math.max(ans, right - left + 1);
            }
            else {
                right++;
            }
        }
        left = right;
    }
    return ans;
}
```
