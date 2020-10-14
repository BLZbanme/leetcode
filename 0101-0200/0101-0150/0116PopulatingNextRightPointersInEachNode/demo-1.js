
function connect(root) {
    let tmp = root;
    while (tmp && tmp.left) {
        let cur = tmp;
        while (cur) {
            cur.left.next = cur.right;
            cur.right.next = !cur.next ? null : cur.next.left;
            cur = cur.next;
        }
        tmp = tmp.left;
    }

    return root;
};