/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        res.push(arr);
        return;
    }
    for (let i = index; i <= n; i++) {
        let tmp = [...arr];
        tmp.push(i);
        dfs(i + 1, tmp, n, k - 1, res);
    }
}

var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        let tmp = [...arr];
        res.push(tmp);
        return;
    }
    for (let i = index; i <= n; i++) {
        arr.push(i);
        dfs(i + 1, arr, n, k - 1, res);
        arr.pop();
    }
}

console.log(combine(4, 1));
console.log(combine(4, 2));
console.log(combine(4, 3));
console.log(combine(4, 4));