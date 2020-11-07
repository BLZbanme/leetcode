function maxProfit1(prices) {
    var sold = 0;
    var hold = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        hold = Math.max(hold, sold - prices[i]);
        sold = Math.max(sold, hold + prices[i]);
    }
    return sold;
}
;
function maxProfit(prices) {
    var ans = 0;
    for (var i = 1; i < prices.length; i++) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
}

console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
