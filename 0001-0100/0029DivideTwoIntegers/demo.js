/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let n = 0;
    let sign = true;
    if(dividend < 0){
        dividend = - dividend;
        sign = !sign;
    }
    if(divisor < 0){
        divisor = - divisor;
        sign = !sign;
    }
    while(dividend >= divisor){
        dividend -= divisor;
        n++
    }
    if(n == 2 ** 31 && sign){
        return 2 ** 31 - 1
    }
    return Number((sign ? "" : "-") + n);
};

divide(10, 3)
divide(-1, 1)
divide(7, -3)