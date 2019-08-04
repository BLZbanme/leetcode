/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let result = 0;
    prices.forEach(price => {
        if (price < min) {
            min = price;
        }
        else {
            let tmp = price - min;
            if (tmp > result) {
                result = tmp;
            }
        }
    })
    return result;
};

var maxProfit = function(prices) {
    let maxCur = 0;
    let maxSoFar = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;
}

maxProfit([7,6,4,3,1])