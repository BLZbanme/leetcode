/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        let newN = 0;
        let tmp;
        while (n) {
            tmp = n % 10;
            n = Math.floor(n / 10);
            newN += tmp ** 2; 
        }
        n = newN;
    }
    return true;
};

function digitSquareSum(n) {
    let sum = 0;
    let tmp;
    while (n) {
        tmp = n % 10;
        sum += tmp ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function(n) {
    let slow;
    let fast;
    slow = fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while (slow !== fast);
    if (slow === 1) {
        return true;
    }
    return false;
}

console.log(isHappy(19));
console.log(isHappy(2));