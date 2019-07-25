/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let tmp = 0;
    let queue = [root];
    let indexQueue = [1];
    while (queue.length) {
        let node = queue.shift();
        let index = indexQueue.shift();
        if (index >= (2 ** (tmp + 1))) {
            tmp++;
        }
        if (!result[tmp]) {
            result[tmp] = [node.val];
        }
        else {
            result[tmp].push(node.val);
        }
        if (node.left) {
            queue.push(node.left);
            indexQueue.push(index * 2);
        }
        if (node.right) {
            queue.push(node.right);
            indexQueue.push(index * 2 + 1);
        }
    }
    return result;
};

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
console.log(levelOrder(a));
