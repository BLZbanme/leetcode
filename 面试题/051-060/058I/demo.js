/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    const strArr = s.split(" ").filter(e => e);
    if (!strArr || !strArr.length) {
        return "";
    }
    const sLen = strArr.length;
    for (let i = 0; i < sLen >> 1; i++) {
        [strArr[i], strArr[sLen - 1 - i]] = [strArr[sLen - 1 - i], strArr[i]];
    }
    return strArr.join(" ");
};

var reverseWords = function(s) {
    return s.trim().split(" ").filter(e => e).reverse().join(" ");
};

console.log(reverseWords("student. a am I"))
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))
console.log(reverseWords("a good   example"))