function pivotIndex1(nums: number[]): number {
    const n = nums.length;
    let lo = 0;
    let hi = n - 1;
    let loSum = 0;
    let hiSum = 0;
    while (lo < hi) {
        if (loSum < hiSum) {
            loSum += nums[lo++];
        }
        else {
            hiSum += nums[hi--];
        }
    }
    if (loSum === hiSum && lo === hi)
        return lo;
    return -1;
};

function pivotIndex(nums: number[]): number {
    const n = nums.length;
    if (!n) return -1;
    const sum = nums.reduce((pre, cur) => pre + cur);
    let tmp = 0;
    for (let i = 0; i < n; i++) {
        if ((tmp << 1)  === sum - nums[i]) return i;
        tmp += nums[i];
    }
    return -1;
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6])) //3
console.log(pivotIndex([1, 2, 3])) //-1