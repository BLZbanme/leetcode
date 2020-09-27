var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};

console.log(lowestCommonAncestor({"val":6,"left":{"val":2,"left":{"val":0,"left":null,"right":null},"right":{"val":4,"left":{"val":3,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}}},"right":{"val":8,"left":{"val":7,"left":null,"right":null},"right":{"val":9,"left":null,"right":null}}}, 2, 4)); // 2