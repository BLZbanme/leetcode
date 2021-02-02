# 1658. Minimum Operations to Reduce X to Zero

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this **modifies** the array for future operations.

Return *the **minimum number** of operations to reduce* `x` *to **exactly*** `0` *if it's possible**, otherwise, return* `-1`.

 

**Example 1:**

```
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
```

**Example 2:**

```
Input: nums = [5,6,7,8,9], x = 4
Output: -1
```

**Example 3:**

```
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
```

 

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 104`
- `1 <= x <= 109`

#### 2021.02.02

#### 	我的思路：

bfs，直接拉大胯！

```typescript
function minOperations1(nums: number[], x: number): number {
    const n = nums.length;
    let lo = -1;
    let hi = n;
    let depth = 0;
    const queue = [[lo, hi, 0]];
    while (queue.length && depth <= n) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const [j, k, sum] = queue.shift()!;
            if (sum === x) return depth;
            if (j >= k) {
                break;
            }
            if (nums[j + 1] + sum <= x) {
                queue.push([j + 1, k, sum + nums[j + 1]])
            }
            if (nums[k - 1] + sum <= x) {
                queue.push([j, k - 1, sum + nums[k - 1]])
            }
        }
        depth++;
    }
    return -1;
};
```

#### 别人的思路：

滑动窗口，这题可以转换成求连续数组和为sum - x的最长子数组！

```typescript
function minOperations(nums: number[], x: number): number {
    const sum = nums.reduce((pre, cur) => pre + cur);
    const target = sum - x;

    const n = nums.length;
    let left = 0;
    let win = -1;
    let cur = 0;
    for (let right = 0; right < n; right++) {
        cur += nums[right];
        while (cur > target) {
            cur -= nums[left];
            left++;
        }
        if (cur === target) {
            win = Math.max(win, right - left + 1);
        }        
    }
    return win === -1 ? -1 : n - win;
}
```
