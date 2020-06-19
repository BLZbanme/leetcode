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
    let stack = [];
    let cur = root;
    let pre = null;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            if (cur === p) {
                break;
            }
            cur = cur.left
        }

        if (cur === p) {
            break;
        }

        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            cur = null;
        }
    }

    let road1 = Array.from(stack);

    stack = [];
    cur = root;
    pre = null;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            if (cur === q) {
                break;
            }
            cur = cur.left
        }

        if (cur === q) {
            break;
        }

        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            cur = null;
        }
    }

    let road2 = Array.from(stack);
    
    let i = road1.length - 1;
    while (i >= 0) {
        if (road2.indexOf(road1[i]) !== -1) {
            return road1[i];
        }
        i--;
    }
};

var lowestCommonAncestor = function(root, p, q) {
    const path2p = findPath(root, p);
    const path2q = findPath(root, q);

    let i = path2p.length - 1;
    while (i >= 0) {
        if (path2q.indexOf(path2p[i]) !== -1) {
            return path2p[i];
        }
        i--;
    }
};

function findPath(root, target) {
    const stack = [];
    let cur = root;
    let pre = null;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            if (cur === target) {
                return stack;
            }
            cur = cur.left
        }

        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            cur = null;
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(3);
var b = new TreeNode(5);
var c = new TreeNode(1);
var d = new TreeNode(6);
var e = new TreeNode(2);
var f = new TreeNode(0);
var g = new TreeNode(8);
var h = new TreeNode(7);
var i = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

console.log(lowestCommonAncestor(a, b, i)); //5

console.log(lowestCommonAncestor(a, b, c)); //3

