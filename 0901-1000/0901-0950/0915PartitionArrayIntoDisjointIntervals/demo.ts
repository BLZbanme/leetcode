function partitionDisjoint1(A: number[]): number {
    const N = A.length;
    const dp = Array(N);
    dp[0] = A[0];
    for (let i = 1; i < N - 1; i++) {
        dp[i] = Math.max(A[i], dp[i - 1]);
    }

    let min = A[N - 1];
    let result = N - 1;
    for (let i = N - 2; i > 0; i--) {
        min = Math.min(min, A[i]);
        if (dp[i - 1] <= min) {
            result = i;
        }
    }
    return result;
};

function partitionDisjoint(A: number[]): number {
    const N = A.length;
    let max = A[0];
    let leftMax = A[0];
    let pos = 0;
    for (let i = 0; i < N; i++) {
        max = Math.max(max, A[i]);
        if (A[i] >= leftMax) {
            continue;
        }
        leftMax = max;
        pos = i;
    }
    return pos + 1;
}

console.log(partitionDisjoint([5,0,3,8,6])); // 3
console.log(partitionDisjoint([1,1,1,0,6,12])); // 4
console.log(partitionDisjoint([6,0,8,30,37,6,75,98,39,90,63,74,52,92,64])); // 2