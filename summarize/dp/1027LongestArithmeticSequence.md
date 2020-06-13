# 1027. Longest Arithmetic Sequence

Given an array `A` of integers, return the **length** of the longest arithmetic subsequence in `A`.

Recall that a *subsequence* of `A` is a list `A[i_1], A[i_2], ..., A[i_k]` with `0 <= i_1 < i_2 < ... < i_k <= A.length - 1`, and that a sequence `B` is *arithmetic* if `B[i+1] - B[i]` are all the same value (for `0 <= i < B.length - 1`).

**Example 1:**

```
Input: [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
```

**Example 2:**

```
Input: [9,4,7,2,10]
Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].
```

**Example 3:**

```
Input: [20,1,15,3,10,5,8]
Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].
```

**Note:**

1. `2 <= A.length <= 2000`
2. `0 <= A[i] <= 10000`

##### 2020.06.13

##### 	别人的思路：

动态规划，dp数组存储的是一个map，map中记录的是到这个点为止，等差为distance的序列各是多少。

```javascript
var longestArithSeqLength = function(A) {
    const dp = new Array(A.length);
    let result = 1;
    for (let i = 0; i < A.length; i++) {
        dp[i] = new Map();
        for (let j = 0; j < i; j++) {
            let distance = A[i] - A[j];
            let tmp = (dp[j].get(distance) || 1) + 1;
            result = Math.max(result, tmp);
            dp[i].set(distance, tmp);
        }
    }
    return result;
}
```
