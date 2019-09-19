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
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let count = 1;
    while (queue.length) {
        let node = queue.shift();

        if (node.left) {
            queue.push(node.left);
            count++;
        }

        if (node.right) {
            queue.push(node.right);
            count++;
        }
    }
    return count;
};

var countNodes = function(root) {
    let count = 0;
    
    function dfs(node) {
        if (!node) {
            return;
        }
        count++;
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return count;
}

var countNodes = function(root) {
    let count = 0;
    let stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        count++;
        cur = cur.right;
    }
    return count;
}

var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}

var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let totalDepth = getDepth(root);
    let rightDepth = getDepth(root.right);
    if (rightDepth + 1 === totalDepth) {
        return (1 << totalDepth - 1) + countNodes(root.right);
    }
    return (1 << totalDepth - 2) + countNodes(root.left);
}

function getDepth(root) {
    if (!root) {
        return 0;
    }
    return 1 + getDepth(root.left);
}

var countNodes = function(root) {
    let height = getDepth(root);
    return  height === 0 ? 0 : getDepth(root.right) === height - 1 ? 
        (1 << height - 1) + countNodes(root.right) : (1 << height - 2) + countNodes(root.left); 
}

function getDepth(root) {
    if (!root) {
        return 0;
    }
    return 1 + getDepth(root.left);
}