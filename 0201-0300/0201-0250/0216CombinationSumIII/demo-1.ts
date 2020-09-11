function combinationSum3(k: number, n: number): number[][] {
    if (n > 45) {
        return [];
    }
    const result: Array<Array<number>> = [];
    const dfs = (arr: Array<number>, sum: number, index: number): void => {
        if (sum > n) {
            return;
        }
        if (sum == n) {
            if (arr.length === k) {
                result.push(Array.from(arr));
            }
            return;
        }
        for (let i = index + 1; i <= 9; i++) {
            arr.push(i);
            dfs(arr, sum + i, i);
            arr.pop();
        }
        return;
    }
    dfs([], 0, 0);

    return result;
};

console.log(combinationSum3(3, 7));//[[1, 2, 4]]
console.log(combinationSum3(3, 9));//[[1, 2, 6], [1, 3, 4], [2, 3, 4]]