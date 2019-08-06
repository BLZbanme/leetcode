/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length) {
        return 0;
    }
    const N = prices.length;
    let dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = 0;
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i - 1], prices[j + i] - Math.min(...prices.slice(j, j + i))); 
        }
    }

    let result = prices[N - 1] - prices[0];
    for (let i = 0; i < N - 1; i++) {
        result = Math.max(result, dp[0][i] + dp[i + 1][N - 1]);
    }
    return result;
};

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let maxProf = 0;
    let arr = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        arr[i] = new Array(N).fill(0);
    }
    debugger
    for (let k = 1; k <= times; k++) {
        let tmpMax = arr[k - 1][0] - prices[0];
        for (let i = 1; i < N; i++) {
            arr[k][i] = Math.max(arr[k][i - 1], prices[i] + tmpMax);
            tmpMax = Math.max(tmpMax, arr[k - 1][i] - prices[i]);
            maxProf = Math.max(arr[k][i], maxProf);
        }
    }
    return maxProf;
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        for (let i = 1; i < N; i++) {
            let min = prices[0];
            for (let j = 1; j <= i; j++) {
                min = Math.min(min, prices[j] - dp[k - 1][j - 1]);
            }
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        let min = prices[0];
        for (let i = 1; i < N; i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let arr = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        arr[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        let tmpMax = arr[k - 1][0] - prices[0];
        for (let i = 1; i < N; i++) {
            arr[k][i] = Math.max(arr[k][i - 1], prices[i] + tmpMax);
            tmpMax = Math.max(tmpMax, arr[k - 1][i] - prices[i]);
        }
    }
    return arr[times][N - 1];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3);
    for (let i = 0; i < 3; i++) {
        dp[i] = new Array(N).fill(0);
    }
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min[k]);
        }
    }
    return dp[2][N - 1];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3).fill(0);
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1]);
            dp[k] = Math.max(dp[k], prices[i] - min[k]);
        }
    }
    return dp[2];
}


var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let global = new Array(3).fill(0);
    let local = new Array(3).fill(0);
    for (let i = 0; i < N - 1; i++) {
        let diff = prices[i + 1] - prices[i];
        for (let j = 2; j >= 1; --j) {
            local[j] = Math.max(global[j - 1] + Math.max(diff, 0), local[j] + diff);
            global[j] = Math.max(local[j], global[j]);
        }
    }
    return global[2];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let global = new Array(N);
    let local = new Array(N);
    for (let i = 0; i < N; i++) {
        global[i] = new Array(3).fill(0);
        local[i] = new Array(3).fill(0);
    }

    for (let i = 1; i < N; i++) {
        let diff = prices[i] - prices[i - 1];
        for (let j = 1; j <= 2; j++) {
            local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(diff, 0) , local[i - 1][j] + diff);
            global[i][j] = Math.max(local[i][j], global[i - 1][j]);
        }
    }
    return global[N - 1][2];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let global = new Array(3).fill(0);
    let local = new Array(3).fill(0);
    for (let i = 0; i < N - 1; i++) {
        let diff = prices[i + 1] - prices[i];
        for (let j = 2; j >= 1; --j) {
            local[j] = Math.max(global[j - 1] + Math.max(diff, 0), local[j] + diff);
            global[j] = Math.max(local[j], global[j]);
        }
    }
    return global[2];
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let res = 0;
    let cutMax = 0;
    for (let cut = 0; cut < N; cut++) {
        let preMin = prices[0];
        let preMax = 0;
        for (let i = 1; i < cut; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax = preMax;
        
        preMin = prices[cut];
        preMax = 0;
        for (let i = cut + 1; i < N; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax += preMax;
        res = Math.max(res, cutMax);
    }
    return res;
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let maxPre = new Array(N);
    let maxLast = new Array(N);
    maxPre[0] = 0;
    let minCur = prices[0];
    for (let i = 1; i < N; i++) {
        maxPre[i] = Math.max(maxPre[i - 1], prices[i] - minCur);
        minCur = Math.min(minCur, prices[i]);
    }

    maxLast[N - 1] = 0;
    let maxCur = prices[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        maxLast[i] = Math.max(maxLast[i + 1], maxCur - prices[i]);
        maxCur = Math.max(maxCur, prices[i]);
    }

    let res = maxLast[0];
    for (let cut = 1; cut < N; cut++) {
        res = Math.max(res, maxPre[cut - 1] + maxLast[cut]);
    }
    return res;
}

var maxProfit = function(prices) {
    let buyOne = -Infinity;
    let butTwo = -Infinity;
    let sellOne = 0;
    let sellTwo = 0;
    for (let price of prices) {
        buyOne = Math.max(buyOne, -price);
        sellOne = Math.max(sellOne, buyOne + price);
        butTwo = Math.max(butTwo, sellOne - price);
        sellTwo = Math.max(sellTwo, butTwo + price);
    }
    return sellTwo;
}

console.log(maxProfit([3,3,5,0,0,3,1,4]))

console.log(maxProfit([1,2,3,4,5]))

console.log(maxProfit([7,6,4,3,1]))