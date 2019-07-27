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

# 102. Binary Tree Level Order Traversal

Given a binary tree, return the *level order* traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

##### 2019.07.25

##### 我的思路：

​		利用队列层次遍历bfs，为了判断是哪一层的，我采取的是增加一个下标队列，用来记录结点的对应完全二叉树的下标。真是野路子！

```javascript
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let tmp = 0;
    let queue = [root];
    let indexQueue = [1];
    while (queue.length) {
        let node = queue.shift();
        let index = indexQueue.shift();
        if (index >= (2 ** (tmp + 1))) {
            tmp++;
        }
        if (!result[tmp]) {
            result[tmp] = [node.val];
        }
        else {
            result[tmp].push(node.val);
        }
        if (node.left) {
            queue.push(node.left);
            indexQueue.push(index * 2);
        }
        if (node.right) {
            queue.push(node.right);
            indexQueue.push(index * 2 + 1);
        }
    }
    return result;
};
```

##### 别人的写法：

###### 		写法1：

​		也是利用队列bfs，但不同的是它每次换层的时候都会记录当前队列的长度，这样可以区分层次，比我的优秀。

```javascript
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let level = queue.length;
        let tmp = [];
        while (level--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            tmp.push(node.val);
        }
        result.push(tmp);
    }
    return result;
}
```

###### 		写法2：

​		dfs，用level参数来标注属于哪一层，也是精致！

```javascript
var levelOrder = function(root) {
    let result = [];
    levelHelper(result, root, 0);
    return result;
}

function levelHelper(list, node, level) {
    if (!node) {
        return;
    }
    if (level >= list.length) {
        list.push([]);
    }
    list[level].push(node.val);

    levelHelper(list, node.left, level + 1);
    levelHelper(list, node.right, level + 1);
}
```

# 103. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the *zigzag level order* traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its zigzag level order traversal as:

```
[
  [3],
  [20,9],
  [15,7]
]
```

##### 2019.07.25

##### 我的思路：

​		首先，我感觉我写的两种方法都是作弊的。都是判断奇偶了，是奇就头插，是偶就尾插，并不是Z型遍历了，但我看别人的答案也这么写。要真正Z型遍历，我的思路是利用队列，如果把下一层次的结点在目前遍历的那层结点的最后后面头插或者尾插。

###### 		作弊的方法1：

​		递归，判断是奇数层还是偶数层

```javascript
var zigzagLevelOrder = function(root) {
    let result = [];
    levelHelper(root, result, 0);
    return result;
};

function levelHelper(node, list, level) {
    if (!node) {
        return;
    }
    if (level >= list.length) {
        list.push([]);
    }
    const isOdd = level % 2;
    if (isOdd) {
        list[level].unshift(node.val);
    }
    else {
        list[level].push(node.val);
    }
    levelHelper(node.left, list, level + 1);
    levelHelper(node.right, list, level + 1);
}
```

###### 		作弊的方法2：

​		增加一个布尔值来判断是奇数层次还是偶数层次，奇数层就头插，偶数层尾插。因为把判断放在while外面可以避免在循环中判断的开销，所以我选择把判断提出来了，这样导致代码冗长了一些

```javascript
var zigzagLevelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    let isOdd = false;
    while (queue.length) {
        let len = queue.length;
        let tmp = [];
        if (isOdd) {
            while (len--) {
                let node = queue.shift();
                tmp.unshift(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        else {
            while (len--) {
                let node = queue.shift();
                tmp.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        result.push(tmp);
        isOdd = !isOdd;
    }
    return result;
};
```

###### 写法2：

​		dfs，用level参数来标注属于哪一层，也是精致！

```javascript
var levelOrder = function(root) {
    let result = [];
    levelHelper(result, root, 0);
    return result;
}

function levelHelper(list, node, level) {
    if (!node) {
        return;
    }
    if (level >= list.length) {
        list.push([]);
    }
    list[level].push(node.val);

    levelHelper(list, node.left, level + 1);
    levelHelper(list, node.right, level + 1);
}
```

# 104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.

##### 2019.07.26

##### 我的思路：

​		递归dfs，但我这个递归写的挺特么丑的。

```javascript
var maxDepth = function(root) {
    return computedHeight(root, 0);
};

function computedHeight(node, height) {
    if (!node) {
        return height;
    }
    return Math.max(computedHeight(node.left, height + 1), computedHeight(node.right, height + 1));
}
```

##### 别人的写法：

​		递归dfs

