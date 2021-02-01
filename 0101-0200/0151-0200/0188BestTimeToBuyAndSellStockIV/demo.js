"use strict";
function maxProfit(k, prices) {
    var _a;
    if (!prices.length) {
        return 0;
    }
    var N = prices.length;
    k = Math.min(k, Math.floor(N >> 1));
    var buy = Array(k + 1).fill(0);
    var sell = Array(k + 1).fill(0);
    _a = [-prices[0], 0], buy[0] = _a[0], sell[0] = _a[1];
    for (var i = 1; i < k + 1; i++) {
        buy[i] = sell[i] = -Infinity;
    }
    for (var i = 1; i < N; i++) {
        buy[0] = Math.max(buy[0], sell[0] - prices[i]);
        for (var j = 1; j < k + 1; j++) {
            buy[j] = Math.max(buy[j], sell[j] - prices[i]);
            sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]);
        }
    }
    return Math.max.apply(Math, sell);
}
;
