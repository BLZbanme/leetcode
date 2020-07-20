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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const result = [];

    const stack = [];
    let cur = root;
    let pre = null;
    while(cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack[stack.length - 1];
        if (!sum && !cur.left && !cur.right) {
            result.push([...stack.map(e => e.val)]);
        }

        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            sum += cur.val;
            stack.pop();
            pre = cur;
            cur = null;
        }
    }

    return result;
};