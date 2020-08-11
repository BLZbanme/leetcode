var flatten = function(root) {
    let head = new TreeNode();
    let cur = head;
    const dfs = (node) => {
        if (!node) {
            return;
        }

        cur.right = node;
        let left = node.left;
        let right = node.right;
        cur = cur.right;

        node.left = null;
        dfs(left);
        dfs(right);
    }
    
    dfs(root);

    return head.right;
};

var flatten = function(root) {
    const stack = [];
    let cur = root;
    let pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack[stack.length - 1];

        if (cur.left && cur.left != pre) {
            cur = cur.left;
        }
        else {
            cur.right = pre;
            cur.left = null;
            stack.pop();
            pre = cur;
            cur = null;
        }
    }

    return root;
}

var flatten = function(root) {
    let pre = null;

    const dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.right);
        dfs(node.left);
        node.right = pre;
        node.left = null;
        
        pre = node;
    }

    dfs(root);
    return root;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

console.log(flatten({"val":1,"left":{"val":2,"left":{"val":3,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":5,"left":null,"right":{"val":6,"left":null,"right":null}}}))
