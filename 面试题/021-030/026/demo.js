/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {

    if (!B) {
        return false;
    }

    function dfs (node1, node2, start) {
        if (!node2) {
            return true;
        }

        if (!node1) {
            return false;
        } 

        if (node1.val != node2.val) {
            if (start) {
                return false;
            }
            return dfs(node1.left, node2) || dfs(node1.right, node2);
        }

        if (dfs(node1.left, node2.left, true) && dfs(node1.right, node2.right, true)) {
            return true;
        }

        return dfs(node1.left, node2, false) || dfs(node1.right, node2, false);
    }

    return dfs(A, B, false);
};

var isSubStructure = function(A, B) {

    if (!B) {
        return false;
    }

    function dfs (node1, node2, start) {
        if (!node2) {
            return true;
        }

        if (!node1) {
            return false;
        } 

        if (node1.val == node2.val && dfs(node1.left, node2.left, true) && dfs(node1.right, node2.right, true)) {
            return true;
        }

        if (node1.val != node2.val && start) {
            return false;
        }
        
        return dfs(node1.left, node2, false) || dfs(node1.right, node2, false);
    }

    return dfs(A, B, false);
};

var isSubStructure = function(A, B) {

    if (!B) {
        return false;
    }

    function dfsTree (node1, node2, start) {
        if (!node2) {
            return true;
        }

        if (!node1) {
            return false;
        } 

        if (node1.val == node2.val && dfsIsSame(node1, node2)) {
            return true;
        }

        if (node1.val != node2.val && start) {
            return false;
        }
        
        return dfsTree(node1.left, node2) || dfsTree(node1.right, node2);
    }

    function dfsIsSame(node1, node2) {
        if (!node2) {
            return true;
        }

        if (!node1) {
            return false;
        }

        if (node1.val == node2.val) {
            return dfsIsSame(node1.left, node2.left) && dfsIsSame(node1.right, node2.right);
        }

        return false
    }

    return dfsTree(A, B, false);
};

console.log(isSubStructure({"val":1,"left":{"val":2,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}, {"val":3,"left":{"val":1,"left":null,"right":null},"right":null})); // false
console.log(isSubStructure({"val":3,"left":{"val":4,"left":{"val":1,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":{"val":5,"left":null,"right":null}}, {"val":4,"left":{"val":1,"left":null,"right":null},"right":null})); //true