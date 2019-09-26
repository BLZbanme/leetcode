/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if ((!s && t) || (s && !t) || s.length !== t.length) {
        return false;
    }
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    const N = s.length;
    let codeA = 'a'.charCodeAt();
    for (let i = 0; i < N; i++) {
        arr1[s[i].charCodeAt() - codeA]++;
        arr2[t[i].charCodeAt() - codeA]++;
    }
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

var isAnagram = function(s, t) {
    if ((!s && t) || (s && !t) || s.length !== t.length) {
        return false;
    }
    let arr = new Array(26).fill(0);
    const N = s.length;
    let codeA = 'a'.charCodeAt();
    for (let i = 0; i < N; i++) {
        arr[s[i].charCodeAt() - codeA]++;
        arr[t[i].charCodeAt() - codeA]--;
    }
    return arr.every(e => e === 0);
};


console.log(isAnagram("", "car"))
console.log(isAnagram("car", ""))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("abc", "cba"))
console.log(isAnagram("anagram", "nagaram"))
