/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    const N = prices.length;
    for (let i = 1; i < N; i++) {
        res += Math.max(prices[i] - prices[i - 1], 0);
    }
    return res;
};