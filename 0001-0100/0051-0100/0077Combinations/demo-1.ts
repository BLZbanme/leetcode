function combine(n: number, k: number): number[][] {
    const result: Array<Array<number>> = [];
    const dfs = (arr: Array<number>, index: number): void => {
        if (arr.length === k) {
            result.push([...arr])
            return;
        }

        for (let i = index; i <= n; i++) {
            arr.push(i);
            dfs(arr, i + 1);
            arr.pop();
        }
    }

    dfs([], 1);
    return result;
};