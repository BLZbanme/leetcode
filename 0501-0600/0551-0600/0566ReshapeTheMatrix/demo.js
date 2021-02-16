var matrixReshape = function(nums, r, c) {
    if (!nums || !nums.length) {
        return nums;
    }
    const m = nums.length;
    const n = nums[0].length;
    if (m * n !== r * c) {
        return nums;
    }
    const arr = Array(r).fill(0).map(e => Array(c));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let index = i * n + j;
            arr[Math.floor(index / c)][index % c] = nums[i][j];
        }
    }
    return arr;
};