# 109. Convert Sorted List to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example:**

```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```

#### 2020.08.18

#### 	我的思路：

用数组存list，然后根据下标找。。。

时间O(n)，空间O(n)

```javascript
var sortedListToBST = function(head) {
    let arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    return partition(arr, 0, arr.length - 1);
};

function partition(arr, lo, hi) {
    if (lo > hi) {
        return null;
    }
    let mid = lo + ((hi - lo) >> 1)
    let newNode = new TreeNode(arr[mid]);
    newNode.left = partition(arr, lo, mid - 1);
    newNode.right = partition(arr, mid + 1, hi);
    return newNode;
}
```

#### 别人的思路：

用中序遍历的思路

时间O(n)，空间O(logn)

```javascript
var sortedListToBST = head => {
    if (!head) return null;
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = head;

    const buildBST = (start, end) => {
        if (start > end) return null;
        const mid = start + ((end - start) >> 1);
        const left = buildBST(start, mid - 1);
        const root = new TreeNode(cur.val);
        cur = cur.next;
        root.left = left;
        root.right = buildBST(mid + 1, end);
        return root;
    }

    return buildBST(0, len - 1);
}
```

# 647. Palindromic Substrings

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

**Example 1:**

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

 

**Example 2:**

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

 

**Note:**

1. The input string length won't exceed 1000.



#### 2020.08.19

#### 我的思路：

暴力

```javascript
var countSubstrings = function(s) {
    let count = s.length;

    const checkSubStr = (index) => {
        for (let i = 2; index + i <= s.length; i++) {
            let tmp = s.substr(index, i);
            if (isPalindromic(tmp)) {
                count++;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkSubStr(i);
    }

    return count;
};

function isPalindromic(subStr) {
    let lo = 0;
    let hi = subStr.length - 1;
    while (lo < hi) {
        if (subStr[lo++] !== subStr[hi--]) {
            return false;
        }
    }
    return true;
}
```

#### 别人的思路：

##### 动态规划

```typescript
const countSubstrings = (s: string): number => {
    const n = s.length;
    let count = n;
    const dp: Array<boolean[]> = Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = (Array(n) as any).fill(false);
        dp[i][i] = true;
    }
    
    for (let j = 1; j < n; j++) {
        for (let i = 0; i + j < n; i++) {
            if (s[i] === s[i + j]) {
                dp[i][i + j] = j === 1 || dp[i + 1][i + j - 1]
            }
            dp[i][i + j] && count++;
        }
    }
    return count;
}
```

##### 中心展开

```typescript
const countSubstrings111 = (s: string): number => {
    const N = s.length;
    let count = 0;
    for (let i = 0; i < 2 * N - 1; i++) {
        let l = i >> 1;
        let r = (i >> 1) + i % 2;
        while (l >= 0 && r < N && s[l] === s[r]) {
            l--;
            r++;
            count++;
        }
    }
    return count;
}
```

# 679. 24 Game

You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through `*`, `/`, `+`, `-`, `(`, `)` to get the value of 24.

**Example 1:**

```
Input: [4, 1, 8, 7]
Output: True
Explanation: (8-4) * (7-1) = 24
```



**Example 2:**

```
Input: [1, 2, 1, 2]
Output: False
```



**Note:**

1. The division operator `/` represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
2. Every operation done is between two numbers. In particular, we cannot use `-` as a unary operator. For example, with `[1, 1, 1, 1]` as input, the expression `-1 - 1 - 1 - 1` is not allowed.
3. You cannot concatenate numbers together. For example, if the input is `[1, 2, 1, 2]`, we cannot write this as 12 + 12.

#### 2020.08.22

#### 我的思路：

暴力，没做出来

#### 别人的思路：

回溯

```typescript
function judgePoint24(nums: Array<number>): boolean {
    const DIFF = 10 ** (-6);

    function solve(nums:  Array<number>): boolean {
        if (!nums.length) {
            return false;
        }
        if (nums.length == 1) {
            return Math.abs(nums[0] - 24) < DIFF
        }
        let length = nums.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i === j) {
                    continue;
                }
                let list2 = [];
                for (let k = 0; k < length; k++) {
                    if (k == j || k === i) {
                        continue;
                    }
                    list2.push(nums[k]);
                }

                for (let k = 0; k < 4; k++) {
                    if (k < 2 && i > j) {
                        continue;
                    }
                    if (k == 0) {
                        list2.push(nums[i] + nums[j]);
                    }
                    else if (k == 1) {
                        list2.push(nums[i] * nums[j]);
                    }
                    else if (k == 2) {
                        list2.push(nums[i] - nums[j])
                    }
                    else if (k == 3) {
                        if (Math.abs(nums[j]) < DIFF) {
                            continue;
                        }
                        else {
                            list2.push(nums[i] / nums[j])
                        }
                    }
                    if (solve(list2)) {
                        return true;
                    }
                    list2.pop();
                }
            }
        }
        return false;
    }

    return solve(nums);
}
```

