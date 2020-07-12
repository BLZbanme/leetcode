/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;

    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1);
    }

    for (let i = 2; i <= M; i++) {
        dp[i][0] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    for (let i = 2; i <= N; i++) {
        dp[0][i] = {
            val: -Infinity,
            min: -Infinity
        }
    }

    dp[0][1] = dp[1][0] = {
        val: 0,
        min: 0
    }

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            let min1 = dp[i - 1][j].min;
            if (dp[i - 1][j].val + dungeon[i - 1][j - 1] < 0) {
                min1 = Math.min(min1, dp[i - 1][j].val + dungeon[i - 1][j - 1])
            }
            let min2 = dp[i][j - 1].min;
            if (dp[i][j - 1].val + dungeon[i - 1][j - 1] < 0) {
                min2 = Math.min(min2, dp[i][j - 1].val + dungeon[i - 1][j - 1]);
            }

            dp[i][j] = {};
            if (min1 > min2) {
                dp[i][j].min = min1;
                dp[i][j].val = dp[i - 1][j].val + dungeon[i - 1][j - 1];
            }
            else {
                dp[i][j].min = min2;
                dp[i][j].val = dp[i][j - 1].val + dungeon[i - 1][j - 1];
            }
        }
    }

    return dp[M][N].min < 0 ? (1 - dp[M][N].min) : 1;
};

var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(Infinity);
    }
    dp[M][N - 1] = dp[M - 1][N] = 1;
    for (let i = M - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            let min = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(min - dungeon[i][j], 1);
        }
    }

    return dp[0][0];
}

console.log(calculateMinimumHP([
    [1,-3,3],
    [0,-2,0],
    [-3,-3,-3]
])); // 3

console.log(calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
]));