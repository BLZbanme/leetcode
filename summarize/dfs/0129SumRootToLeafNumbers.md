# 129. Sum Root to Leaf Numbers

Given a binary tree containing digits from `0-9` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path `1->2->3` which represents the number `123`.

Find the total sum of all root-to-leaf numbers.

**Note:** A leaf is a node with no children.

**Example:**

```
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**

```
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

##### 2019.08.08

##### 我的方法：

​		dfs非递归

````javascript
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let stack = [];
    let numStack = [];
    let cur = root;
    let pre = null;
    let sum = 0;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            numStack.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        
        if (cur.right && cur.right !== pre) {
            pre = cur;
            cur = cur.right;
            continue;
        }
        if (!cur.right && !cur.left) {
            sum += +numStack.join("");
        }
        pre = cur;
        stack.pop();
        numStack.pop();
        cur = null;
    }
    return sum;
};
````

​		递归

```javascript
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    function helper(node, stack) {
        stack.push(node.val);
        if (node.left) {
            helper(node.left, stack);
            stack.pop();
        }
        if (node.right) {
            helper(node.right, stack);
            stack.pop();
        }
        if (!node.left && !node.right) {
            sum += +stack.join("");
        }
    }

    helper(root, []);
    return sum;
}
```

##### 别人的方法：

​		别人的递归比我写的好一些

```javascript
var sumNumbers = function(root) {
    return sum(root, 0);
}

function sum(node, s) {
    if (!node) {
        return 0;
    }
    if (!node.right && !node.left) {
        return s * 10 + node.val;
    }
    return sum(node.left, s * 10 + node.val) + sum(node.right, s * 10 + node.val);
}
```
