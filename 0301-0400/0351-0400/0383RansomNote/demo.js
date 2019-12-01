/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        let tmp = map.get(magazine[i]);
        if (!tmp) {
            map.set(magazine[i], 1);
        }
        else {
            map.set(magazine[i], tmp + 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let tmp = map.get(ransomNote[i]);
        if (!tmp) {
            return false;
        }
        else {
            map.set(ransomNote[i], tmp - 1);
        }
    }
    return true;
};


var canConstruct = function(ransomNote, magazine) {
    const arr = new Array(26).fill(0);
    const ACode = 'a'.charCodeAt();
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine[i].charCodeAt() - ACode]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!arr[ransomNote[i].charCodeAt() - ACode]--) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))