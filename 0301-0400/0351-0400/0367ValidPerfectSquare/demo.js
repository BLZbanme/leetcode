/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i = 0; i <= num; i++) {
        let tmp = i * i;
        if (tmp < num) {
            continue;
        }
        else if (tmp === num) {
            return true;
        }
        else {
            return false;
        }
    }
};

var isPerfectSquare = function(num) {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return !num;
}

var isPerfectSquare = function(num) {
    let low = 1;
    let high = num;
    while (low <= high) {
        let mid = (low + high) >>> 1;
        let tmp = mid * mid;
        if (tmp > num) {
            high = mid - 1;
        }
        else if (tmp < num) {
            low = mid + 1;
        }
        else {
            return true;
        }
    }
    return false;
}

console.log(isPerfectSquare(14));
console.log(isPerfectSquare(256));