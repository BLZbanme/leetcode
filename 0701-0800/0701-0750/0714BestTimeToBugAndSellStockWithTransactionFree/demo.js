function maxProfit(prices, fee) {
    var hold = -prices[0];
    var sold = 0;
    for (var i = 1; i < prices.length; i++) {
        var aftHold = Math.max(hold, sold - prices[i]);
        var aftSold = Math.max(sold, prices[i] + hold - fee);
        hold = aftHold;
        sold = aftSold;
    }
    return sold;
}
;

console.log(maxProfit([9, 8, 7, 1, 2], 3)) // 4
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 2
