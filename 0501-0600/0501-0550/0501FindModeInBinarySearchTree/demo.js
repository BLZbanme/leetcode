function findMode(root) {
    var pre = Infinity;
    var count = 0;
    var max = 0;
    var result = [];
    var dfs = function (root) {
        if (!root) {
            return;
        }
        dfs(root.left);
        if (root.val == pre) {
            count++;
        }
        else {
            pre = root.val;
            count = 1;
        }
        
        if (count == max) {
            result.push(root.val);
        }
        else if (max < count) {
            max = count;
            result = [root.val];
        }
        dfs(root.right);
    };
    dfs(root);
    return result;
}
;
console.log(findMode({ "val": 1, "left": null, "right": { "val": 2, "left": { "val": 2, "left": null, "right": null }, "right": null } }));
