/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    const arr = Array(10).fill(0);
    const stack = [];
    let cur = root;
    let pre = null;

    let count = 0;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            arr[cur.val]++;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                if (arr.filter(e => e & 1).length <= 1) {
                    count++;
                }
            }
            stack.pop();
            arr[cur.val]--;
            pre = cur;
            cur = null;
        }
    }   
    
    return count;
};

var pseudoPalindromicPaths  = function(root) {
    const arr = Array(10).fill(0);

    let count = 0;

    const dfs = node => {
        if (!node) {
            return;
        }

        arr[node.val]++;
        if (!node.left && !node.right && arr.filter(e => e & 1).length <= 1) {
            count++;
        }

        dfs(node.left);
        dfs(node.right);
        arr[node.val]--;
    }

    dfs(root);
    
    return count;
};

var pseudoPalindromicPaths  = function(root) {
    let count = 0;

    const dfs = (node, num) => {
        if (!node) {
            return;
        }

        num ^= (1 << node.val);
        if (!node.left && !node.right) {
            if (!num || !(num & (num - 1))) {
                count++;
            }
        }
        dfs(node.left, num);
        dfs(node.right, num);
        return;
    }   
    dfs(root);
    return count;
}

console.log(pseudoPalindromicPaths({"val":2,"left":{"val":1,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":{"val":1,"left":null,"right":null}}},"right":{"val":1,"left":null,"right":null}}));//1

console.log(pseudoPalindromicPaths({"val":2,"left":{"val":3,"left":{"val":3,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}},"right":{"val":1,"left":null,"right":{"val":1,"left":null,"right":null}}}));//2
