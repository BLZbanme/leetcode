/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var hadNumberBeforeE = false;
    var hadNumberAfterE = false;
    var hadSymbol = false;
    var hadE = false;
    var hadSpot = false;

    s = s.trim();
    let i = 0;
    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            hadSymbol = true;
            if (hadE) {
                hadNumberAfterE = true;
            }
            else {
                hadNumberBeforeE = true;
            }
            i++;
            continue;
        }

        if (s[i] === '+' || s[i] === '-') {
            if (hadSymbol) {
                return false;
            }
            i++;
            hadSymbol = true;
            continue;
        }

        if (s[i] === 'e') {
            if (hadE) {
                return false;
            }
            if (!hadNumberBeforeE) {
                return false;
            }
            i++;
            hadE = true;
            hadSymbol = false;
            continue;
        }

        if (s[i] === '.') {
            if (hadSpot || hadE) {
                return false;
            }
            hadSymbol = true;
            i++;
            hadSpot = true;
            continue;
        }

        return false;
    }
    if (hadE) {
        return hadNumberAfterE
    }
    else {
        return hadNumberBeforeE;
    }
};

console.log(isNumber("005047e+6")) // true
console.log(isNumber(".1")) // true
console.log(isNumber("1 ")) // true
console.log(isNumber("+100")) // true
console.log(isNumber("5e2")) // true
console.log(isNumber("-123")) // true
console.log(isNumber("3.1416")) // true
console.log(isNumber("0123")) // true

console.log(isNumber("6e6.5")) // false
console.log(isNumber(".-4")) // false
console.log(isNumber("1e.")) // false
console.log(isNumber(". 1")) // false
console.log(isNumber(".")) //false
console.log(isNumber("e9")) //false
console.log(isNumber("12e")) // false
console.log(isNumber("1a3.14")) // false
console.log(isNumber("1.2.3")) // false
console.log(isNumber("+-5")) // false
console.log(isNumber("-1E-16")) // false
console.log(isNumber("12e+5.4")) // false