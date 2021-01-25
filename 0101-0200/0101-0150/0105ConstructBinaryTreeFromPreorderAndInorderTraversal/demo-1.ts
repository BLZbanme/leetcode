function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder || !preorder.length) return null;

    const helper = (preLeft: number, preRight: number, inLeft: number, inRight: number): TreeNode | null => {
        if (preLeft > preRight || inLeft > inRight) return null;

        const curVal = preorder[preLeft];
        const newTreeNode = new TreeNode(curVal);
        if (preLeft === preRight) return newTreeNode;
        let index = inorder.indexOf(curVal)
        const diff = index - inLeft;
        newTreeNode.left = helper(preLeft + 1, preLeft + diff, inLeft, index - 1)
        newTreeNode.right = helper(preLeft + diff + 1, preRight, index + 1, inRight);
        return newTreeNode;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder || !preorder.length) return null;
    const root = new TreeNode(preorder[0]);
    const stack = [root];
    let inorderIndex = 0;
    for (let i = 1; i < preorder.length; i++) {
        let preorderVal = preorder[i];
        let node = stack[stack.length - 1];
        if (node.val !== inorder[inorderIndex]) {
            node.left = new TreeNode(preorderVal);
            stack.push(node.left);
        }
        else {
            while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
                node = stack.pop()!;
                inorderIndex++;
            }
            node.right = new TreeNode(preorderVal);
            stack.push(node.right);
        }
    }
    return root;
}


console.log(buildTree([1,2,3], [3,2,1])) //
console.log(buildTree([1, 2], [2, 1]))
