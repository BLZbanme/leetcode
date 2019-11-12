/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        if (isSquares(i)) {
            dp[i] = 1;
            continue;
        }
        let min = Infinity;
        for(let j = 1; j <= i / 2; j++) {
            min = Math.min(dp[j] + dp[i - j], min);
        }
        dp[i] = Math.min(min, dp[i - 1] + 1);
    }
    return dp[n];
};

function isSquares(n) {
    let tmp = Math.floor(Math.sqrt(n));
    return n === tmp ** 2;
}

var numSquares = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    let nextNum = 4;
    for (let i = 2; i <= n; i++) {
        if (i === nextNum) {
            dp[i] = 1;
            nextNum = (Math.sqrt(nextNum) + 1) ** 2;
            continue;
        }
        let min = Infinity;
        for(let j = 1; j <= i / 2; j++) {
            min = Math.min(dp[j] + dp[i - j], min);
        }
        dp[i] = Math.min(min, dp[i - 1] + 1);
    }
    return dp[n];
};

var numSquares = function(n) {
    let list = new Array(n + 1).fill(Infinity);
    list[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j ** 2 <= i; j++) {
            list[i] = Math.min(list[i], list[i - j ** 2] + 1);
        }
    }
    return list[n];
}

var numSquares = function(n) {
    let list =[0];
    while (list.length <= n) {
        let m = list.length;
        let tmp = Infinity;
        for (let i = 1; i * i <= m; i++) {
            tmp = Math.min(tmp, list[m - i * i] + 1);
        }
        list.push(tmp);
    }
    return list[n];
}

var numSquares = function(n) {
    let queue = [0];
    let visited = new Set([0]);
    let depth = 0;
    while (queue.length) {
        let size = queue.length;
        depth++;
        while (size--) {
            let u = queue.shift();
            for (let i = 1; i * i <= n; i++) {
                let v = u + i * i;
                if (v === n) {
                    return depth;
                }
                if (v > n) {
                    break;
                }
                if (!visited.has(v)) {
                    queue.push(v);
                    visited.add(v);
                }
            }
        }
    }
    return depth;
}


console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares(25));
console.log(numSquares(26));