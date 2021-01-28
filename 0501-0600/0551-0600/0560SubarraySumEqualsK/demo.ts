function subarraySum(nums: number[], k: number): number {
    const map = new Map();
    const n = nums.length;
    let count = 0;
    let tmp = 0;
    map.set(0, 1);
    for (let i = 0; i < n; i++) {
        tmp += nums[i];
        let diff = tmp - k;
        count += map.get(diff) || 0;
        map.set(tmp, (map.get(tmp) || 0) + 1);
    }
    return count;
};

console.log(subarraySum([1, 1, 1], 2)) // 2
console.log(subarraySum([1, 2, 3], 3)) // 2