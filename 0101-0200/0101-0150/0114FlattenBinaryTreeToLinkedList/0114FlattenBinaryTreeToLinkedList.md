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

##### 	我的思路：

##### 				方法1：

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

##### 				别人的方法：

##### 方法1：

​		递归，RLD的后序遍历，一开始是这样写的

````javascript
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
````

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

````javascript
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
````

​		最后我干脆用非递归写了一遍

````javascript
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
````

##### 注：高亮答案中提到了morris遍历，周末看

#### 2020.08.02

##### redo

体会:先序遍历反过来就是右左中遍历