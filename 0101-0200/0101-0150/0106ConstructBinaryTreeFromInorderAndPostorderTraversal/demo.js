
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder.length) {
        return null;
    }
    let root = new TreeNode(postorder.pop());
    let index = inorder.indexOf(root.val);

    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);

    let postorderLeft = postorder.slice(0, index);
    let postorderRight = postorder.slice(index);

    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);
    return root;
};

var buildTree = function(inorder, postorder) {
    const N = postorder.length;
    if (!postorder.length) {
        return null;
    }
    return buildTreeHelper(inorder, postorder, 0, N - 1, 0, N - 1);
};

var buildTreeHelper = function(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd) {
    if (inorderStart > inorderEnd) {
        return null;
    }
    let root = new TreeNode(postorder[postorderEnd]);
    let index = inorder.indexOf(root.val);
    root.left = buildTreeHelper(inorder, postorder, inorderStart, index - 1, postorderStart, postorderStart + index - inorderStart - 1);
    root.right = buildTreeHelper(inorder, postorder, index + 1, inorderEnd, postorderStart + index - inorderStart, postorderEnd - 1);
    return root;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

console.log(buildTree([1,2,3], [3,2,1]))
