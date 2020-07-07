/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || !preorder.length || !inorder.length) {
        return null;
    }

    if (preorder.length === 1) {
        return new TreeNode(preorder[0]);
    }

    let tmp = preorder[0]
    let index = inorder.indexOf(tmp);
    let preorderLeft = preorder.slice(1, index + 1);
    let preorderRight = preorder.slice(index + 1);
    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);
    let node = new TreeNode(tmp);

    node.left = buildTree(preorderLeft, inorderLeft);
    node.right = buildTree(preorderRight, inorderRight);

    return node;
};

var buildTree = function(preorder, inorder) {
    return helper(0, 0, preorder.length - 1, preorder, inorder);
};

function helper(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }
    let root = new TreeNode(preorder[preStart]);
    let inIndex =  inorder.indexOf(root.val);
    root.left = helper(preStart + 1, inStart, inIndex  - 1, preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
    return root;
}

var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    const stack = [];
    let root = new TreeNode(preorder[0]);
    let cur = root;
    let j = 0;
    for (let i = 1; i < preorder.length; i++) {
        if (cur.val !== inorder[j]) {
            cur.left = new TreeNode(preorder[i]);
            stack.push(cur);
            cur = cur.length;
        }
        else {
            j++;
            while (stack.length && stack[stack.length - 1].val === inorder[j]) {
                cur = stack.pop();
                j++;
            }
            cur = cur.right = new TreeNode(preorder[i]);
        }
    }
    
    return root;
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));

console.log(buildTree([1, 2, 3], [3, 2, 1]));