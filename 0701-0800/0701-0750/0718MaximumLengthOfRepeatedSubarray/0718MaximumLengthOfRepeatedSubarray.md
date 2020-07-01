# 718.Maximum Length of Repeated Subarray

Given two integer arrays `A` and `B`, return the maximum length of an subarray that appears in both arrays.

**Example 1:**

```
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
```

 

**Note:**

1. 1 <= len(A), len(B) <= 1000
2. 0 <= A[i], B[i] < 100

##### 2020.07.01

##### 	我的思路：

​	我的dp思路有问题

#### 别人的方法：

```javascript
var findLength = function(A, B) {
    const N = A.length;
    const M = B.length;
    const dp = new Array(M + 1).fill(0);

    let max = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = M; j >= 1; j--) {
            if (A[i - 1] === B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            }
            max = Math.max(dp[j] , max);
        }
    }
    return max;
}
```

