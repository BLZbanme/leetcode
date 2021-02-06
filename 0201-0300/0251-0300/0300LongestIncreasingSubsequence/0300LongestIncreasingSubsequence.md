# 300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

**Example:**

```
Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
```

**Note:**

- There may be more than one LIS combination, it is only necessary for you to return the length.
- Your algorithm should run in O(*n2*) complexity.

**Follow up:** Could you improve it to O(*n* log *n*) time complexity?

##### 2019.11.07

##### 	我的思路：

垃圾版dp，dp数组中dp[i]存储的是以dp[i]结尾的最长递增子序列的长度

时间复杂度(n<sup>2</sup>)

```javascript
var lengthOfLIS = function(nums) {
    const N = nums.length;
    if (!N) {
        return 0;
    }
    let dp = new Array(N);
    dp[0] = 1;
    let result = 1;
    for (let i = 1; i < N; i++) {
        let tmp = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                tmp = Math.max(tmp, dp[j] + 1);
            }
            if (tmp > result) {
                break;
            }
        }
        dp[i] = tmp;
        result = Math.max(result, tmp);
    }
    return result;
};
```

##### 别人的写法：

##### 	牛逼的dp：

​	```dp[i]```存的是长度为```i + 1```的子序列的最后的节点，因为，每次遍历新的数值num时，用二分查找，查找新的值在dp数组中的位置，把找到那个dp[i]改成现在值。如果查找的```i === len```，说明现在遍历的num比之前最长的递增序列的尾部还长，所以```len + 1```

```javascript
var lengthOfLIS = function(nums) {
    const N = nums.length;
    let dp = new Array(N);
    let len = 0;
    for (let num of nums) {
        let i = 0;
        let j = len;
        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (dp[m] < num) {
                i = m + 1;
            }
            else {
                j = m;
            }
        }
        dp[i] = num;
        if (i === len) {
            len++;
        } 
    }
    return len;
}
```

#### 2021.02.06

##### redo

垃圾dp

```typescript
function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return n;
    const dp = Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(1 + dp[j], dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
```

nb的dp

```typescript
function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return n;
    let len = 1;
    const dp = Array(n + 1);
    dp[1] = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] > dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            let lo = 1;
            let hi = len;
            while (lo <= hi) {
                let mid = lo + ((hi - lo) >> 1);
                if (dp[mid] < nums[i]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid - 1;
                }
            }
            dp[lo] = nums[i];
        }
    }
    return len;
};
```

