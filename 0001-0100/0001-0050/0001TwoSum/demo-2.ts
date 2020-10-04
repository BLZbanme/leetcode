function twoSum(nums: number[], target: number): number[] | undefined {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]) || 0, i];
        }
        map.set(nums[i], i);
    }
};