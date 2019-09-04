/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(7);
var b = new TreeNode(3);
var c = new TreeNode(15);
var d = new TreeNode(9);
var e = new TreeNode(20);
a.left = b;
a.right = c;
c.left = d;
c.right = e;

var bst = new BSTIterator(a);
bst.next();
bst.next();
bst.hasNext();
bst.next();
bst.hasNext();
bst.next();
bst.hasNext();
bst.next();
bst.hasNext();
bst.next();