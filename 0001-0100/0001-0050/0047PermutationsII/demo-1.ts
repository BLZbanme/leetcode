function permuteUnique(nums: number[]): number[][] {
    const result: Array<Array<number>> = [];
    const set = new Set<number>();
    const N = nums.length;
    const arr: Array<number> = [];

    nums.sort((a, b) => a - b);

    const dfs = (index: number) => {
        if (arr.length == N) {
            result.push(Array.from(arr));
            return;
        }
        for (let i = 0; i < N; i++) {
            if ((i !== index && nums[i] == nums[i - 1] && !set.has(i - 1)) || set.has(i)) {
                continue;
            }
            set.add(i);
            arr.push(nums[i]);
            dfs(i + 1);
            arr.pop();
            set.delete(i);
        }
    }
    dfs(0);
    return result;
};

console.log(permuteUnique([1,1,2]));