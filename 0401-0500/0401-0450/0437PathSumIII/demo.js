/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let count = 0;
    let set = new Set([root]);

    function dfs(node, val) {
        if (!node) {
            return;
        }
        if (val === node.val) {
            count++;
        }

        if (!set.has(node)) {
            set.add(node);
            dfs(node, sum);
        }
        
        dfs(node.left, val - node.val);
        dfs(node.right, val - node.val);
        return;
    }

    dfs(root, sum);
    return count;
};

var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function dfs(node, val) {
    if (!node) {
        return 0;
    }
    return (node.val == val ? 1 : 0) + dfs(node.left, val - node.val) + dfs(node.right, val - node.val);
}


var pathSum = function(root, sum) {
    let count = 0;
    let preSum = new Map();
    preSum.set(0, 1);

    function dfs(root, curSum, target) {
        if (!root) {
            return;
        }

        curSum += root.val;

        if (preSum.has(curSum - target)) {
            count += preSum.get(curSum - target);
        }

        if (!preSum.has(curSum)) {
            preSum.set(curSum, 1);
        }
        else {
            preSum.set(curSum, preSum.get(curSum) + 1);
        }

        dfs(root.left, curSum, target);
        dfs(root.right, curSum, target);
        preSum.set(curSum, preSum.get(curSum) - 1);
    }

    dfs(root, 0, sum);
    return count;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(10);
var b = new TreeNode(5);
var c = new TreeNode(-3);
var d = new TreeNode(3);
var e = new TreeNode(2);
var f = new TreeNode(11);
var g = new TreeNode(3);
var h = new TreeNode(-2);
var i = new TreeNode(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
d.right = h;
e.right = i;
console.log(pathSum(a, 8));