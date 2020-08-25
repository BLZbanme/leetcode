# 491.Increasing Subsequences

Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2.

 

**Example:**

```
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
```

 

**Constraints:**

- The length of the given array will not exceed 15.
- The range of integer in the given array is [-100,100].
- The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.

#### 2020.08.25

#### 	我的思路：

回溯+剪枝

```typescript
function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = [];
    const set = new Set();
    const helper = (arr: number[], index: number): void => {
        const set1 = new Set();
        for (let i = index + 1; i < nums.length; i++) {
            if (set1.has(nums[i])) {
                continue;
            }
            set1.add(nums[i]);

            if (arr[arr.length - 1] <= nums[i]) {
                arr.push(nums[i])
                result.push([...arr]);
                helper(arr, i);
                arr.pop();
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            helper([nums[i]], i);
            set.add(nums[i]);
        } 
    }
    return result;
};
```



