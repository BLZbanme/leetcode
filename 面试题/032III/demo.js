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
    if (!root) {
        return [];
    }
    
    const result = [];
    const queue = [root];
    let left2right = true;

    while (queue.length) {
        let n = queue.length;
        let tmpArr = [];
        while (n--) {
            let tmp = queue.shift();
            if (left2right) {
                tmpArr.push(tmp.val);
            }
            else {
                tmpArr.unshift(tmp.val);
            }
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }
        left2right = !left2right;
        result.push(tmpArr);
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