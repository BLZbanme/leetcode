function combinationSum3(k, n) {
    if (n > 45) {
        return [];
    }
    var result = [];
    var dfs = function (arr, sum, index) {
        if (sum > n) {
            return;
        }
        if (sum == n) {
            if (arr.length === k) {
                result.push(Array.from(arr));
            }
            return;
        }
        for (var i = index + 1; i <= 9; i++) {
            arr.push(i);
            dfs(arr, sum + i, i);
            arr.pop();
        }
        return;
    };
    dfs([], 0, 0);
    return result;
}
;
console.log(combinationSum3(3, 7)); //[[1, 2, 4]]
console.log(combinationSum3(3, 9)); //[[1, 2, 6], [1, 3, 5], [2, 3, 4]]
