function permutation(S) {
    var strArr = S.split("");
    var N = S.length;
    var result = [];
    var tmp = [];
    var dfs = function (arr) {
        if (arr.length == N) {
            result.push(arr.join(""));
        }
        for (var i = 0; i < N; i++) {
            if (strArr[i] == '')
                continue;
            arr.push(strArr[i]);
            strArr[i] = '';
            dfs(arr);
            strArr[i] = arr.pop();
        }
    };
    dfs(tmp);
    return result;
}
;
console.log(permutation("qwe")); //["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
console.log(permutation("ab")); //["ab", "ba"]
