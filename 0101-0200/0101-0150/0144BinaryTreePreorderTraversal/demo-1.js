function preorderTraversal(root) {
    var result = [];
    var stack = [];
    var cur = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        if (cur && cur.right) {
            cur = cur.right;
        }
    }
    return result;
}
;
