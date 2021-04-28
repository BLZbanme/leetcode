/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const set = new Set([0]);
    let i = 0;
    let cur = 0;
    while (cur <= c) {
        cur = (i++) ** 2;
        set.add(cur);
        if (set.has(c - cur)) {
            return true;
        }
    }
    return false;
};

console.log(judgeSquareSum(0)) //true

console.log(judgeSquareSum(5)) //true
console.log(judgeSquareSum(3)) //false
console.log(judgeSquareSum(4)) //true
console.log(judgeSquareSum(2)) //true