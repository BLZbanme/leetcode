/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).split("").map(a => a == '1' ? "0" : "1").join(""), 2);
};

var findComplement = function(num) {
    let mask = ~0;
    while(mask & num){
        mask <<= 1;
    }
    return ~num & ~mask;
};

findComplement(5)