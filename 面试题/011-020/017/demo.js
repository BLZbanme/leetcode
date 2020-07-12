/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let num = 10 ** n;
    const result = Array(num - 1);
    for (let i = 1; i < num; i++) {
        result[i - 1] = i;
    }
    return result;
};

var printNumbers = function(n) {
    const result = ['1', '2', '3','4', '5', '6', '7', '8', '9'];

    const queue = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9'];

    let bit = 1;
    while (bit < n) {
        let length = queue.length;
        for (let i = 1; i <= 9; i++) {
            for (let j = 0; j < length; j++) {
                let tmp = i + fillZero(queue[j], bit);
                result.push(tmp);
                queue.push(tmp);
            }
        }
        bit++;
    }
    
    return result.map(e => +e);
}

function fillZero(str, n) {
    while (str.length < n) {
        str = '0' + str;
    }
    return str;
}

console.log(printNumbers(2));
console.log(printNumbers(3));