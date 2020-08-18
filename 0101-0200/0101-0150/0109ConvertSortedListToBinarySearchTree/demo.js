/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    return partition(arr, 0, arr.length - 1);
};

function partition(arr, lo, hi) {
    if (lo > hi) {
        return null;
    }
    let mid = lo + ((hi - lo) >> 1)
    let newNode = new TreeNode(arr[mid]);
    newNode.left = partition(arr, lo, mid - 1);
    newNode.right = partition(arr, mid + 1, hi);
    return newNode;
}

var sortedListToBST = head => {
    if (!head) return null;
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = head;

    const buildBST = (start, end) => {
        if (start > end) return null;
        const mid = start + ((end - start) >> 1);
        const left = buildBST(start, mid - 1);
        const root = new TreeNode(cur.val);
        cur = cur.next;
        root.left = left;
        root.right = buildBST(mid + 1, end);
        return root;
    }

    return buildBST(0, len - 1);
}


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var a = new ListNode(-10)
var b = new ListNode(-3)
var c = new ListNode(0)
var d = new ListNode(5)
var e = new ListNode(9)
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sortedListToBST(a))


