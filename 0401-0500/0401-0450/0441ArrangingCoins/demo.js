/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let lo = 0;
    let hi = Math.floor(Math.sqrt(n * 2));
    while (lo <= hi) {
        let mid = Math.floor(lo + Math.floor((hi - lo) / 2));
        let tmpSum = mid * (mid + 1) / 2;
        let tmp = tmpSum + mid + 1;
        if (n === tmp) {
            return mid + 1;
        }
        else if (n > tmpSum && n < tmp) {
            return mid;
        }
        else if (n < tmpSum) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return lo - 1;
};

var arrangeCoins = function(n) {
    let i = 0;
    while (n > 0) {
        i++;
        n -= i;
    }
    return n ? i - 1 : i;
}

console.log(arrangeCoins(1));
console.log(arrangeCoins(3));
console.log(arrangeCoins(6));

console.log(arrangeCoins(1804289383));

console.log(arrangeCoins(1));
console.log(arrangeCoins(2));

console.log(arrangeCoins(3));
console.log(arrangeCoins(4));
console.log(arrangeCoins(5));
console.log(arrangeCoins(6));
console.log(arrangeCoins(7));
console.log(arrangeCoins(8));


var arrangeCoins = function(n) {
    let line = Math.floor(Math.sqrt(n * 2 - 1));
    
    let tmpSum = line * (line + 1) / 2;
    let tmp = tmpSum + line + 1;
    return n <= tmp ? line : line + 1;
};