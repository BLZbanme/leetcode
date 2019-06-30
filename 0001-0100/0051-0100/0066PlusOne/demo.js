/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    add(digits, digits.length - 1);
    return digits
};

function add(digits, i){
    if(digits[i] == 9){
        digits[i] = 0;
        if(i > 0){
            add(digits, i - 1);
        }else{
            digits.unshift(1);
        }
    }else{
        digits[i]++;
    }
}

console.log(plusOne([1,2,3]))
console.log(plusOne([9,8,9]))
console.log(plusOne([9,9,9]))