/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    if (!str || !str.length) {
        return 0;
    }

    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let i = 0;
    while (str[i] === ' ') {
        i++;
    }

    let symbol = true;
    if (str[i] === "-" || str[i] === "+") {
        symbol = str[i] === "+";
        i++;
    }

    let num = 0;
    while (i < str.length) {
        if (str[i] >= '0' && str[i] <= '9') {
            num = num * 10 + (str[i] - '0');
            i++;
        }
        else {
            break;
        }
    }

    if (symbol) {
        return Math.min(num, INT_MAX);
    }
    else {
        return Math.max(-num, INT_MIN);
    }
};

console.log(strToInt("42")) //42
console.log(strToInt("   -42")) //-42
console.log(strToInt("4193 with words")) //4193
console.log(strToInt("words and 987")) //0
console.log(strToInt("-91283472332")) //-2147483648