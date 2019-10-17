/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const N = words.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (aHasB(words[j], words[i])) {
                continue;
            }
            else {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

function aHasB(a, b) {
    for (let i = 0, len = a.length; i < len; i++) {
        if (b.indexOf(a[i]) !== -1) {
            return true;
        }
    }
    return false;
}

var maxProduct = function(words) {
    const N = words.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        let set = new Set(words[i].split(""));
        for (let j = i + 1; j < N; j++) {
            if (aHasB(words[j], set)) {
                continue;
            }
            else {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

function aHasB(str, set) {
    for (let i = 0, len = str.length; i < len; i++) {
        if (set.has(str[i])) {
            return true;
        }
    }
    return false;
}

var maxProduct = function(words) {
    if (!words || !words.length) {
        return 0;
    }
    let len = words.length;
    let value = new Array(len).fill(0);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < len; i++) {
        let tmp = words[i];
        for (let j = 0; j < tmp.length; j++) {
            value[i] |= 1 << (tmp[j].charCodeAt() - aCode);
        }
    }
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((value[i] & value[j]) === 0 && (words[i].length * words[j].length > max)) {
                max = words[i].length * words[j].length;
            }
        }
    }
    return max;
}


console.log(maxProduct(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","nopqrstuvwxyz","mnopqrstuvwxyz","lmnopqrstuvwxyz","klmnopqrstuvwxyz","jklmnopqrstuvwxyz","ijklmnopqrstuvwxyz","hijklmnopqrstuvwxyz","ghijklmnopqrstuvwxyz","fghijklmnopqrstuvwxyz","efghijklmnopqrstuvwxyz","defghijklmnopqrstuvwxyz","cdefghijklmnopqrstuvwxyz","bcdefghijklmnopqrstuvwxyz"]))

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]))
console.log(maxProduct(["a","aa","aaa","aaaa"]))