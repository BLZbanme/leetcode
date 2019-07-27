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
var levelOrderBottom = function(root) {
    let result = [];
    levelHelper(root, result, 0);
    return result;
};

function levelHelper(node, list, level) {
    if (!node) {
        return;
    }
    let depth = list.length;
    if (depth === level) {
        list.unshift([]);
        depth += 1;
    }
    list[depth - level - 1].push(node.val);
    levelHelper(node.left, list, level + 1);
    levelHelper(node.right, list, level + 1);
}

var levelOrderBottom = function(root) {
    let queue = [root];
    let result = [];
    if (!root) {
        return result;
    }
    while (queue.length) {
        let len = queue.length;
        let tmp = [];
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
        result.unshift(tmp);
    }
    return result;
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

console.log(levelOrderBottom(a))