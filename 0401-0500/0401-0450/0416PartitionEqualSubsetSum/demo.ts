function canPartition11(nums: number[]): boolean {
    let sum = nums.reduce((pre, cur) => pre + cur);
    if (sum & 1) {
        return false;
    }

    const N = nums.length;
    let half = sum >> 1;
    nums.sort((a, b) => b - a);

    const check = (target: number, index: number): boolean => {
        if (target == 0) {
            return true;
        }

        if (index == N) {
            return false;
        }

        for (let i = index; i < N; i++) {
            if (check(target - nums[i], i + 1)) {
                return true;
            }
        }
        return false;
    }

    return check(half, 0);
};

function canPartition(nums: number[]): boolean {
    let max = 0;
    let sum = nums.reduce((pre, cur) => {
        max = Math.max(max, cur);
        return pre + cur
    });

    if (sum & 1) {
        return false;
    }

    const target = sum >> 1;
    if (max > target) {
        return false;
    }

    const N = nums.length;

    const dp = Array(N).fill(0).map(e => Array(target + 1).fill(false));

    for (let i = 0; i < N; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i < N; i++) {
        const num = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[N - 1][target];
}

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false

