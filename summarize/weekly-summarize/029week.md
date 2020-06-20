# 297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Example:** 

```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```

**Clarification:** The above format is the same as [how LeetCode serializes a binary tree](https://leetcode.com/faq/#binary-tree). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

**Note:** Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

##### 2020.06.16

##### 	我的思路：

##### 	（错解1）

序列化：层次遍历每一项放入一个链表中，存储的下标等同于他们的完全二叉树形式。

反序列化：遍历数组，还是按照完全二叉树的规律，连接他们的左右子树。

很遗憾，超时！

```javascript
var serialize = function(root) {
    const result = [];
    let queue = [root];
    while (queue.length) {
        let n = queue.length;
        let hasOne = false;
        for (let i = 0; i < n; i++) {
            let tmp = queue.shift();
            result.push(tmp ? tmp.val : 'null');
            if (!tmp) {
                queue.push(null);
                queue.push(null);
            }
            else {
                if (tmp.left || tmp.right) {
                    hasOne = true;
                }
                queue.push(tmp.left);
                queue.push(tmp.right);
                
            }
        }
        if (!hasOne) {
            break;
        }
    }
    return `[${result.join(',')}]`;
};

var deserialize = function(data) {
    let rootArr = JSON.parse(data);
    if (!rootArr) {
        return null;
    }
    rootArr.unshift(null);
    const map = new Map();
    let rootVal = rootArr[1];
    if (typeof rootVal !== 'number') {
        return null;
    }
    let root = new TreeNode(rootVal);
    map.set(1, root);
    for (let i = 1;  i < rootArr.length / 2; i++) {
        let tmp = rootArr[i];
        if (typeof tmp === 'number') {
            let newTreeNode = map.get(i) || new TreeNode(tmp);
            let leftVal = rootArr[i * 2];
            let rightVal = rootArr[i * 2 + 1];
            if (typeof leftVal === "number") {
                let left = new TreeNode(leftVal);
                map.set(i * 2, left);
                newTreeNode.left = left;
            }
            if (typeof rightVal === "number") {
                let right = new TreeNode(rightVal);
                map.set(i * 2 + 1, right);
                newTreeNode.right = right;
            }
        }
    }
    return root;
};
```

##### （错解2）

递归写的，可能是由于我的思路局限在用数组存储完全二叉树了，再次超时

```javascript
var serialize = function(root) {
    const result = [];

    function dfs(root, i) {
        result[i] = root.val;
        if (root.left) {
            dfs(root.left, i * 2);
        }
        if (root.right) {
            dfs(root.right, i * 2 + 1);
        }
    }

    if (root) {
        dfs(root, 1);
    }
    result.shift();
    return JSON.stringify(result);
};

var deserialize = function(data) {
    let rootArr = JSON.parse(data);
    if (!rootArr) {
        return null;
    }
    rootArr.unshift(null);

    let rootVal = rootArr[1];
    if (typeof rootVal !== 'number') {
        return null;
    }
    let root = new TreeNode(rootVal);

    function dfs(parent, i) {
        if (typeof rootArr[i * 2] === 'number') {
            parent.left = new TreeNode(rootArr[i * 2]);
            dfs(parent.left, i * 2);
        }
        if (typeof rootArr[i * 2 + 1] === 'number') {
            parent.right = new TreeNode(rootArr[i * 2 + 1]);
            dfs(parent.right, i * 2 + 1);
        }
    }
    dfs(root, 1);

    return root;
};
```

#### 别人的写法：

##### dfs：

```javascript
const serialize = root => {
    if (!root) {
        return "X,"
    }
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);
    return root.val + "," + leftSerialized + rightSerialized;
}

const buildTree = list => {
    const nodeVal = list.shift();
    if (nodeVal === "X") {
        return null;
    }
    const node = new TreeNode(nodeVal);
    node.left = buildTree(list);
    node.right = buildTree(list);
    return node;
}

const deserialize = data => {
    const list = data.split(",");
    return buildTree(list);
}
```

##### bfs:

```javascript
const deserialize = data => {
    const list = data.split(",");
    return buildTree(list);
}

const serialize = root => {
    const queue = [root];
    let res = [];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        else {
            res.push("X");
        }
    }
    return res.join(",")
}

const deserialize = data => {
    if (data == "X") {
        return null;
    }
    const list = data.split(",");
    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1;
    while (cursor < list.length) {
        const node = queue.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];
        if (leftVal !== "X") {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal !== "X") {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
}
```

# 1014. Best Sightseeing Pair

Given an array `A` of positive integers, `A[i]` represents the value of the `i`-th sightseeing spot, and two sightseeing spots `i` and `j` have distance `j - i` between them.

The *score* of a pair (`i < j`) of sightseeing spots is (`A[i] + A[j] + i - j)` : the sum of the values of the sightseeing spots, **minus** the distance between them.

Return the maximum score of a pair of sightseeing spots.

**Example 1:**

```
Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
```

**Note:**

1. `2 <= A.length <= 50000`
2. `1 <= A[i] <= 1000`

##### 2020.06.17

##### 我的思路：

​	失败的男人

```javascript
var maxScoreSightseeingPair = function(A) {
    let max = -Infinity;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            max = Math.max(max, A[j] + A[i] + i - j);
        }
    }
    return max;
};
```

##### 别人的思路：

把A[i] + A[j] + i - j拆分成A[i] + i 和 A[j] + j两部分，对于统计景点的 A[j] - j 是固定的，因此最大化就是切[0, j - 1]中的 A[i] + i 的最大值。

时间复杂度O(n)

```javascript
var maxScoreSightseeingPair = function(A) {
    let res = 0;
    let mx = A[0] + 0;
    
    for (let j = 1; j < A.length; j++) {
        res = Math.max(res, mx + A[j] - j);
        mx = Math.max(mx, A[j] + j)
    }
    return res;
};
```

# 79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

**Example:**

```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
```

**Constraints:**

- `board` and `word` consists only of lowercase and uppercase English letters.
- `1 <= board.length <= 200`
- `1 <= board[i].length <= 200`
- `1 <= word.length <= 10^3`

##### 2020.06.19

#### 我的方法

##### 回溯

思路是正确的，但是写的着实有几分丑。

碰到一个等于word[0]的点，就找它的上下左右，递归下去，把每个经过的点先改成```""```，等递归返回后再改回来。

还有种思路是用visited二维数组记录遍历过的点

**注：**二维数组找路径常用回溯

```javascript
var exist = function(board, word) {
    if (!board) {
        return false;
    }
    const HEIGHT = board.length;

    if (!HEIGHT) {
        return false;
    }

    const WIDTH = board[0].length

    if (!WIDTH) {
        return false;
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] === word[0]) {
                board[i][j] = "";
                if (dfs(i, j, 1)) {
                    return true;
                }
                board[i][j] = word[0];
            }
        }
    }

    return false;

    function dfs(i, j, k) {

        if (k === word.length) {
            return true;
        }

        if (i > 0 && board[i - 1][j] === word[k]) {
            board[i - 1][j] = "";
            if (dfs(i - 1, j, k + 1)) {
                return true;
            }
            board[i - 1][j] = word[k];
        }

        if (i < HEIGHT - 1 && board[i + 1][j] === word[k]) {
            board[i + 1][j] = "";
            if (dfs(i + 1, j, k + 1)) {
                return true;
            }
            board[i + 1][j] = word[k];
        }

        if (j > 0 && board[i][j - 1] === word[k]) {
            board[i][j - 1] = "";
            if (dfs(i, j - 1, k + 1)) {
                return true;
            }
            board[i][j - 1] = word[k];
        }

        if (j < WIDTH - 1 && board[i][j + 1] === word[k]) {
            board[i][j + 1] = "";
            if (dfs(i, j + 1, k + 1)) {
                return true;
            }
            board[i][j + 1] = word[k];
        }

        return false;
    }
};
```

##### 写的好看的回溯！

```javascript
var exist = function(board, word) {
    if (!board) {
        return false;
    }

    const HEIGHT = board.length;
    if (!HEIGHT) {
        return false;
    }

    const WIDTH = board[0].length;
    if (!WIDTH) {
        return false;
    }

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    function dfs(i, j, k) {
        if (i < 0 || i === HEIGHT 
            || j < 0 || j === WIDTH 
            ||  board[i][j] !== word[k]) {
            return false
        }

        if (k === word.length - 1) {
            return true;
        }

        board[i][j] = "";
        let res = dfs(i, j + 1, k + 1) 
            || dfs(i + 1, j, k + 1) 
            || dfs(i, j - 1, k + 1) 
            || dfs(i - 1, j, k + 1);
            
        board[i][j] = word[k];
        return res;

    }

    return false;
};
```

# 10. Regular Expression Matching

Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'`.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
```

The matching should cover the **entire** input string (not partial).

**Note:**

- `s` could be empty and contains only lowercase letters `a-z`.
- `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

**Example 1:**

```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Example 4:**

```
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

**Example 5:**

```
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```

#### 2020.06.20

#### 我的解决方法	

我没写出来

#### 别人的答案

我的理解写在注释中

```javascript
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    //dp数组 dp[i][j]表示s[i - 1]和p[j - 1]的匹配情况
    const dp = new Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        dp[i] = new Array(pLen + 1).fill(false);
    }
    dp[0][0] = true;

    //这个循环是判断是否存在s=""，同时p=".*a*c*"这类的情况
    for (let i = 0; i < p.length; i++) {
        if (p[i] == "*" && dp[0][i - 1]) {
            dp[0][i + 1] = true;
        }
    }

    for (let i = 0; i < sLen; i++) {
        for (let j = 0; j < pLen; j++) {
            //p[j] === '.'时，p[j]可以匹配任何s[i]，所以直接dp[i + 1][j + 1] = dp[i][j];
            if (p[j] === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
             //p[j] === s[i]时,所以直接dp[i + 1][j + 1] = dp[i][j];
            if (p[j] === s[i]) {
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] === "*") {
                //下个if表示p[j] === '*'，但是会忽略掉前面一个字符的情况
                if (p[j - 1] != s[i] && p[j - 1] != '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                }
                //重点
                //dp[i + 1][j + 1] = dp[i][j + 1] //in this case, a* counts as multiple a
				//dp[i + 1][j + 1] = dp[i + 1][j] // in this case, a* counts as single a
				//dp[i + 1][j + 1] = dp[i + 1][j-1] // in this case, a* counts as empty
                else {
                    dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1];
                }
            }
        }
    }
    return dp[sLen][pLen];
}
```

