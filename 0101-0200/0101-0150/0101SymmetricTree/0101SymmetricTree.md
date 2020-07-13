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

#### 2019.07.24

#### 	我的思路：

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

````javascript
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
````

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

#### 2020.07.13

#### redo

#### 我的方法

##### 递归

```javascript
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    
    function dfs(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }

        if (!node1 || !node2 || node1.val != node2.val) {
            return false;
        }

        return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
    }

    return dfs(root.left, root.right);
};
```

##### 非递归

我是层次遍历，每个大层次的时候判断这一层是否是一个首尾相同的数组

```javascript
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    const queue = [root];
    while (queue.length) {
        if (checkIsSymmetric(queue)) {
            let length = queue.length;
            while (length--) {
                let cur = queue.shift();
                if (cur) {
                    queue.push(cur.left);
                    queue.push(cur.right);
                }
            }
        }
        else {
            return false;
        }
    }

    return true;
}

function checkIsSymmetric(arr) {

    let length = arr.length;
    if (length === 1) {
        return true;
    }

    if (length & 1) {
        return false;
    }

    for (let i = 0; i < (length >> 1); i++) {
        if (!arr[i] && !arr[length - 1 - i]) {
            continue;
        }
        
        if (!arr[i] || !arr[length - 1 - i] || arr[i].val != arr[length - 1 - i].val) {
            return false;
        }
    }

    return true;
}
```

#### 别人的方法

##### 非递归

```javascript
var isSymmetric = function(root) {
    const queue = [];

    function check(node1, node2) {
        queue.push(node1);
        queue.push(node2);

        while (queue.length) {
            let p = queue.shift();
            let q = queue.shift();

            if (!p && !q) {
                continue;
            }
            if (!p || !q || p.val !== q.val) {
                return false;
            }

            queue.push(p.left);
            queue.push(q.right);

            queue.push(p.right);
            queue.push(q.left);
        }

        return true;
    }

    return check(root.left, root.right);
};
```

