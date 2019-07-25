# 94. Binary Tree Inorder Traversal

Given *n*, how many structurally unique **BST's** (binary search trees) that store values 1 ... *n*?

**Example:**

```
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

##### 2019.07.22

##### 我的思路：

​		看到这题感觉多半是dp的问题，但是我自己没有推导出关系来，直到看到别人这个解释

```
/*    
Hope it will help you to understand :
    
    n = 0;     null   
    
    count[0] = 1
    
    
    n = 1;      1       
    
    count[1] = 1 
    
    
    n = 2;    1__       			 __2     
    		      \					/                 
    		     count[1]	   	count[1]	
    
    count[2] = 1 + 1 = 2
    
    
    
    n = 3;    1__				      __2__	                   __3
    		      \		            /       \			      /		
    		  count[2]		  count[1]    count[1]		count[2]
    
    count[3] = 2 + 1 + 2  = 5
    
    
    
    n = 4;    1__  					__2__					   ___3___                  
    		      \				 /        \					  /		  \			
    		  count[3]		 count[1]    count[2]		  count[2]   count[1]
    
                 __4				
               /
           count[3]   
    
    count[4] = 5 + 2 + 2 + 5 = 14     
    

And  so on...
*/
```

```javascript
var numTrees = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
```

# 100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example 1:**

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

**Example 2:**

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

**Example 3:**

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

##### 2019.07.22

##### 我的思路：

​		递归

```javascript
var isSameTree = function(p, q) {
    if ((!p && !q) || (p && q && p.val === q.val)) {
        if (!p && !q) {
            return true;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    else {
        return false;
    }    
};
```

###### 优化下：

```javascript
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    };
    if (!p || !q) {
        return false;
    }
    return p.val === q.val ? isSameTree(p.left, q.left) 
        && isSameTree(p.right, q.right) : false;
};
```

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

##### 我的思路：

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

# 98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

```
    2
   / \
  1   3

Input: [2,1,3]
Output: true
```

**Example 2:**

```
    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

##### 2019.07.24

##### 我的思路：

##### 方法1：

​		我先想到的是递归

###### 第一版：有错误，错误原因是只判断了每个结点和直接左右子节点的大小差异

```javascript
var isValidBST = function(root) {
    if (!node) {
        return true;
    }
    if ((!node.left || (node.val > node.left.val))
        && (!node.right || (node.val < node.right.val))
    ) {
        return isValidBST(node.left, lo, node.val) && isValidBST(node.right, node.val, hi);
    }
    return false;
};
```

###### 第二版：增加了一个上下限值判断，然后我发现可以优化就有了第三版

```javascript
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    if ((!node.left || (node.val > node.left.val))
        && (!node.right || (node.val < node.right.val))
    ) {
        return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
    }
    return false;
}
```

###### 第三版：

```javascript
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
}
```

##### 方法2：

​		中序遍历，判断是否严格递增序列

```javascript
var isValidBST = function(root) {
    let tmp = -Infinity;
    let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= tmp) {
            return false;
        }
        tmp = root.val;
        root = root.right;
    }
    return true;
}
```

# 101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following `[1,2,2,null,3,null,3]` is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

**Note:**
Bonus points if you could solve it both recursively and iteratively.

##### 2019.07.24

##### 我的思路：

​		中序遍历，把便利的点值存在list中，然后判断list中的值是不是首尾相等。

​		**这种写法是错误的应该中序没有存空结点，所以无法判断结点的位置。**

```javascript
var isSymmetric = function(root) {
    let list = [];
    let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root) {
            list.push(root.val);
        }
        root = root.right;
    }
    const N = list.length - 1;
    const mid = Math.floor(list.length / 2);
    for(let i = 0; i < mid; i++) {
        if (list[i] !== list[N - i]) {
            return false;
        }
    }
    return true;
};
```

​		**所以我想到要存相对位置，就把节点全部放到完全二叉树中的对应位置，然后判断完全二叉树的每一层是不是镜像对称的。这样写最大的问题就是最后一层可能全部是都undefined，白白多算了一层，但是由于我没有想到如何不算最后一层额外的undefined，就没有继续优化了。而且别人的思路都更清晰，我这个算是由于第一种思路没走通，强行剑走偏锋的**

```javascript
var isSymmetric = function(root) {
    let list = [null];
    valid(root, list, 1);
    const len = list.length;
    const mid = Math.floor(len / 2);
    for (let i = 2; i < mid; i <<= 1) {
        for(let j = 0; j < i / 2; j++) {
            if (list[i + j] != list[2 * i - j - 1]) {
                return false;
            }
        }
    }
    return true;
};

function valid(node, list, index) {
    if (node) {
        list[index] = node.val;
    }
    else {
        list[index] = undefined;
        return;
    }
    valid(node.left, list, index * 2);
    valid(node.right, list, 2 * index + 1);
}
```

##### 别人的写法：

###### 		递归的：

```javascript
var isSymmetric = function(root) {
    return !root || isMirror(root.left, root.right);
}

function isMirror(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }
    if (!node1 || !node2) {
        return false;
    }
    if (node1.val === node2.val) {
        return isMirror(node1.left, node2.right)
        && isMirror(node1.right, node2.left);
    }
    return false;
}
```

###### 		非递归的：

​		主要的思想是用队列按层次遍历

```javascript
var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        if (!t1 && !t2) {
            continue;
        }
        if (!t1 || !t2) {
            return false;
        }
        if (t1.val !== t2.val) {
            return false;
        }
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    return true;
}
```
