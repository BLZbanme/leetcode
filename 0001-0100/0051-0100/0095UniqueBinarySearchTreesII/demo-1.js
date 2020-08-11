/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (!n) {
        return [];
    }

    function dfs(lo, hi) {
        const result = [];
        if (lo > hi) {
            return [null];
        }


        for (let i = lo; i <= hi; i++) {
            let tmp = new TreeNode(i);
            let left = dfs(lo, i - 1);
            let right = dfs(i + 1, hi);

            for (let nodeLeft of left) {
                for (let nodeRight of right) {
                    let newTmp = { ...tmp };
                    newTmp.left = nodeLeft;
                    newTmp.right = nodeRight;
                    result.push(newTmp);
                }
            }
        }

        return result;

    }

    return dfs(1, n);
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

console.log(generateTrees(3));