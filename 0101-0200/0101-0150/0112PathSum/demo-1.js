/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    const stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left
        }
        
        cur = stack[stack.length - 1];
        if (!sum && !cur.left && !cur.right) {
            return true;
        }
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            stack.pop();
            pre = cur;
            sum += cur.val;
            cur = null;
        }
    }
    return false;
};

var hasPathSum = function(root, sum) {

    if (!root) {
        return false;
    }
    
    if (!root.left && !root.right && sum === root.val) {
        return true;
    }
    
    return hasPathSum(root.left, sum - root.val)
        || hasPathSum(root.right, sum - root.val);
};

var hasPathSum = function(root, sum) {
    const stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left
        }
        
        cur = stack[stack.length - 1];

        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            if (!sum && !cur.left && !cur.right) {
                return true;
            }
            stack.pop();
            pre = cur;
            sum += cur.val;
            cur = null;
        }
    }
    return false;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}