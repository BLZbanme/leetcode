/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = null;

    if (p.val > q.val) {
        [p, q] = [q, p];
    }
    
    function dfs(node) {
        if (result) {
            return;
        }
        if (!node) {
            return false;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        if ((left && right) || (node.val === p.val && right) || (node.val === q.val && left)) {
            result = node;
            return false;
        }

        if (node.val === p.val || node.val === q.val) {
            return true;
        }

        return left || right;
        
    }

    dfs(root);

    return result;
};

var lowestCommonAncestor = function(root, p, q) {
    let result = null;

    if (p.val > q.val) {
        [p, q] = [q, p];
    }
    
    function dfs(node) {

        if (!node) {
            return false;
        }

        if (node.val === p.val) {
            if (dfs(node.right)) {
                result = node;
                return false;
            }
            return true;
        }

        if (node.val === q.val) {
            if (dfs(node.left)) {
                result = node;
                return false;
            }
            return true;
        }

        if (node.val > p.val && node.val < q.val) {
            let left = dfs(node.left);
            let right = dfs(node.right);

            if (left && right) {
                result = node;
                return false;
            }

            return left || right
        }
        else if (node.val < p.val) {
            return dfs(node.right);
        }
        else if (node.val > q.val) {
            return dfs(node.left);
        }
        
    }

    dfs(root);

    return result;
};

var lowestCommonAncestor = function(root, p, q) {
    let parentVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    if (pVal > parentVal && qVal > parentVal) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else if (pVal < parentVal && qVal < parentVal) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else {
        return root;
    }
}

var lowestCommonAncestor = function(root, p, q) {
    let parentVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    while (node) {
        if (pVal > parentVal && qVal > parentVal) {
           node = node.right;
        }
        else if (pVal < parentVal && qVal < parentVal) {
            node = node.left;
        }
        else {
            return root;
        }
    }
    return null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var a = new TreeNode(5);
var b = new TreeNode(3);
var c = new TreeNode(6);
var d = new TreeNode(2);
var e = new TreeNode(4);
var f = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;

console.log(lowestCommonAncestor(a, f, e)); //3

var a = new TreeNode(3);
var b = new TreeNode(1);
var c = new TreeNode(4);
var d = new TreeNode(2);

a.left = b;
a.right = c;
b.right = d;

console.log(lowestCommonAncestor(a, d, a)); //3



var a = new TreeNode(6);
var b = new TreeNode(2);
var c = new TreeNode(8);
var d = new TreeNode(0);
var e = new TreeNode(4);
var f = new TreeNode(7);
var g = new TreeNode(9);
var h = new TreeNode(3);
var i = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

console.log(lowestCommonAncestor(a, b, e)); //2
console.log(lowestCommonAncestor(a, c, b)); //6
console.log(lowestCommonAncestor(a, b, c)); //6
