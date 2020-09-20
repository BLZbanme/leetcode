function subsets(nums: number[]): number[][] {
    const result: Array<Array<number>> = [[]];
    const N = nums.length;
    const arr: Array<number> = [];

    const dfs = (index: number) => {
        for (let i = index; i < N; i++) {
            arr.push(nums[i]);
            result.push(Array.from(arr));
            dfs(i + 1);
            arr.pop();
        }
        return;
    }

    dfs(0);

    return result;
};
