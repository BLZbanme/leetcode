# 312. Burst Balloons

Given `n` balloons, indexed from `0` to `n-1`. Each balloon is painted with a number on it represented by array `nums`. You are asked to burst all the balloons. If the you burst balloon `i` you will get `nums[left] * nums[i] * nums[right]` coins. Here `left` and `right` are adjacent indices of `i`. After the burst, the `left` and `right` then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

**Note:**

- You may imagine `nums[-1] = nums[n] = 1`. They are not real therefore you can not burst them.
- 0 ≤ `n` ≤ 500, 0 ≤ `nums[i]` ≤ 100

**Example:**

```
Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
```

#### 2020.07.19

#### 	我的思路：

##### 	回溯，时间复杂度O(n!)，超时

```javascript
var maxCoins = function(nums) {
    let max = 0;
    
    const LEN = nums.length;
    const set = Array(LEN).fill(0);

    function dfs(count, n) {
        if (n === nums.length) {
            max = Math.max(count, max);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (set[i]) {
                continue;
            }
            set[i] = 1;
            let left;
            let right; 
            for (let j = i - 1; j >= 0; j--) {
                if (!set[j]) {
                    left = nums[j];
                    break;
                }
            }
            left = left || 1;

            for (let j = i + 1; j < LEN; j++) {
                if (!set[j]) {
                    right = nums[j];
                    break;
                }
            }
            right = right || 1;
            dfs(count + nums[i] * left * right, n + 1);
            set[i] = 0;
        }

    }

    dfs(0, 0);

    return max;
};
```

#### 别人的写法：

##### 	递归

比我的先进之处在于，他每次以i划分，就不用像我每次重新遍历

```javascript
var maxCoins = function(nums) {
    const N = nums.length;
    const val = Array(N + 2);

    for (let i = 1; i <= N; i++) {
        val[i] = nums[i - 1];
    }
    val[0] = val[N + 1] = 1;

    const dp = Array(N + 2);
    for (let i = 0; i <= N + 1; i++) {
        dp[i] = Array(N + 2).fill(-1);
    }

    function dfs(left, right) {
        if (left >= right - 1) {
            return 0;
        }

        if (dp[left][right] != -1) {
            return dp[left][right];
        }

        for (let i = left + 1; i < right; i++) {
            let sum = val[left] * val[i] * val[right];
            sum += dfs(left, i) + dfs(i, right);
            dp[left][right] = Math.max(dp[left][right], sum);
        }

        return dp[left][right];
    }

    return dfs(0, N + 1);
};
```

##### dp

有点类似于矩阵连乘的思路

```javascript
var maxCoins = function(nums) {
    const N = nums.length;
    const dp = Array(N + 2);
    for (let i = 0; i <= N + 1; i++) {
        dp[i] = Array(N + 2).fill(0);
    }

    const val = Array(N + 2);
    val[0] = val[N + 1] = 1;
    for (let i = 1; i <= N; i++) {
        val[i] = nums[i - 1];
    }

    for (let i = N - 1; i >= 0; i--) {
        for (let j = i + 2; j <= N + 1; j++) {
            for (let k = i + 1; k < j; k++) {
                let sum = val[i] * val[k] * val[j];
                sum += dp[i][k] + dp[k][j];
                dp[i][j] = Math.max(sum, dp[i][j]);
            }
        }
    }

    return dp[0][N + 1];
}
```
