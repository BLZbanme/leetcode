/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (let c of s) {
        let tmp = map.get(c);
        if (tmp) {
            map.set(c, tmp + 1);
        }
        else {
            map.set(c, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};

var firstUniqChar = function(s) {
    const array = new Array(26).fill(0);
    const ANum = 'a'.charCodeAt();
    for (let c of s) {
        array[c.charCodeAt() - ANum]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (array[s[i].charCodeAt() - ANum] === 1) {
            return i;
        }
    }

    return -1;
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));