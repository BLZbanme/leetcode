/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    let ans = [];
    const max = 2 ** 31 - 1;

    function dfs(p, pre1, pre2, deep) {

        let length = S.length;
        if (p === length) {
            return deep >= 3;
        }

        for (let i = 1; i <= 11; i++) {
            if (p + i > length || (S[p] == '0' && i > 1)) {
                break;
            }

            let sub = S.slice(p, p + i);
            let numL = +sub;
            if (numL > max || deep != 0 && deep != 1 && numL > pre1 + pre2) {
                break;
            }

            if (deep == 0 || deep == 1 || numL == pre1 + pre2) {
                ans.push(numL);
                if (dfs(p + i, pre2, numL, deep + 1)) {
                    return true;
                }
                ans.pop();
            }
        }

        return false;
    }

    return dfs(0, 0, 0, 0) ? ans : [];
};

console.log(splitIntoFibonacci("539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511")); // []

console.log(splitIntoFibonacci("123456579"));

[539834657,21,539834678,539834699,1079669377,1619504076,2699173453,4318677529,7017850982,11336528511]
11336528511
2147483647