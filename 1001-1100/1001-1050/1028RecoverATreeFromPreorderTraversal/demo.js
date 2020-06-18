/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    if (!S.length) {
        return null;
    }

    const stack = [];

    let height = 0;
    let underLineCount = 0;
    let num = 0;
    let i = 0;

    while (i < S.length) {

        while (S[i] === '-') {
            underLineCount++;
            i++;
        }

        while (S[i] >= '0' && S[i] <= '9') {
            num = num * 10 + +S[i++];
        }

        while (height != underLineCount) {
            stack.pop();
            height--;
        } 

        let newNode = new TreeNode(num);
        if (stack.length) {
            if (stack[stack.length - 1].left) {
                stack[stack.length - 1].right = newNode;
            }
            else {
                stack[stack.length - 1].left = newNode;
            }
        }
        stack.push(newNode);
        height++;
        underLineCount = 0;
        num = 0;
    }

    return stack[0];
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(recoverFromPreorder("10-7--8"))

console.log(recoverFromPreorder("1-401--349---90--88"))

console.log(recoverFromPreorder("1-2--3--4-5--6--7"))

console.log(recoverFromPreorder("1-2--3---4-5--6---7"))

console.log(recoverFromPreorder("1-401--349---90--88"))