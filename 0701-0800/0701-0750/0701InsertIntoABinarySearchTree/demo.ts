function insertIntoBST1(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }
    let cur = root;
    while (cur) {
        if (val < cur.val) {
            if (!cur.left) {
                cur.left = new TreeNode(val);
                break;
            }
            else {
                cur = cur.left;
            }
        }
        else {
            if (!cur.right) {
                cur.right = new TreeNode(val);
                break;
            }
            else {
                cur = cur.right;
            }
        }
    }

    return root;
};

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    }
    else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};