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
    //记录每一层的第一个节点
    let first = root;
    //记录当前节点
    let cur;
    //记录下一层的第一个节点记录
    let pre = null;
    //记录下一层第二个节点记录
    let aft = null;
    while (first) {
        //每一层cur初始化为first
        cur = first;
        //first置空，判断下一层还有没有结点，用来跳出循环
        first = null;

        //此while用来找到下一层第一个节点
        while (cur) {
            if (cur.left) {
                pre = cur.left;
                first = pre;
                break;
            }
            else if (cur.right) {
                pre = cur.right;
                first = pre;
                cur = cur.next;
                break;
            }
            else {
                cur = cur.next;
            }
        }

        //此while用来找到下一层第二个节点， 并把pre的next指向aft
        //并把pre赋值为aft，循环可以把整层的next连接完
        //cur.left !== pre防止重新计算
        while (cur) {
            if (cur.left && cur.left !== pre) {
                aft = cur.left;
                pre.next = aft;
                pre = aft;
            }
            if (cur.right && cur.right !== pre) {
                aft = cur.right;
                pre.next = aft;
                pre = aft;
            }
            cur = cur.next;
        }
    }
    return root;
};

var connect = function(root) {
    let head = null;
    let prev = null;
    let cur = root;
    while (cur) {
        while (cur) {
            if (cur.left) {
                if (prev) {
                    prev.next = cur.left;
                }
                else {
                    head = cur.left;
                }
                prev = cur.left;
            }
            if (cur.right) {
                if (prev) {
                    prev.next = cur.right;
                }
                else {
                    head  = cur.right;
                }
                prev = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        prev = null;
        head = null;
    }
    return root;
}

var connect = function(root) {
    let result = root;
    while (root) {
        let tmp = new Node(0);
        let cur = tmp;
        while (root) {
            if (root.left) {
                cur.next = root.left;
                cur = cur.next;
            }
            if (root.right) {
                cur.next = root.right;
                cur = cur.next;
            }
            root = root.next;
        }
        root = tmp.next;
    }
    return result;
}



console.log(connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}))

console.log(connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"next":null,"right":null,"val":5},"next":null,"right":{"$id":"5","left":null,"next":null,"right":null,"val":1},"val":1},"next":null,"right":null,"val":2},"next":null,"right":{"$id":"6","left":{"$id":"7","left":null,"next":null,"right":{"$id":"8","left":null,"next":null,"right":null,"val":6},"val":3},"next":null,"right":{"$id":"9","left":null,"next":null,"right":{"$id":"10","left":null,"next":null,"right":null,"val":8},"val":-1},"val":4},"val":0}));