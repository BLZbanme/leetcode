/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        result = Math.max(prices[i] - min, result);
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5

console.log(maxProfit([7,6,4,3,1])); // 0