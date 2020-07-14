/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    const N = postorder.length;

    function dfs(i, j) {
        if (i >= j) {
            return true;
        }
        let p = i;
        while (postorder[p] < postorder[j]) {
            p++;
        }

        let m = p;

        while (postorder[p] > postorder[j]) {
            p++;
        }

        return p == j && dfs(i, m - 1) && dfs(m, j - 1);
    }

    return dfs(0, N - 1);
};

var verifyPostorder = function(postorder) {
    const stack = [];
    let root = Infinity;
    for (let i = postorder.length - 1; i >= 0; i--) {
        if (postorder[i] > root) {
            return false;
        }
        while (stack.length && stack[stack.length - 1] > postorder[i]) {
            root = stack.pop();
        }
        stack.push(postorder[i]);
    }

    return true;
}

console.log(verifyPostorder([1,3,2,6,5]));