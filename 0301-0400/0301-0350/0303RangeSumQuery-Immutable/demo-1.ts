class NumArray {
    dp: Array<number>

    constructor(nums: number[]) {
        const n = nums.length;
        this.dp = Array(n + 1);
        this.dp[0] = 0;
        for (let i = 1; i <= n; i++) {
            this.dp[i] = this.dp[i - 1] + nums[i - 1];
        }
    }

    sumRange(i: number, j: number): number {
        return this.dp[j + 1] - this.dp[i];
    }
}
