/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};

var addDigits = function(num) {
    return 1 + (num - 1) % 9;
}

console.log(addDigits(38));