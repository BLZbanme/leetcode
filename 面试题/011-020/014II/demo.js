/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const dp = new Array(n + 1);
    for (let i = 1; i < n; i++) {
        dp[i] = BigInt(i);
    }
    dp[n] = BigInt(0);

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i - j; j++) {
            let tmp =  dp[j] * dp[i - j];
            dp[i] = tmp > dp[i] ? tmp : dp[i];
        }
    }
    return parseInt(dp[n] % BigInt(1e9 + 7));
};

var cuttingRope = function(n) {
    if (n <= 3) {
        return n - 1;
    }
    let threeTimes = Math.floor(n / 3) - 1;
    let remain = n % 3;
    let result = 1;
    for (let i = 0; i < threeTimes; i++) {
        result *= 3;
        result %= 1e9 + 7;
    }

    if (!remain) {
        result *= 3;
    }
    else if (remain == 1) {
        result *= 4;
    }
    else {
        result *= 6;
    }

    return result % (1e9 + 7)
}

var cuttingRope = function(n) {
    if (n <= 3) {
        return n - 1;
    }

    let threeTimes = Math.floor(n / 3) - 1;
    let remain = n % 3;

    let x = 3;
    let result = 1;

    while (threeTimes > 0) {
        if (threeTimes & 1) {
            result = (result * x) % (1e9 + 7);
        }
        x = (x * x) % (1e9 + 7);
        threeTimes >>= 1;
    }
    
    if (!remain) {
        result *= 3;
    }
    else if (remain == 1) {
        result *= 4;
    }
    else {
        result *= 6;
    }

    return result % (1e9 + 7)
}

console.log(cuttingRope(211)) // 217284470;


console.log(cuttingRope(120)) // 953271190;


console.log(cuttingRope(10)) // 36;
console.log(cuttingRope(8)) // 18;

console.log(cuttingRope(2)) // 1;

