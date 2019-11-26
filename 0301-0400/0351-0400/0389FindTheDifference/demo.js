/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr = new Array(26).fill(0);
    const ACode = 'a'.charCodeAt();
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - ACode]++;
    }

    for (let i = 0; i < t.length; i++) {
        arr[t[i].charCodeAt() - ACode]--;
        if (arr[t[i].charCodeAt() - ACode] < 0) {
            return t[i];
        }
    }
};

var findTheDifference = function(s, t) {
    const N = t.length;
    let c = t[N - 1].charCodeAt();
    for (let i = 0; i < N - 1; i++) {
        c ^= s[i].charCodeAt();
        c ^= t[i].charCodeAt();
    }
    return String.fromCharCode(c);
}

var findTheDifference = function(s, t) {
    let charCode = t[s.length].charCodeAt();
    for (let i = 0; i < s.length; i++) {
        charCode -= s[i].charCodeAt();
        charCode += t[i].charCodeAt();
    }
    return String.fromCharCode(charCode);
}

console.log(findTheDifference("abcd", "abcde"));