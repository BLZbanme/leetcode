# 331. Verify Preorder Serialization of a Binary Tree

One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as `#`.

```
     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
```

For example, the above binary tree can be serialized to the string `"9,3,4,#,#,1,#,#,2,#,6,#,#"`, where `#` represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character `'#'` representing `null` pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as `"1,,3"`.

**Example 1:**

```
Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
```

**Example 2:**

```
Input: "1,#"
Output: false
```

**Example 3:**

```
Input: "9,#,#,1"
Output: false
```

##### 2020.01.04

##### 	我的思路：

​		利用的是栈来进行先序遍历，基础！

```javascript
var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let cur = orderArray[0];
    let stack = [];
    let i = 0;
    while (stack.length || (cur != '#' && cur)) {
        while (cur != '#' && cur) {
            stack.push(cur);
            cur = orderArray[++i];
        }
        stack.pop();
        if (i < orderArray.length - 1) {
            cur = orderArray[++i];
        }
        else {
            return false;
        }
    }
    return i == orderArray.length - 1 || i == orderArray.length;
};
```

##### 别人的写法：

​		根据二叉树的入度等于出度，因为此题的场景中，所有非空结点的出度都是2

```javascript
var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let diff = 1;
    orderArray.forEach(e => {
        if (--diff < 0) {
            return false;
        }
        if (e != '#') {
            diff += 2;
        }
    });
    return !diff;
}
```