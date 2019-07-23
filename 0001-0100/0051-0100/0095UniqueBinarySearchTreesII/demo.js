/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1);
        dp[i][i] = [new TreeNode(i)];
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            let tmp =  [];
            multip([null], j, dp[j + 1][j + i - 1], tmp);
            for (let k = j + 1; k < i + j - 1; k++) {
                multip(dp[j][k - 1], k, dp[k + 1][j + i - 1], tmp); 
            }
            multip(dp[j][j + i - 2], j + i - 1, [null], tmp);
            dp[j][j + i - 1] = tmp;
        }
    }
    return dp[1][n];
};

function multip(leftTrees, nodeVal, rightTrees, result) {
    for (let left of leftTrees) {
        for (let right of rightTrees) {
            let newNode = new TreeNode(nodeVal);
            newNode.left = left;
            newNode.right = right;
            result.push(newNode);
        }
    }
}

var generateTrees = function(n) {
    let result = [];
    result[0] = [];
    if (n == 0) {
        return result[0];
    }
    result[0].push(null);
    for (let len = 1; len <= n; len++) {
        result[len] = [];
        for (let j = 0; j < len; j++) {
            for (let left of result[j]) {
                for (let right of result[len - j - 1]) {
                    let newNode = new TreeNode(j + 1);
                    newNode.left = left;
                    newNode.right = clone(right, j + 1);
                    result[len].push(newNode);
                }
            }
        }
    }
    return result[n];
}

function clone(node, offset) {
    if (!node) {
        return null;
    }
    let newNode = new TreeNode(node.val + offset);
    newNode.left = clone(node.left, offset);
    newNode.right = clone(node.right, offset);
    return newNode;
}

var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return genTrees(1, n);
}

function genTrees(start, end) {
    
    let list = [];
    if (start > end) {
        list.push(null);
        return list;
    }

    if (start == end) {
        list.push(new TreeNode(start));
        return list;
    }
    let left;
    let right;
    for (let i = start; i <= end; i++) {
        left = genTrees(start, i - 1);
        right = genTrees(i + 1, end);
        for (let el of left) {
            for (let er of right) {
                let newNode = new TreeNode(i);
                newNode.left = el;
                newNode.right = er;
                list.push(newNode);
            }
        }
    }
    return list;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(generateTrees(0));
console.log(generateTrees(2));
console.log(generateTrees(3));
console.log(generateTrees(4));
console.log(generateTrees(5));