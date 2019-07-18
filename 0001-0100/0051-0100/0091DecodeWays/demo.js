/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1);
    dpArr[0] = dpArr[1] = +s[0] > 0 ? 1 : 0;
    for (let i = 2; i <= N; i++) {
        if (s[i - 1] === '0' 
            && (s[i - 2] === '0' || +s[i - 2] > 2)
        ) {
            return 0;
        }
        else if (+s.slice(i - 2, i) <= 26) {
            if (s[i - 1] === '0' || s[i - 2] === '0') {
                dpArr[i] = dpArr[i - 2];
            }
            else {
                dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
            }
        }   
        else {
            dpArr[i] = dpArr[i - 1];
        }
    }
    return dpArr[N];
};

var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1).fill(0);
    dpArr[0] = dpArr[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= N; i++) {
        const now = +s[i - 1];
        const pre = +s.slice(i - 2, i);
        dpArr[i] += now > 0 ? dpArr[i - 1] : 0;
        dpArr[i] += pre >= 10 && pre <= 26 ? dpArr[i - 2] : 0;
    }
    return dpArr[N];
};



console.log(numDecodings("101"));
console.log(numDecodings("10"));
console.log(numDecodings("0"));
console.log(numDecodings("12"));
console.log(numDecodings("226"));