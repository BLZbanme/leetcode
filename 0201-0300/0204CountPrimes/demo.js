/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }
    let count = 1;
    for (let i = 3; i < n; i++) {
        let sqrt = Math.floor(Math.sqrt(i));
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (j > sqrt) {
            count++;
        }
    }
    return count;
};

var countPrimes = function(n) {
    let notPrime = new Array(n).fill(false);
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            count++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return count;
}

console.log(countPrimes(10));
console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(4));
console.log(countPrimes(5));