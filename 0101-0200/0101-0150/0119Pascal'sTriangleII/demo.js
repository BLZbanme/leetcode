/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    for (let i = 1; i < rowIndex; i++) {
        result.push(Cmn(rowIndex, i));
    }
    result.push(1);
    return result;
};

function Cmn(m, n) {
    if (n > m / 2) {
        n = m - n;
    }
    let result = 1;
    let down = 1;
    while (n) {
        result *= m--;
        down *= n--;
    }
    return result / down;
}

var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    let dp = [1];
    var i;
    for (i = 1; i <= rowIndex / 2; i++) {
        dp[i] = dp[i - 1] * (rowIndex - i + 1) / i;
        result.push(dp[i])
    }
    i -= rowIndex % 2 ? 0 : 1;
    while (i >= 1) {
        result.push(dp[--i]);
    }
    return result;
};

var getRow = function(rowIndex) {
    let dp = [1];
    if (!rowIndex) {
        return dp;
    }
    var i;
    for (i = 1; i <= rowIndex / 2; i++) {
        dp[i] = dp[i - 1] * (rowIndex - i + 1) / i;
    }
    i -= rowIndex % 2 ? 0 : 1;
    while (i >= 1) {
        dp.push(dp[--i]);
    }
    return dp;
};


console.log(getRow(2));
console.log(getRow(3));


// function Cmn(m, n) {
//     let result = 1;
//     let down = 1;
//     while (n) {
//         result *= m--;
//         down *= n--;
//     }
//     return result / down;
// }

var getRow = function(rowIndex) {
    if (!rowIndex) {
        return [1];
    }
    let pre = [1];
    let level = 1;
    while (level <= rowIndex) {
        let tmp = [1];
        for (let i = 0; i < level - 1; i++) {
            tmp.push(pre[i] + pre[i + 1]);
        }
        tmp.push(1);
        pre = tmp;
        level++;
    }
    return pre;
}

var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        result.unshift(1);
        for (let j = 1; j < result.length - 1; j++) {
            result[j] = result[j + 1] + result[j];
        }
    }
    return result;
}

Cmn(4, 1)
Cmn(4, 2)
Cmn(4, 3)