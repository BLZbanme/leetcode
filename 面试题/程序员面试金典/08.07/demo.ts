function permutation(S: string): string[] {
    const strArr = S.split("")
    const N = S.length;
    const result: Array<string> = [];
    const tmp: Array<string> = [];
    const dfs = (arr: Array<string>) => {
        if (arr.length == N) {
            result.push(arr.join(""));
        }
        for (let i = 0; i < N; i++) {
            if (strArr[i] == '') continue;
            arr.push(strArr[i]);
            strArr[i] = '';
            dfs(arr);
            strArr[i] = arr.pop() || "";
        }
    }
    dfs(tmp);

    return result;
};

console.log(permutation("qwe")) //["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
console.log(permutation("ab")) //["ab", "ba"]