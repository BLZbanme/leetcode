# 95. Unique Binary Search Trees II

Given an integer *n*, generate all structurally unique **BST's** (binary search trees) that store values 1 ... *n*.

**Example:**

```
Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

##### 2019.07.23

##### 	我的思路：

##### 		写法1:

​		昨天写了0096Unique Binary Search Trees后知道了递推关系，先写了第一版dp写法。

​		用一个二维数组dp(i,j)来存储从值为i到j的结点的树。

​		这样我们要求1-n的树有哪些棵，就等于求1-（k - 1）, k , (k + 1) - n，其中k取值为1-n的总数。1-（k - 1）和   (k + 1) - n都是可以跟dp(1, k - 1), dp(k + 1, n)中直接拿到的。

​		因为我们的外循环i代表计算链的长度：先计算长度为2的链（即，1到2、 2到3、3到4之类），再计算长度为3的链，一直到长度为n的链。这样计算可以保证计算长度为m的链时，所需要的最长为m-1的链时存在的。

###### 		注：画蛇添足之处：在multip中，我把leftTrees和rightTrees深复制了，我原来是担心后面的操作会影响前面的树形状，在看了高赞答案后想清楚了。

```javascript
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1);
        dp[i][i] = [new TreeNode(i)];
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            let tmp =  [];
            multip([null], j, dp[j + 1][j + i - 1], tmp);
            for (let k = j + 1; k < i + j - 1; k++) {
                multip(dp[j][k - 1], k, dp[k + 1][j + i - 1], tmp); 
            }
            multip(dp[j][j + i - 2], j + i - 1, [null], tmp);
            dp[j][j + i - 1] = tmp;
        }
    }
    return dp[1][n];
};

function multip(leftTrees, nodeVal, rightTrees, result) {
    let newLeftTrees = JSON.parse(JSON.stringify(leftTrees));
    let newRightTrees = JSON.parse(JSON.stringify(rightTrees));
    for (let left of newLeftTrees) {
        for (let right of newRightTrees) {
            let newNode = new TreeNode(nodeVal);
            newNode.left = left;
            newNode.right = right;
            result.push(newNode);
        }
    }
}
```

##### 		写法1优化：

```javascript
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1);
        dp[i][i] = [new TreeNode(i)];
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            let tmp =  [];
            multip([null], j, dp[j + 1][j + i - 1], tmp);
            for (let k = j + 1; k < i + j - 1; k++) {
                multip(dp[j][k - 1], k, dp[k + 1][j + i - 1], tmp); 
            }
            multip(dp[j][j + i - 2], j + i - 1, [null], tmp);
            dp[j][j + i - 1] = tmp;
        }
    }
    return dp[1][n];
};

function multip(leftTrees, nodeVal, rightTrees, result) {
    for (let left of leftTrees) {
        for (let right of rightTrees) {
            let newNode = new TreeNode(nodeVal);
            newNode.left = left;
            newNode.right = right;
            result.push(newNode);
        }
    }
}
```

##### 别人的写法：

##### 		写法2：dp

​		同样是dp，这位选手跟我的思路有些不同，他的用一个一维的dp数组来存储，数组的下标i代表长度为i的不同形状的树。然后对应不同的值，把这个值与初始0的差作为偏移量，根据不同树的形状赋予值来生成新的树。

###### 		注：他的思路非常新颖，但是应该是没有我的写法1优化后快的，因为它每次clone新树时，会把右子树整个都遍历一遍，而我的每次增加新树都只是给新结点的left和right赋个值就行。

```javascript
var generateTrees = function(n) {
    let result = [];
    result[0] = [];
    if (n == 0) {
        return result[0];
    }
    result[0].push(null);
    for (let len = 1; len <= n; len++) {
        result[len] = [];
        for (let j = 0; j < len; j++) {
            for (let left of result[j]) {
                for (let right of result[len - j - 1]) {
                    let newNode = new TreeNode(j + 1);
                    newNode.left = left;
                    newNode.right = clone(right, j + 1);
                    result[len].push(newNode);
                }
            }
        }
    }
    return result[n];
}

function clone(node, offset) {
    if (!node) {
        return null;
    }
    let newNode = new TreeNode(node.val + offset);
    newNode.left = clone(node.left, offset);
    newNode.right = clone(node.right, offset);
    return newNode;
}
```

##### 		写法3：递归

​		个人分析，递归是不如我的写法1的，但是写法2clone方法太坑了，递归比写法2快也正常。输出的结果也是这样显示的：时间开销由小到大是1-3-2

```javascript
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return genTrees(1, n);
}

function genTrees(start, end) {
    
    let list = [];
    if (start > end) {
        list.push(null);
        return list;
    }

    if (start == end) {
        list.push(new TreeNode(start));
        return list;
    }
    let left;
    let right;
    for (let i = start; i <= end; i++) {
        left = genTrees(start, i - 1);
        right = genTrees(i + 1, end);
        for (let el of left) {
            for (let er of right) {
                let newNode = new TreeNode(i);
                newNode.left = el;
                newNode.right = er;
                list.push(newNode);
            }
        }
    }
    return list;
}
```

#### 2020.07.21

##### redo