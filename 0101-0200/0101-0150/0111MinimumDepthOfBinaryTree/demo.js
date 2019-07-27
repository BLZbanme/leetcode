/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let height = 0;
    while (queue.length) {
        height++;
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            if (!node.left && !node.right) {
                return height;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
};

var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(3);
var b = new TreeNode(9);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);


a.left = b;
a.right = c;
c.left = d;
c.right = e;


console.log(minDepth(a))