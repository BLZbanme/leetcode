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
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 

    let indexOfPreorder = -Infinity;
    for (let i = 0; i < indexOfInorder; i++) {
        let tmp = preorder.indexOf(inorder[i]);
        if (tmp > indexOfPreorder) {
            indexOfPreorder = tmp;
        }
    }
    
    let preorderLeft = preorder.slice(0, indexOfPreorder + 1);
    let preorderRight = preorder.slice(indexOfPreorder + 1);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};

var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let now = preorder.shift();
    let root = new TreeNode(now);
    let indexOfInorder = inorder.indexOf(now);

    let inorderLeft = inorder.slice(0, indexOfInorder);
    let inorderRight = inorder.slice(indexOfInorder + 1); 
    
    let preorderLeft = preorder.slice(0, indexOfInorder);
    let preorderRight = preorder.slice(indexOfInorder);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};

var buildTree = function(preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder);
}

function helper(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }
    let root = new TreeNode(preorder[preStart]);
    let inIndex = inorder.indexOf(root.val);
    root.left = helper(preStart + 1, inStart, inIndex - 1,  preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd,  preorder, inorder);
    return root;
}

var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    let stack = [];
    let root = new TreeNode(preorder[0]);
    let cur = root;
    debugger
    for (let i = 1, j = 0; i < preorder.length; i++) {
        if (cur && cur.val !== inorder[j]) {
            cur.left = new TreeNode(preorder[i]);
            stack.push(cur);
            cur = cur.left;
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

console.log(buildTree([3,9,8,5,4,10,20,15,7], [4,5,8,10,9,3,15,20,7]))

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))

console.log(buildTree([1,2,3], [3,2,1]))

