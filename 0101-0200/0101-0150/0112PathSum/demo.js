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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return dfs(root, sum);
};

function dfs(node, num) {
    if (!node) {
        return false;
    }
    if (!node.left && !node.right) {
        return node.val === num;
    }
    num = num - node.val;
    return dfs(node.left, num) || dfs(node.right, num);
}

var hasPathSum = function(root, sum) {
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (sum == 0 && !cur.left && !cur.right) {
            return true;
        }

        if (cur.right && pre != cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            sum += cur.val;
            cur = null;
        }
    }
    return false;
}

var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    let sumQueue = [sum - root.val];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        let num = sumQueue.shift();
        if (num === 0 && !node.left && !node.right) {
            return true;
        }
        if (node.left) {
            queue.push(node.left);
            sumQueue.push(num - node.left.val);
        }
        if (node.right) {
            queue.push(node.right);
            sumQueue.push(num - node.right.val);
        }
    }
    return false;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
console.log(hasPathSum(a, 1))

var a = new TreeNode(5);
var b = new TreeNode(4);
var c = new TreeNode(8);

var d = new TreeNode(11);
var e = new TreeNode(13);
var f = new TreeNode(4);

var g = new TreeNode(7);
var h = new TreeNode(2);
var i = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

console.log(hasPathSum(a, 22))