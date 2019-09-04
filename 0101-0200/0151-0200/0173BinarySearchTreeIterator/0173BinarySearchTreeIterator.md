# 173. Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling `next()` will return the next smallest number in the BST.

**Example:**

**![img](https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png)**

```
BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
```

**Note:**

- `next()` and `hasNext()` should run in average O(1) time and uses O(*h*) memory, where *h* is the height of the tree.
- You may assume that `next()` call will always be valid, that is, there will be at least a next smallest number in the BST when `next()` is called.

##### 2019.09.04

##### 	我的思路：

​		看到空间复杂度O(h)就知道这题的意思是让你用栈中序遍历。只是要把中序的while循环拆成一次次的next调用

```javascript
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.cur = root;
    this.stack = [];
    while (this.cur) {
        this.stack.push(this.cur);
        this.cur = this.cur.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        while (this.cur) {
            this.stack.push(this.cur);
            this.cur = this.cur.left;
        }
        this.cur = this.stack.pop();
        let result = this.cur.val;
        this.cur = this.cur.right;
        return result;
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (!this.cur && !this.stack.length) {
        return false;
    }    
    return true;
};
```

##### 	别人的方法：

​		和我思路一样，写的更简洁一些

```javascript
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.pushAll(root);
};

BSTIterator.prototype.pushAll = function(node) {
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let result = this.stack.pop();
    this.pushAll(result.right);
    return result.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

```

