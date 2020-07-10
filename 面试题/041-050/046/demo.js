/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let numStr = num.toString();
    const N = numStr.length;
    let result = 1;
    for (let i = 1; i <= N; i++) {
        let tmp = numStr.substr(i - 1, 2);
        if (+tmp <= 25) {
            result++;
        }
    }
    return result;
};

var translateNum = function(num) {
    let numStr = num.toString();
    const N = numStr.length;
    const dp = new Array(N + 1);
    dp[0] = 1;
    dp[1] = 1;
    // debugger
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1];
        let tmp = numStr.substr(i - 2, 2);
        if (+tmp <= 25 && +tmp > 9) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[N];
};
console.log(translateNum(506)); //1
console.log(translateNum(12258)); //5 

console.log(translateNum(25)); //2
