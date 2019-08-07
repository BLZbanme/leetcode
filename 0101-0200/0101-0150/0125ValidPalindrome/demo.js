/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let reg = /\W/;
    while (i < j) {
        while (reg.test(s[i])) {
            i++;
        }
        while (reg.test(s[j])) {
            j--;
        }
        if (i >= j) {
            return true;
        }
        if (s[i].toUpperCase() !== s[j].toUpperCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let reg = /\W/;
    while (i < j) {
        if (reg.test(s[i])) {
            i++;
        }
        else if (reg.test(s[j])) {
            j--;
        }
        else {
            if (s[i].toUpperCase() !== s[j].toUpperCase()) {
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};


console.log(isPalindrome("`l;`` 1o1 ??;l`"));
console.log(isPalindrome("0P"));
console.log(isPalindrome("race a car"));

console.log(isPalindrome(".,"));
console.log(isPalindrome(""));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
