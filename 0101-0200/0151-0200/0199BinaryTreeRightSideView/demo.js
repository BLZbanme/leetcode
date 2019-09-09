/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        result.push(queue[len - 1].val);
        while (len--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
};

var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let result = [];

    function recursion(node, hight) {
        if (!node) {
            return;
        }
        if (!result[hight]) {
            result.push(node.val);
        }
        if (node.right) {
            recursion(node.right, hight + 1);
        }
        if (node.left) {
            recursion(node.left, hight + 1);
        }
    }

    recursion(root, 0);
    return result;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(5);
var e = new TreeNode(4);

a.left = b;
a.right = c;
b.right = d;
c.right = e;

console.log(rightSideView(a));