/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let arr = new Array(n + 1).fill(false);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * i <= n; j++) {
            arr[j * i] = !arr[j * i];
        }
    }
    return arr.filter(e => e).length;
};


var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(3));