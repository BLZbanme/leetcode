# 106. Construct Binary Tree from Inorder and Postorder Traversal

Given inorder and postorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

##### 2019.07.29

##### 我的思路：

##### 		疯狂递归

​		先写了直接划分数组的，然后写了个根据下标来划的

```javascript
var buildTree = function(inorder, postorder) {
    if (!postorder.length) {
        return null;
    }
    let root = new TreeNode(postorder.pop());
    let index = inorder.indexOf(root.val);

    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);

    let postorderLeft = postorder.slice(0, index);
    let postorderRight = postorder.slice(index);

    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);
    return root;
};
```

```javascript
var buildTree = function(inorder, postorder) {
    const N = postorder.length;
    if (!postorder.length) {
        return null;
    }
    return buildTreeHelper(inorder, postorder, 0, N - 1, 0, N - 1);
};

var buildTreeHelper = function(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd) {
    if (inorderStart > inorderEnd) {
        return null;
    }
    let root = new TreeNode(postorder[postorderEnd]);
    let index = inorder.indexOf(root.val);
    root.left = buildTreeHelper(inorder, postorder, inorderStart, index - 1, postorderStart, postorderStart + index - inorderStart - 1);
    root.right = buildTreeHelper(inorder, postorder, index + 1, inorderEnd, postorderStart + index - inorderStart, postorderEnd - 1);
    return root;
}
```

# 113. Path Sum II

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Return:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

##### 2019.07.30

##### 我的思路：

##### 方法1：

​		非递归

```javascript
var pathSum = function(root, sum) {
    let result = [];
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
        if (sum === 0 && !cur.left && !cur.right) {
            result.push(stack.map(e => e.val));
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
    return result;
};
```

##### 方法2：

​		dfs

```javascript
var pathSum = function(root, sum) {
    let result = [];
    let list = [];
    dfs(result, list, root, sum);
    return result;
}

function dfs(result, list, node, sum) {
    if (!node) {
        return;
    }
    list.push(node.val);
    if (node.val === sum && !node.left && !node.right) {
        result.push(Array.from(list));
        list.pop();
        return;
    }
    dfs(result, list, node.left, sum - node.val);
    dfs(result, list, node.right, sum - node.val);
    list.pop();
}
```

# 114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

```
    1
   / \
  2   5
 / \   \
3   4   6
```

The flattened tree should look like:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

##### 2019.07.30

##### 我的思路：

##### 方法1：

​		铁憨憨版，我这种并不是原地实现，实属铁憨憨

```javascript
var flatten = function(root) {
    if (!root) {
        return null;
    }
    let arr = [];
    dfs(root, arr);
    let n = arr.length - 1;
    while (n--) {
        arr[n].left = null;
        arr[n].right = arr[n + 1];
    }
    return root;
};

function dfs(node, arr) {
    if (!node) {
        return;
    }
    arr.push(node);
    dfs(node.left, arr);
    dfs(node.right, arr);
}
```

##### 别人的方法：

##### 方法1：

​		递归，RLD的后序遍历，一开始是这样写的

```javascript
var pre = null;

var flatten = function(root) {
    if (!root) {
        return;
    }
    flatten(root.right);
    flatten(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
}
```

​		由于运行测试用例时，pre全局声明不会把它重新置为null，导致出现bug。所以我先改了一版下面的。

```javascript
let pre = null;

var flatten = function(root) {
    dfs(root);
    pre = null;
}

function dfs(root) {
    if (!root) {
        return;
    }
    dfs(root.right);
    dfs(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
}
```

​		又由于全局变量并不是一种好的解决方案，我使用了闭包。

```javascript
var flatten = function(root) {
    let pre = null;
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.right);
        dfs(root.left);
        root.right = pre;
        root.left = null;
        pre = root;
    }
    dfs(root);
}
```

​		最后我干脆用非递归写了一遍

```javascript
var flatten = function(root) {
    let stack = [];
    let pre = null;
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack[stack.length - 1];
        if (cur.left && cur.left !== pre) {
            cur = cur.left;
        }
        else {
            cur.right = pre;
            cur.left = null;
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return root;
}
```

##### 注：高亮答案中提到了morris遍历，周末看

# 119. Pascal's Triangle II

Given a non-negative index *k* where *k* ≤ 33, return the *k*th index row of the Pascal's triangle.

Note that the row index starts from 0.

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 3
Output: [1,3,3,1]
```

**Follow up:**

Could you optimize your algorithm to use only *O*(*k*) extra space?

##### 2019.07.31

##### 我的思路：

##### 		方法1：

​		数学方法：

```javascript
var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    for (let i = 1; i < rowIndex; i++) {
        result.push(Cmn(rowIndex, i));
    }
    result.push(1);
    return result;
};

// function Cmn(m, n) {
//     let result = 1;
//     let down = 1;
//     while (n) {
//         result *= m--;
//         down *= n--;
//     }
//     return result / down;
// }

