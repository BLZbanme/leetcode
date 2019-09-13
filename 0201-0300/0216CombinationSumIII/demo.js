/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    let arr = [];

    function recursion(k, n, min) {
        if (k === 0) {
            if (n === 0) {
                result.push(Array.from(arr));
                
            }
            return;
        }

        for (let i = min; i < 10 && i <= n; i++) {
            arr.push(i);
            recursion(k - 1, n - i, i + 1);
            arr.pop();
        }
    }

    recursion(k, n, 1);
    return result;
};

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))


