/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const arr = Array(26).fill(0);
    const aCode = 'a'.charCodeAt();

    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - aCode]++;
    }
  
    for (let i = 0; i < s.length; i++) {
        if (arr[s[i].charCodeAt() - aCode] === 1) {
            return s[i];
        }
    }

    return " ";
};

var firstUniqChar = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let num = map.get(s[i]) || 0;
        map.set(s[i], num + 1);
    }
  
    let result;
    map.forEach((value, key) => {
        if (value === 1 && !result) {
            result = key;
        }
    });

    return result ? result : " ";
};

console.log(firstUniqChar("abaccdeff"))