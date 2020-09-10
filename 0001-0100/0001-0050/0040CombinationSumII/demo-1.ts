function combinationSum2(candidates: number[], target: number): number[][] {
    const result: Array<Array<number>> = [];
    candidates.sort((a, b) => a - b);
    const dfs = (arr: Array<number>, sum: number, index: number): void => {        
        if (sum === target) {
            result.push([...arr]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i != index && candidates[i] == candidates[i - 1]) continue;
            arr.push(candidates[i]);
            dfs(arr, sum + candidates[i], i + 1);
            arr.pop();
        }
        return;
    }
    dfs([], 0, 0);
    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8)); //[[1, 7],[1, 2, 5],[2, 6],[1, 1, 6]]
console.log(combinationSum2([2,5,2,1,2], 5)); //[[1,2,2],[5]]