function wiggleMaxLength1(nums: number[]): number {
    if (!nums) return 0;
    const N = nums.length;
    if (N < 2) return N;
    const up = Array(N).fill(0);
    const down = Array(N).fill(0);
    up[0] = down[0] = 1;
    for (let i = 1; i < N; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        }
        else if (nums[i] < nums[i - 1]) {
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
            up[i] = up[i - 1];
        }
        else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    return Math.max(up[N - 1], down[N - 1]);
};

function wiggleMaxLength(nums: number[]): number {
    if (!nums) return 0
    const N = nums.length;
    if (N < 2) return N;
    let up = 1;
    let down = 1;
    for (let i = 1; i < N; i++) {
        if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
        else if (nums[i] > nums[i - 1]) {
            up = down + 1;
        }
    }
    return Math.max(up, down);
}