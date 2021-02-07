# 665. Non-decreasing Array

Given an array `nums` with `n` integers, your task is to check if it could become non-decreasing by modifying **at most one element**.

We define an array is non-decreasing if `nums[i] <= nums[i + 1]` holds for every `i` (**0-based**) such that (`0 <= i <= n - 2`).

 

**Example 1:**

```
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
```

**Example 2:**

```
Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
```

 

**Constraints:**

- `n == nums.length`
- `1 <= n <= 104`
- `-105 <= nums[i] <= 105`

#### 2021.02.07

#### 	我的思路：

有可能是最蠢的方法：

题目要求数组改动次数不超过一次，数组长度为n，所以我们可以理解成**判断该数组的[最长非递减子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)长度是否大于等于n - 1**，参考[这里](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/)可得，复杂度为O*(*n*log*n)

**注意：**不同的是本题不是求严格递增子序列，而是非递减的

```javascript
function checkPossibility1(nums: number[]): boolean {
    const n = nums.length;
    const dp = Array(n + 1);
    let len = 1;
    dp[1] = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] >= dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            let lo = 1;
            let hi = len;
            while (lo < hi) {
                let mid = lo + ((hi - lo) >> 1);
                if (dp[mid] <= nums[i]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid;
                }
            }
            dp[lo] = nums[i];
        }
    }
    return n - len <= 1;
};
```

#### 别人的思路

1. 遇到a[i] > a[i+1]需要进行处理, 要么a[i]变小, 要么a[i+1]变大;
2. 贪心思想: 尽量使a[i]变小, 因为a[i+1]变大, 会影响后面数组的判断;
3. 当a[i] > a[i+1]时, 必然存在a[i] >= a[i-1], 如果a[i-1] > a[i+1], 就需要使a[i+1]变大;
   举例: -1 4 2, 需要将4变小; -1 4 -2, 需要将-2变大;
4. 其他情况都可以a[i]变小



```typescript
function checkPossibility(nums: number[]): boolean { 
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            if (count > 1) return false;
            if (i > 0 && nums[i + 1] < nums[i - 1]) {
                nums[i + 1] = nums[i];
            }
            else {
                nums[i] = nums[i + 1];
            }
        }
    }
    return true;
}
```



