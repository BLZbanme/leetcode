/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const N = nums.length;
    if (!N) {
        return 0;
    }
    let dp = new Array(N);
    dp[0] = 1;
    let result = 1;
    for (let i = 1; i < N; i++) {
        let tmp = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                tmp = Math.max(tmp, dp[j] + 1);
            }
            if (tmp > result) {
                break;
            }
        }
        dp[i] = tmp;
        result = Math.max(result, tmp);
    }
    return result;
};

var lengthOfLIS = function(nums) {
    const N = nums.length;
    let tails = new Array(N);
    let size = 0;
    for (let x of nums) {
        let i = 0;
        let j = size;
        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (tails[m] < x) {
                i = m + 1;
            }
            else {
                j = m;
            }
        }
        tails[i] = x;
        if (i === size) {
            size++;
        }
    }
    return size;
}

var lengthOfLIS = function(nums) {
    const N = nums.length;
    let dp = new Array(N);
    let len = 0;
    for (let num of nums) {
        let i = 0;
        let j = len;
        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (dp[m] < num) {
                i = m + 1;
            }
            else {
                j = m;
            }
        }
        dp[i] = num;
        if (i === len) {
            len++;
        } 
    }
    return len;
}




console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))