```javascript
var maxDepth = function(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

# 105. Construct Binary Tree from Preorder and Inorder Traversal

Given preorder and inorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

##### 2019.07.26

##### 我的思路：

###### 		第一版：

​		疯狂划分！我的思路就是递归，找到每次递归中先序数组中的第一个元素，他就是现在的根节点，然后把查到这个根节点在中序数组中的下标i，中序下标左边的值0 ~ i - 1 就是他的左子树，右边 i + 1就是他的右子树。同理在前序数组中，从左到右0 ~ i - 1就是他的左子树的前序，剩下的就是右子树的前序。

###### 		注：我一开始写的时候发生重大失误，忘了i的左边0~i - 1的长度也是在先序数组中划分的长度，还在其中判断了从i的左边结点在前序下标的最大值，用来判断左右子树的前序划分。属实铁憨憨

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 

    let indexOfPreorder = -Infinity;
    for (let i = 0; i < indexOfInorder; i++) {
        let tmp = preorder.indexOf(inorder[i]);
        if (tmp > indexOfPreorder) {
            indexOfPreorder = tmp;
        }
    }
    
    let preorderLeft = preorder.slice(0, indexOfPreorder + 1);
    let preorderRight = preorder.slice(indexOfPreorder + 1);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};
```

###### 		第一版优化：

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 
    
    let preorderLeft = preorder.slice(0, indexOfInorder);
    let preorderRight = preorder.slice(indexOfInorder);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};
```

##### 别人的写法：

##### 		方法1：

​		递归,跟我的思路一样，但是他划分数组并没有直接物理划分，而是用的下标值来判断，大幅度减少了开销。这样操作就像之前我dfs喜欢新建数组，现在知道在dfs前先入栈，然后dfs出来再出栈。值得学习

```javascript
var buildTree = function(preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder);
}

function helper(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }
    let root = new TreeNode(preorder[preStart]);
    let inIndex = inorder.indexOf(root.val);
    root.left = helper(preStart + 1, inStart, inIndex - 1,  preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd,  preorder, inorder);
    return root;
}
```

##### 		方法2：

​		非递归，属实牛批

```javascript
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    let stack = [];
    let root = new TreeNode(preorder[0]);
    let cur = root;
    for (let i = 1, j = 0; i < preorder.length; i++) {
        if (cur.val !== inorder[j]) {
            cur.left = new TreeNode(preorder[i]);
            stack.push(cur);
            cur = cur.left;
        }
        else {
            j++;
            while (stack.length && stack[stack.length - 1].val === inorder[j]) {
                cur = stack.pop();
                j++;
            }
            cur = cur.right = new TreeNode(preorder[i]);
        }
    }
    return root;
}
```

# 107. Binary Tree Level Order Traversal

Given a binary tree, return the *bottom-up level order* traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```
[
  [15,7],
  [9,20],
  [3]
]
```

##### 2019.07.27

##### 我的思路：

##### 		方法1：

​		递归dfs

```javascript
var levelOrderBottom = function(root) {
    let result = [];
    levelHelper(root, result, 0);
    return result;
};

function levelHelper(node, list, level) {
    if (!node) {
        return;
    }
    let depth = list.length;
    if (depth === level) {
        list.unshift([]);
        depth += 1;
    }
    list[depth - level - 1].push(node.val);
    levelHelper(node.left, list, level + 1);
    levelHelper(node.right, list, level + 1);
}
```

##### 		方法2：

​		利用队列bfs

```javascript
var levelOrderBottom = function(root) {
    let queue = [root];
    let result = [];
    if (!root) {
        return result;
    }
    while (queue.length) {
        let len = queue.length;
        let tmp = [];
        while (len--) {
            let node = queue.shift();
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.unshift(tmp);
    }
    return result;
}
```

# 112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

##### 2019.07.27

##### 我的思路：

##### 方法1：

​		递归dfs

```javascript
var hasPathSum = function(root, sum) {
    return dfs(root, sum);
};

function dfs(node, num) {
    if (!node) {
        return false;
    }
    if (!node.left && !node.right) {
        return node.val === num;
    }
    num = num - node.val;
    return dfs(node.left, num) || dfs(node.right, num);
}
```

##### 方法2：

​		利用队列bfs

```javascript
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    let sumQueue = [sum - root.val];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        let num = sumQueue.shift();
        if (num === 0 && !node.left && !node.right) {
            return true;
        }
        if (node.left) {
            queue.push(node.left);
            sumQueue.push(num - node.left.val);
        }
        if (node.right) {
            queue.push(node.right);
            sumQueue.push(num - node.right.val);
        }
    }
    return false;
}
```

##### 别人的写法：

​		非递归后序遍历

```javascript
var hasPathSum = function(root, sum) {
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (sum == 0 && !cur.left && !cur.right) {
            return true;
        }

        if (cur.right && pre != cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            sum += cur.val;
            cur = null;
        }
    }
    return false;
}
```

