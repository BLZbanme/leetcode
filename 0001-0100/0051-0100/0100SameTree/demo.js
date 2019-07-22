/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if ((!p && !q) || (p && q && p.val === q.val)) {
        if (!p && !q) {
            return true;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    else {
        return false;
    }    
};

var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    };
    if (!p || !q) {
        return false;
    }
    return p.val === q.val ? isSameTree(p.left, q.left) 
        && isSameTree(p.right, q.right) : false;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
a.left = b;


let c = new TreeNode(1);
let d = new TreeNode(2);
c.right = d;

console.log(isSameTree(a, c));