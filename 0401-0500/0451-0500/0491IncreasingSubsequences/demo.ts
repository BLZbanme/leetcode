function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = [];
    const set = new Set();
    const helper = (arr: number[], index: number): void => {
        const set1 = new Set();
        for (let i = index + 1; i < nums.length; i++) {
            if (set1.has(nums[i])) {
                continue;
            }
            set1.add(nums[i]);

            if (arr[arr.length - 1] <= nums[i]) {
                arr.push(nums[i])
                result.push([...arr]);
                helper(arr, i);
                arr.pop();
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            helper([nums[i]], i);
            set.add(nums[i]);
        } 
    }
    return result;
};

console.log(findSubsequences([4, 6, 7, 7]));

console.log(findSubsequences([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1]));
