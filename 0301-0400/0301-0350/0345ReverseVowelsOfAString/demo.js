/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (!s.length) {
        return s;
    }
    const N = s.length;
    let i = 0;
    let j = N - 1;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split("");
    while (i < j) {
        while (i < j) {
            if (set.has(s[i])) {
                break;
            }
            i++;
        }

        while (i < j) {
            if (set.has(s[j])) {
                break;
            }
            j--;
        }
        [arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
    return arr.join("");
};

console.log(reverseVowels("ai"))
console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))