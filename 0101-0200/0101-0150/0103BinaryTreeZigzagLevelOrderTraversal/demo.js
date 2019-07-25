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
        while (len--) {
            let node = queue.shift();
            if (isOdd) {
                tmp.unshift(node.val);
            }
            else {
                tmp.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(tmp);
        isOdd = !isOdd;
    }
    return result;
};