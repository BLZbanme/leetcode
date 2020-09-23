function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if (!t1 && !t2) {
        return null;
    }

    if (t1 && t2) {
        t1.val += t2.val;
    }

    if (!t1) {
        t1 = new TreeNode(t2.val);
    }

    t1.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    t1.right = mergeTrees(t1 && t1.right, t2 && t2.right);

    return t1;
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

console.log(mergeTrees({"val":1,"left":{"val":3,"left":{"val":5,"left":null,"right":null},"right":null},"right":{"val":2,"left":null,"right":null}}, {"val":2,"left":{"val":1,"left":null,"right":{"val":4,"left":null,"right":null}},"right":{"val":3,"left":null,"right":{"val":7,"left":null,"right":null}}}));