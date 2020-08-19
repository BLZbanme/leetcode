/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = s.length;

    const checkSubStr = (index) => {
        for (let i = 2; index + i <= s.length; i++) {
            let tmp = s.substr(index, i);
            if (isPalindromic(tmp)) {
                count++;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkSubStr(i);
    }

    return count;
};

function isPalindromic(subStr) {
    let lo = 0;
    let hi = subStr.length - 1;
    while (lo < hi) {
        if (subStr[lo++] !== subStr[hi--]) {
            return false;
        }
    }
    return true;
}

console.log(countSubstrings('abc')); //3

console.log(countSubstrings('aaa')); //6