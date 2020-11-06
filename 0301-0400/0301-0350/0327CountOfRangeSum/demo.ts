function countRangeSum1(nums: number[], lower: number, upper: number): number {
    const N = nums.length;

    let count = 0;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(N);
        dp[i][i] = nums[i];
        if (nums[i] >= lower && nums[i] <= upper) {
            count++;
        }
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = dp[j][j + i - 1] + nums[i];
            if (dp[j][j + i] >= lower && dp[j][j + i] <= upper) {
                count++;
            }
        }
    }
    return count;
};

const countRangeSunRecursive = (sum: Array<number>, lower: number, upper: number, left: number, right: number): number => {
    if (left === right) {
        return 0;
    }
    const mid = left + ((right - left) >> 1);
    const n1 = countRangeSunRecursive(sum, lower, upper, left, mid);
    const n2 = countRangeSunRecursive(sum, lower, upper, mid + 1, right);
    let ret = n1 + n2;

    let i = left;
    let l = mid + 1;
    let r = mid + 1;
    while (i <= mid) {
        while (l <= right && sum[l] - sum[i] < lower) l++;
        while (r <= right && sum[r] - sum[i] <= upper) r++;
        ret += r - l;
        i++;
    }

    const sorted = Array(right - left + 1);
    let p1 = left;
    let p2 = mid + 1;
    let p = 0;
    while (p1 <= mid || p2 <= right) {
        if (p1 > mid) {
            sorted[p++] = sum[p2++];
        }
        else if (p2 > right) {
            sorted[p++] = sum[p1++];
        }
        else {
            sorted[p++] = sum[p2++];
        }
    }
    for (let i = 0; i < sorted.length; i++) {
        sum[left + i] = sorted[i];
    }
    return ret;
}

function countRangeSum(nums: number[], lower: number, upper: number): number {
    let s = 0;
    const sum = [0];
    for (const v of nums) {
        s += v;
        sum.push(s);
    }
    return countRangeSunRecursive(sum, lower, upper, 0, sum.length - 1);
}

console.log(countRangeSum([-2, 5, -1], -2, 2)) // 3