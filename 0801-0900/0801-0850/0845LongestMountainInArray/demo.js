function longestMountain1(A) {
    var N = A.length;
    var dp = Array(N);
    dp[0] = 0;
    for (var i = 1; i < N; i++) {
        dp[i] = A[i] > A[i - 1] ? dp[i - 1] + 1 : 0;
    }
    var maxLen = 0;
    var tmp = 0;
    for (var j = N - 2; j > 0; j--) {
        if (A[j] > A[j + 1]) {
            tmp++;
            if (dp[j] !== 0) {
                maxLen = Math.max(maxLen, tmp + 1 + dp[j]);
            }
        }
        else {
            tmp = 0;
        }
    }
    return maxLen;
}
;
function longestMountain(A) {
    var N = A.length;
    var ans = 0;
    var left = 0;
    while (left + 2 < N) {
        var right = left + 1;
        if (A[left] < A[left + 1]) {
            while (right + 1 < N && A[right] < A[right + 1]) {
                right++;
            }
            if (right < N - 1 && A[right] > A[right + 1]) {
                while (right + 1 < N && A[right] > A[right + 1]) {
                    right++;
                }
                ans = Math.max(ans, right - left + 1);
            }
            else {
                right++;
            }
        }
        left = right;
    }
    return ans;
}
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
console.log(longestMountain([2, 2, 2])); // 0
console.log(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0])); // 11
