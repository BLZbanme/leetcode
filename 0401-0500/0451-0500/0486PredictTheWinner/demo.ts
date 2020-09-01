function PredictTheWinner11(nums: number[]): boolean {
    return total(nums, 0, nums.length - 1, 1) >= 0;
};

function total(nums: Array<number>, start: number, end: number, turn: number): number {
    if (start === end) {
        return nums[start] * turn;
    }
    let scoreStart = nums[start] * turn + total(nums, start + 1, end, -turn);
    let scoreEnd = nums[end] * turn + total(nums, start, end - 1, -turn);
    return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
}

function PredictTheWinner(nums: Array<number>): boolean {
    const N = nums.length;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(N);
        dp[i][i] = nums[i];
    }

    for (let i = N - 2; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][N - 1] >= 0;
}