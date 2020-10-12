# 416. Partition Equal Subset Sum

Given a **non-empty** array `nums` containing **only positive integers**, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

**Example 1:**

```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

**Example 2:**

```
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

 

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`



#### 2020.10.11

#### 	我的思路：

##### 超时

```javascript
function canPartition11(nums: number[]): boolean {
    let sum = nums.reduce((pre, cur) => pre + cur);
    if (sum & 1) {
        return false;
    }

    const N = nums.length;
    let half = sum >> 1;
    nums.sort((a, b) => b - a);

    const check = (target: number, index: number): boolean => {
        if (target == 0) {
            return true;
        }

        if (index == N) {
            return false;
        }

        for (let i = index; i < N; i++) {
            if (check(target - nums[i], i + 1)) {
                return true;
            }
        }
        return false;
    }

    return check(half, 0);
};

```

#### 别人的思路：

dp，0-1背包

```javascript
function canPartition(nums: number[]): boolean {
    let max = 0;
    let sum = nums.reduce((pre, cur) => {
        max = Math.max(max, cur);
        return pre + cur
    });

    if (sum & 1) {
        return false;
    }

    const target = sum >> 1;
    if (max > target) {
        return false;
    }

    const N = nums.length;

    const dp = Array(N).fill(0).map(e => Array(target + 1).fill(false));

    for (let i = 0; i < N; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i < N; i++) {
        const num = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[N - 1][target];
}
```
