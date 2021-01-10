function summaryRanges(nums: number[]): string[] {
    const result = [];
    const N = nums.length;
    let i = 0;
    while (i < N) {
        let j = 1;
        while (nums[i + j] === nums[i + j - 1] + 1) {
            j++;
        }
        if (j === 1) {
            result.push([nums[i]])
        }
        else {
            result.push([nums[i], nums[i + j - 1]])
        }
        i += j;
    }
    return result.map(e => e.join("->"))
};