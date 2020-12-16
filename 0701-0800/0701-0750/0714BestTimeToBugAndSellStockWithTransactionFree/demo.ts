function maxProfit1(prices: number[], fee: number): number {
    let hold = -prices[0];
    let sold = 0;
    for (let i = 1; i < prices.length; i++) {
        let aftHold = Math.max(hold, sold - prices[i])
        let aftSold = Math.max(sold, prices[i] + hold - fee)
        hold = aftHold;
        sold = aftSold;
    }
    return sold;
};

function maxProfit(prices: number[], fee: number): number {
    let hold = -prices[0];
    let sold = 0;
    for (let i = 1; i < prices.length; i++) {
        hold = Math.max(hold, sold - prices[i])
        sold = Math.max(sold, prices[i] + hold - fee)
    }
    return sold;
};

console.log(maxProfit([9, 8, 7, 1, 2], 3)) // 4
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)) // 2