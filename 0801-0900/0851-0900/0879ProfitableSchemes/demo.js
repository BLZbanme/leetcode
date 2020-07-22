/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(G, P, group, profit) {
    let result = 0;

    let sum = 0;

    function dfs(index) {

        for (let i = index; i < profit.length; i++) {
            if (group[i] <= G) {
                sum += profit[i];
                if (sum >= P) {
                    result++;
                }
                G -= group[i];
                dfs(i + 1);
                sum -= profit[i];
                G += group[i];
            }
        }

        return;
    }

    dfs(0);

    return result;
};

var profitableSchemes = function(G, P, group, profit) {
    const dp = Array(P + 1);
    for (let i = 0; i <= P; i++) {
        dp[i] = Array(G + 1).fill(0);
    }
    debugger
    dp[0][0] = 1;
    let res = 0;
    let mod = 10 ** 9 + 7;
    for (let k = 0; k < group.length; k++) {
        let g = group[k];
        let p = profit[k];
        for (let i = P; i >= 0; i--) {
            for (let j = G - g; j >= 0; j--) {
                dp[Math.min(i + p, P)][j + g] = (dp[Math.min(i + p, P)][j + g] + dp[i][j]) % mod;
            }
        }
    }

    for (let x of dp[P]) {
        res = (res + x) % mod;
    }

    return res;
};

console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])); //7

console.log(profitableSchemes(1,
    1,
    [1,1,1,1,2,2,1,2,1,1],
    [0,1,0,0,1,1,1,0,2,2])); //4

console.log(profitableSchemes(5, 3, [2, 2], [2, 3])); //2
