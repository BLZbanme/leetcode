function maxProfit(k: number, prices: number[]): number {
    if (!prices.length) {
        return 0;
    }
    const N = prices.length;
    k = Math.min(k, Math.floor(N >> 1));
    const buy = Array(k + 1).fill(0);
    const sell = Array(k + 1).fill(0);
    [buy[0], sell[0]] = [-prices[0], 0];
    for (let i = 1; i < k + 1; i++) {
        buy[i] = sell[i] = -Infinity;
    }

    for (let i = 1; i < N; i++) {
        buy[0] = Math.max(buy[0], sell[0] - prices[i]);
        for (let j = 1; j < k + 1; j++) {
            buy[j] = Math.max(buy[j], sell[j] - prices[i]);
            sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]);
        }
    }
    return Math.max(...sell);
};