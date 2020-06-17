/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let strArr = s.split("");
    if (n > s.length) {
        n %= s.length;
    }
    while (n--) {
        strArr.push(strArr.shift());
    }
    return strArr.join("");
};

var reverseLeftWords = function(s, n) {
    let strArr = s.split("");
    if (n > s.length) {
        n %= s.length;
    }
    let preArr = strArr.slice(0, n);

    for (let i = n; i < s.length; i++) {
        strArr[i - n] = strArr[i];
    }

    const off = s.length - n;
    for (let i = off; i < s.length; i++) {
        strArr[i] = preArr[i - off];
    }
    return strArr.join("");
};

var reverseLeftWords = function(s, n) {
    let strArr = s.split("");
    const LEN = s.length;
    if (n > LEN) {
        n %= LEN;
    }
    
    const tmpArr = new Array(n);
    const off = LEN - n;
    for (let i = 0; i < LEN; i++) {
        if (i < n) {
            tmpArr[i] = strArr[i];
        }
        else {
            strArr[i - n] = strArr[i];
        }
        if (i >= off) {
            strArr[i] = tmpArr[i - off]
        }
    }
    return strArr.join("");
};

console.log(reverseLeftWords("lrloseumgh", 6)) // "umghlrlose"

console.log(reverseLeftWords("abcdefg", 2)) // "cdefgab"
