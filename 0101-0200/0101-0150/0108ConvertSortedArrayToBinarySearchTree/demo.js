/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    return dfs(nums, 0, nums.length - 1);
};

function dfs(nums, lo, hi) {
    if (lo > hi) {
        return null;
    }


    let mid = lo + ((hi - lo + 1) >> 1);
    let node = new TreeNode(nums[mid]);
    node.left = dfs(nums, lo, mid - 1);
    node.right = dfs(nums, mid + 1, hi);
    return node;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10,-3,0,1,5,9]));

console.log(sortedArrayToBST([-10,-3,0,5,9]));