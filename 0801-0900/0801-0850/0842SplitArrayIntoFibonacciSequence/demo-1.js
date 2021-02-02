"use strict";
function splitIntoFibonacci(S) {
    if (!S) {
        return [];
    }
    var result = [];
    var max = Math.pow(2, 31) - 1;
    var dfs = function (str) {
        if (str === '') {
            return true;
        }
        if (result.length >= 2) {
            var sum = result[result.length - 1] + result[result.length - 2];
            if (sum > max) {
                return false;
            }
            if (str.startsWith(sum.toString())) {
                result.push(sum);
                if (dfs(str.slice(sum.toString().length))) {
                    return true;
                }
                result.pop();
            }
            else {
                return false;
            }
        }
        else {
            for (var i = 1; i < str.length; i++) {
                var now = +str.slice(0, i);
                if (now.toString().length !== i) {
                    continue;
                }
                result.push(now);
                if (dfs(str.slice(i))) {
                    return true;
                }
                ;
                result.pop();
            }
            return false;
        }
    };
    dfs(S);
    return result;
}
;
console.log(splitIntoFibonacci("539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511")); //[539834657,21,539834678,539834699,1079669377,1619504076,2699173453,4318677529,7017850982,11336528511]
console.log(splitIntoFibonacci('0000')); //[0, 0, 0, 0]
console.log(splitIntoFibonacci('123456579')); //[123,456,579]
console.log(splitIntoFibonacci('11235813')); //[1,1,2,3,5,8,13]
console.log(splitIntoFibonacci('112358130')); //[]
console.log(splitIntoFibonacci('0123')); //[]
console.log(splitIntoFibonacci('1101111')); //[110, 1, 111]
