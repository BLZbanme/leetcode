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

##### 	我的思路：

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

###### 				作弊的方法2：

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

###### 				写法2：

​		dfs，用level参数来标注属于哪一层，也是精致！

````javascript
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
````
