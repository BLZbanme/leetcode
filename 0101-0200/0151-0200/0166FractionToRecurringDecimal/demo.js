/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let pre = numerator / denominator;
    let aft = numerator % denominator;
    if (!aft) {
        return `${pre}`;
    }

    let isPosstive = true;
    if (pre < 0) {
        isPosstive = false;
        aft = Math.abs(aft);
        denominator = Math.abs(denominator);
    }
    pre = Math.floor(Math.abs(pre));

    let arr = [];
    let str = "";
    while (aft !== 0 && arr.indexOf(aft) === -1) {
        arr.push(aft);
        aft *= 10;
        str += Math.floor(aft / denominator);
        aft %= denominator;
    }
    
    if (!aft) {
        return `${isPosstive ? "" : "-"}${pre}.${str}`; 
    }
    let index = arr.indexOf(aft);
    return `${isPosstive ? "" : "-"}${pre}.${str.slice(0, index)}(${str.slice(index)})`;
};

console.log(fractionToDecimal(7, -12))
console.log(fractionToDecimal(-50, 8))
console.log(fractionToDecimal(4, 333))
console.log(fractionToDecimal(1, 6))
console.log(fractionToDecimal(1, 2))
console.log(fractionToDecimal(2, 1))
console.log(fractionToDecimal(2, 3))