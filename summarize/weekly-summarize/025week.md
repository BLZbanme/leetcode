# 392. Is Subsequence

Given a string **s** and a string **t**, check if **s** is subsequence of **t**.

You may assume that there is only lower case English letters in both **s** and **t**. **t** is potentially a very long (length ~= 500,000) string, and **s** is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**
**s** = `"abc"`, **t** = `"ahbgdc"`

Return `true`.

**Example 2:**
**s** = `"axc"`, **t** = `"ahbgdc"`

Return `false`.

**Follow up:**
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

**Credits:**
Special thanks to [@pbrother](https://leetcode.com/pbrother/) for adding this problem and creating all test cases.

##### 2019.12.23

#### 	我的思路：

​		判断遍历完t的时候能否遍历完s

```javascript
var isSubsequence = function(s, t) {
    let index = 0;
    let i = 0;
    const sLen = s.length;
    const tLen = t.length;
    while (index < sLen && i < tLen) {
        if (t[i] === s[index]) {
            index++;
        }
        i++;
    }
    return index === sLen;
};
```

#### 别人的方法：

​		对t出现的字符下标进行缓存，然后遍历s时在缓存中二分查找，判断是否能找到一个比当前临时小标大的值。

##### 注意：二分查找可以找到当前查找值在数据中的下一个插入点

```javascript
var isSubsequence = function(s, t) {
    const aCode = 'a'.charCodeAt();
    let mapArr = new Array(26);
    const tLen = t.length;
    for (let i = 0; i < tLen; i++) {
        if (mapArr[t[i].charCodeAt() - aCode]) {
            mapArr[t[i].charCodeAt() - aCode].push(i);
        }
        else {
            mapArr[t[i].charCodeAt() - aCode] = [i];
        }
    }

    let index = 0;
    for (let i = 0, sLen = s.length; i < sLen; i++) {
        let indexArray = mapArr[s[i].charCodeAt() - aCode];
        if (!indexArray) {
            return false;
        }
        let lo = 0;
        let hi = indexArray.length;
        while (lo <= hi) {
            let mid = Math.floor(lo + Math.floor((hi - lo) / 2));
            if (indexArray[mid] < index) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        if (lo === indexArray.length) {
            return false;
        }
        index = indexArray[lo] + 1;
    }
    return true;
}
```

# 437. Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

**Example:**

```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
```

##### 2019.12.26

#### 我的思路：

##### 方法1：

​		递归，为了判断中间结点开始的路径，我在遍历每个结点的时候额外进行了一个从这开始的dfs操作，防止无限递归，用set存储了已经从遍历过的结点。

```javascript
var pathSum = function(root, sum) {
    let count = 0;
    let set = new Set([root]);

    function dfs(node, val) {
        if (!node) {
            return;
        }
        if (val === node.val) {
            count++;
        }

        if (!set.has(node)) {
            set.add(node);
            dfs(node, sum);
        }
        
        dfs(node.left, val - node.val);
        dfs(node.right, val - node.val);
        return;
    }

    dfs(root, sum);
    return count;
};
```

##### 方法2：

​    实质是我的方法的优化，双递归，很优美

```javascript
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function dfs(node, val) {
    if (!node) {
        return 0;
    }
    return (node.val == val ? 1 : 0) + dfs(node.left, val - node.val) + dfs(node.right, val - node.val);
}
```

#### 别人的方法：

​     用pathSum记录了到当前结点，存在长度为n的路径m条，判断是否存在```curSum - target```的路径，存在的数量可用新增为满足条件路径的数量。

```javascript
var pathSum = function(root, sum) {
    let count = 0;
    let preSum = new Map();
    preSum.set(0, 1);

    function dfs(root, curSum, target) {
        if (!root) {
            return;
        }

        curSum += root.val;

        if (preSum.has(curSum - target)) {
            count += preSum.get(curSum - target);
        }

        if (!preSum.has(curSum)) {
            preSum.set(curSum, 1);
        }
        else {
            preSum.set(curSum, preSum.get(curSum) + 1);
        }

        dfs(root.left, curSum, target);
        dfs(root.right, curSum, target);
        preSum.set(curSum, preSum.get(curSum) - 1);
    }

    dfs(root, 0, sum);
    return count;
}
```



