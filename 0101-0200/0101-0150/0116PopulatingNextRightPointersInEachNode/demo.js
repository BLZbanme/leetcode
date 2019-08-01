/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let tmp = queue.shift();
            tmp.next = len ? queue[0] : null;
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }
    }
    return root;
};

var connect = function(root) {
    if (!root) {
        return null;
    }
    let pre = root;
    let cur = null;
    while (pre.left) {
        cur = pre;
        while (cur) {
            cur.left.next = cur.right;
            if (cur.next) {
                cur.right.next = cur.next.left;
            }
            cur = cur.next;
        }
        pre = pre.left;
    }
    return root;
}

var connect = function(root) {
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
}

connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1})
