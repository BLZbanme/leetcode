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
var isCompleteTree = function(root) {
    const queue = [root];
    let hasEnd = false;
    while (queue.length) {
        let cur = queue.shift();
        if (!hasEnd) {
            if (cur.left) {
                queue.push(cur.left);
            }
            else {
                hasEnd = true;
            }

            if (cur.right) {
                if (hasEnd) {
                    return false;
                }
                queue.push(cur.right);
            }
            else {
                hasEnd = true;
            }
        }
        else {
            if (cur.left || cur.right) {
                return false;
            }
        }
    }

    return true;
};

var isCompleteTree = function(root) {
    let tmp = new CompleteNode(root, 1);
    const queue = [null, tmp];
    let i = 1;
    while (i < queue.length) {
        tmp = queue[i];
        if (tmp.node) {
            let left = new CompleteNode(tmp.node.left, tmp.index * 2);
            queue.push(left);
            let right = new CompleteNode(tmp.node.right, tmp.index * 2 + 1);
            queue.push(right);
        }
        i++;
    }

    return queue[i - 1].index == queue.length - 1;
};

function CompleteNode(node, index) {
    this.node = node;
    this.index = index;
}

console.log(isCompleteTree({"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}},"right":{"val":3,"left":{"val":6,"left":null,"right":null},"right":null}})); //true
console.log(isCompleteTree({"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":5,"left":null,"right":null}},"right":{"val":3,"left":null,"right":{"val":7,"left":null,"right":null}}})); //false