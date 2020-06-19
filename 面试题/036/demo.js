/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) {
        return root;
    }

    const stack = [];
    let cur = root;

    let head = new TreeNode();
    let curPre = head;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        curPre.right = cur;
        cur.left = curPre;
        curPre = cur;
        cur = cur.right;
    }
    head.right.left = curPre;
    curPre.right = head.right;

    return head.right;
};

var treeToDoublyList = function(root) {
    if (!root) {
        return root;
    }
    
    let fakeHead = new TreeNode();
    fakeHead.right = root;
    let pre = fakeHead;

    function dfs(node) {
        if (!node) {
            return
        }

        dfs(node.left);
        pre.right = node;
        node.left = pre;
        pre = node;

        dfs(node.right);
    }    

    dfs(root);

    fakeHead.right.left = pre;
    pre.right = fakeHead.right;

    return fakeHead.right;
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(5);
var d = new TreeNode(1);
var e = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(treeToDoublyList(a)); 
