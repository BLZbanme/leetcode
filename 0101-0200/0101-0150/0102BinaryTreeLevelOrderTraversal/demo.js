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
    if (!root) {
        return result;
    }
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

var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let level = queue.length;
        let tmp = [];
        while (level--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            tmp.push(node.val);
        }
        result.push(tmp);
    }
    return result;
}

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
