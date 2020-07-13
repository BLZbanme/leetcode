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

    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack[stack.length - 1];

        if (!sum && !cur.left && !cur.right) {

            result.push(stack.map(e => e.val));
        }

        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            sum += cur.val;
            cur = null;
        }
    }

    return result;
};

var pathSum = function(root, sum) {
    const result = [];
    const list = [];

    function dfs(node, sum) {
        if (!node) {
            return;
        }

        list.push(node.val);

        if (node.val == sum && !node.left && !node.right) {
            result.push([...list]);
        }

        dfs(node.left, sum - node.val);
        dfs(node.right, sum - node.val);

        list.pop();
        return;
    }

    dfs(root, sum);

    return result;
}

console.log(pathSum({"val":5,"left":{"val":4,"left":{"val":11,"left":{"val":7,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null},"right":{"val":8,"left":{"val":13,"left":null,"right":null},"right":{"val":4,"left":{"val":5,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}}, 22));

[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]