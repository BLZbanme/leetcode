/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        while ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
            i++;
        }
        while ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
            j--;
        }

        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

var isPalindrome = function(s) {
    if (!s || !s.length) {
        return true;
    }

    let i = 0;
    let j = s.length - 1;
    const reg = /\W|_/;

    while (i <= j) {
        while (reg.test(s[i])) {
            i++;
        }
        while (reg.test(s[j])) {
            j--;
        }

        if (i >= j) {
            break;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(" ")) //true

console.log(isPalindrome("0P")) //false
console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
console.log(isPalindrome("race a car")) //false