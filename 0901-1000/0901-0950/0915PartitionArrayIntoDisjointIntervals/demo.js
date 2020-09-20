function partitionDisjoint(A) {
    var N = A.length;
    var dp = Array(N);
    dp[0] = A[0];
    for (var i = 1; i < N - 1; i++) {
        dp[i] = Math.max(A[i], dp[i - 1]);
    }
    var min = A[N - 1];
    var result = N - 1;
    for (var i = N - 2; i > 0; i--) {
        min = Math.min(min, A[i]);
        if (dp[i - 1] <= min) {
            result = i;
        }
    }
    return result;
}
;
console.log(partitionDisjoint([5, 0, 3, 8, 6])); // 3
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12])); // 4
console.log(partitionDisjoint([6, 0, 8, 30, 37, 6, 75, 98, 39, 90, 63, 74, 52, 92, 64])); // 2
