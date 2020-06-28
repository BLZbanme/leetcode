/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const N = nums.length;
    const dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = nums[i];
        if (nums[i] >= s) {
            return 1;
        }
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; i + j < N; j++) {
            dp[j][j + i] = dp[j][j + i - 1] + nums[j + i];
            if (dp[j][j + i] >= s) {
                return i + 1;
            }
        }
    }

    return 0;
};

var minSubArrayLen = function(s, nums) {
    const N = nums.length;
    const dp = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        for (let j = 0; i + j < N; j++) {
            dp[j] += nums[j + i];
            if (dp[j] >= s) {
                return i + 1;
            }
        }
    }

    return 0;
};

var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length) {
        return 0;
    }

    let i = 0;
    let j = 0;
    let sum = 0;
    let min = Infinity;

    while (j < nums.length) {
        sum += nums[j++];

        while (sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i++];
        }
    }

    return min === Infinity ? 0 : min;
}

var minSubArrayLen = function(s, nums) {
    const N = nums.length;
    const sums = new Array(N + 1);
    sums[0] = 0;
    for (let i = 1; i <= N; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }

    let result = Infinity;

    for (let i = 1; i <= N; i++) {
        let target = s + sums[i - 1];
        let index = binarySearch(sums, target);
        if (index === N + 1) {
            break;
        }
        if (index <= N) {
            result = Math.min(result, index - i + 1);
        }
    }

    return result === Infinity ? 0 : result;
}

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length;
    
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lo;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));