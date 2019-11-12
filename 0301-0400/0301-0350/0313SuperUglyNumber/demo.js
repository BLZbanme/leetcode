/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let N = primes.length;
    if (!N) {
        return 0;
    }
    let result = [1];
    let countArr = new Array(N).fill(0);
    for (let i = 1; i < n; i++) {
        let tmp = getNewMin(countArr);
        for (let i = 0; i < N; i++) {
            if ((primes[i] * result[countArr[i]]) === tmp) {
                countArr[i]++;
            }
        }
        result.push(tmp);
    }

    function getNewMin() {
        let min = Infinity;
        for (let i = 0; i < N; i++) {
            min = Math.min(min, primes[i] * result[countArr[i]]);
        }
        return min;
    }

    return result[n - 1];
};

console.log(nthSuperUglyNumber(12, [2]))
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))

