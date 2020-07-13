/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    
    function dfs(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }

        if (!node1 || !node2 || node1.val != node2.val) {
            return false;
        }

        return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
    }

    return dfs(root.left, root.right);
};

var isSymmetric = function(root) {
    const queue = [];

    function check(node1, node2) {
        queue.push(node1);
        queue.push(node2);

        while (queue.length) {
            let p = queue.shift();
            let q = queue.shift();

            if (!p && !q) {
                continue;
            }
            if (!p || !q || p.val !== q.val) {
                return false;
            }

            queue.push(p.left);
            queue.push(q.right);

            queue.push(p.right);
            queue.push(q.left);
        }

        return true;
    }

    return check(root.left, root.right);
};

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    const queue = [root];
    while (queue.length) {
        if (checkIsSymmetric(queue)) {
            let length = queue.length;
            while (length--) {
                let cur = queue.shift();
                if (cur) {
                    queue.push(cur.left);
                    queue.push(cur.right);
                }
            }
        }
        else {
            return false;
        }
    }

    return true;
}

function checkIsSymmetric(arr) {

    let length = arr.length;
    if (length === 1) {
        return true;
    }

    if (length & 1) {
        return false;
    }

    for (let i = 0; i < (length >> 1); i++) {
        if (!arr[i] && !arr[length - 1 - i]) {
            continue;
        }
        
        if (!arr[i] || !arr[length - 1 - i] || arr[i].val != arr[length - 1 - i].val) {
            return false;
        }
    }

    return true;
}

console.log(isSymmetric({"val":1,"left":{"val":2,"left":{"val":3,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}})); //true;
console.log(isSymmetric({"val":1,"left":{"val":2,"left":null,"right":{"val":3,"left":null,"right":null}},"right":{"val":2,"left":null,"right":{"val":3,"left":null,"right":null}}})); //false;