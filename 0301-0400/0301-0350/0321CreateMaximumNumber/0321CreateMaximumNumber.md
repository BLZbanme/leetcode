# 321. Create Maximum Number

Given two arrays of length `m` and `n` with digits `0-9` representing two numbers. Create the maximum number of length `k <= m + n` from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the `k` digits.

**Note:** You should try to optimize your time and space complexity.

**Example 1:**

```
Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
```

**Example 2:**

```
Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]
```

**Example 3:**

```
Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]
```

#### 2021.02.08

##### 	我的思路：

没写出来

##### 别人的写法：

##### 单调栈

```javascript
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    const m = nums1.length;
    const n = nums2.length;
    let maxSubsequence = Array(k).fill(0);
    const start = Math.max(0, k - n);
    const end = Math.min(k, m);
    for (let i = start; i <= end; i++) {
        const sub1 = getMaxSubsequence(nums1, i);
        const sub2 = getMaxSubsequence(nums2, k - i);
        const curMaxSubsequence = merge(sub1, sub2);
        if (compare(curMaxSubsequence, 0, maxSubsequence, 0)) {
            maxSubsequence = curMaxSubsequence;
        }
    }
    return maxSubsequence;
};

const getMaxSubsequence = (nums: Array<number>, k: number): Array<number> => {
    const len = nums.length;
    const stack = [];
    let remain = len - k;
    for (let i = 0; i < len; i++) {
        let num = nums[i];
        while (stack.length && stack[stack.length - 1] < num && remain > 0) {
            stack.pop();
            remain--;
        }
        if (stack.length < k) {
            stack.push(num);
        }
        else {
            remain--;
        }
    }
    return stack;
}

const merge = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
    const result = [];
    const m = arr1.length;
    const n = arr2.length;
    let i = 0;
    let j = 0;
    while (i < m || j < n) {
        if (!compare(arr1, i, arr2, j)) {
            result.push(arr2[j++]);
        }
        else {
            result.push(arr1[i++]);
        }
    }
    return result;
}

const compare = (arr1: Array<number>, index1: number, arr2: Array<number>, index2: number): boolean => {
    const m = arr1.length;
    const n = arr2.length;
    let i = index1;
    let j = index2;
    while (i < m || j < n) {
        let num1 = i < m ? arr1[i] : -1;
        let num2 = j < n ? arr2[j] : -1;
        if (num1 < num2) {
            return false;
        }
        else if (num1 > num2) {
            return true;
        }
        i++;
        j++;
    }
    return true;
}
```