//优化后Cmn
function Cmn(m, n) {
    if (n > m / 2) {
        n = m - n;
    }
    let result = 1;
    let down = 1;
    while (n) {
        result *= m--;
        down *= n--;
    }
    return result / down;
}
```

##### 		数学方法的最终无敌优化版，补于20190802

​		当时就想到了Cmn可以用dp求，但是当时懒得写，后来越想越觉得不该偷懒，于是补上

```javascript
var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    let dp = [1];
    var i;
    for (i = 1; i <= rowIndex / 2; i++) {
        dp[i] = dp[i - 1] * (rowIndex - i + 1) / i;
        result.push(dp[i])
    }
    i -= rowIndex % 2 ? 0 : 1;
    while (i >= 1) {
        result.push(dp[--i]);
    }
    return result;
};
```

写完之后又发现还是有冗余，下面才是

##### 		究极进化版：

```javascript
var getRow = function(rowIndex) {
    let dp = [1];
    if (!rowIndex) {
        return dp;
    }
    var i;
    for (i = 1; i <= rowIndex / 2; i++) {
        dp[i] = dp[i - 1] * (rowIndex - i + 1) / i;
    }
    i -= rowIndex % 2 ? 0 : 1;
    while (i >= 1) {
        dp.push(dp[--i]);
    }
    return dp;
};
```



##### 		方法二：

​		dp

```javascript
var getRow = function(rowIndex) {
    if (!rowIndex) {
        return [1];
    }
    let pre = [1];
    let level = 1;
    while (level <= rowIndex) {
        let tmp = [1];
        for (let i = 0; i < level - 1; i++) {
            tmp.push(pre[i] + pre[i + 1]);
        }
        tmp.push(1);
        pre = tmp;
        level++;
    }
    return pre;
}
```

##### 别人的方法

​		最给力的dp：

```javascript
var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        result.unshift(1);
        for (let j = 1; j < result.length - 1; j++) {
            result[j] = result[j + 1] + result[j];
        }
    }
    return result;
}
```

# 117. Populating Next Right Pointers in Each Node II

Given a binary tree

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.



**Example:**

![img](https://assets.leetcode.com/uploads/2019/02/15/117_sample.png)

```
Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
```

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

##### 2019.08.02

##### 我的思路：

##### 方法1：

​		思路写在代码中了，写的有点丑

```javascript
var connect = function(root) {
    //记录每一层的第一个节点
    let first = root;
    //记录当前节点
    let cur;
    //记录下一层的第一个节点记录
    let pre = null;
    //记录下一层第二个节点记录
    let aft = null;
    while (first) {
        //每一层cur初始化为first
        cur = first;
        //first置空，判断下一层还有没有结点，用来跳出循环
        first = null;

        //此while用来找到下一层第一个节点
        while (cur) {
            if (cur.left) {
                pre = cur.left;
                first = pre;
                break;
            }
            else if (cur.right) {
                pre = cur.right;
                first = pre;
                cur = cur.next;
                break;
            }
            else {
                cur = cur.next;
            }
        }

        //此while用来找到下一层第二个节点， 并把pre的next指向aft
        //并把pre赋值为aft，循环可以把整层的next连接完
        //cur.left !== pre防止重新计算
        while (cur) {
            if (cur.left && cur.left !== pre) {
                aft = cur.left;
                pre.next = aft;
                pre = aft;
            }
            if (cur.right && cur.right !== pre) {
                aft = cur.right;
                pre.next = aft;
                pre = aft;
            }
            cur = cur.next;
        }
    }
    return root;
};
```

##### 别人的方法：

##### 方法1：

​		他比我优化的部分就是在循环中增加条件prev是否为空，用来判断是否找到了下一层的第一个结点，并且去掉了我写的aft冗余变量。

```javascript
var connect = function(root) {
    let head = null;
    let prev = null;
    let cur = root;
    while (cur) {
        while (cur) {
            if (cur.left) {
                if (prev) {
                    prev.next = cur.left;
                }
                else {
                    head = cur.left;
                }
                prev = cur.left;
            }
            if (cur.right) {
                if (prev) {
                    prev.next = cur.right;
                }
                else {
                    head  = cur.right;
                }
                prev = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        prev = null;
        head = null;
    }
    return root;
}
```

##### 方法2：

​		最牛逼的，思路就是增加一个临时调节点（就如在链表的题中常做的），这样就不用找下一层的第一个结点，直接就是怼！

```javascript
var connect = function(root) {
    let result = root;
    while (root) {
        let tmp = new Node(0);
        let cur = tmp;
        while (root) {
            if (root.left) {
                cur.next = root.left;
                cur = cur.next;
            }
            if (root.right) {
                cur.next = root.right;
                cur = cur.next;
            }
            root = root.next;
        }
        root = tmp.next;
    }
    return result;
}
```

