/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (!num) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    if (num % 2 === 0) {
        return isUgly(num / 2);
    }
    else if (num % 3 === 0) {
        return isUgly(num / 3);
    }
    else if (num % 5 === 0) {
        return isUgly(num / 5);
    }
    return false;
};

var isUgly = function(num) {
    for (var p of [2, ,3 ,5]) {
        while (num && num % p === 0) {
            num /= p;
        }
    }
    return num === 1;
}

console.log(isUgly(0));
console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));