/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const path = [];
    const map = new Map();
    const travel = (node) => {
        if (!node) {
            return;
        }

        travel(node.left);
        map.set(node.val, node);
        path.push(node.val);
        travel(node.right);
    }

    travel(root);

    const [one, two] = findTwo(path);
    let oneNode = map.get(one);
    let twoNode = map.get(two);
    [oneNode.val, twoNode.val] = [twoNode.val, oneNode.val];
    return root;
};

function findTwo(arr) {
    let x = -1;
    let y = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            y = arr[i + 1];
            if (x === -1) {
                x = arr[i];
            }
            else {
                break;
            }
        }
    }
    return [x, y];
}

var recoverTree = root => {
    const stack = [];
    let pre = null;
    let x = null;
    let y = null;
    
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        if (pre && root.val < pre.val) {
            y = root;
            if (x == null) {
                x = pre;
            }
            else {
                break;
            }
        }
        pre = root;
        root = root.right;
    }
    [x.val, y.val] = [y.val, x.val]
    return root;
}

console.log(recoverTree({"val":1,"left":{"val":3,"left":null,"right":{"val":2,"left":null,"right":null}},"right":null}));