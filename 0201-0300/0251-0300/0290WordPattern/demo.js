/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map = new Map();
    let set = new Set();
    let arr = str.split(" ");
    const N = pattern.length;
    if (arr.length !== N) {
        return false;
    }
    for (let i = 0; i < N; i++) {
        if (!map.has(pattern[i])) {
            if (!set.has(arr[i])) {
                set.add(arr[i]);
                map.set(pattern[i], arr[i]);
            }
            else {
                return false;
            }
        }
        else if (map.get(pattern[i]) !== arr[i]) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))