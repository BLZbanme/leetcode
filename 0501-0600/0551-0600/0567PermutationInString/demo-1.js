/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    if (n < m) return false;
    const arr = Array(26).fill(0);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < m; i++) {
        arr[s1.charCodeAt(i) - aCode]++;
        arr[s2.charCodeAt(i) - aCode]--;
    }
    if (arr.every(e => !e)) return true;
    for (let i = m; i < n; i++) {
        arr[s2.charCodeAt(i - m) - aCode]++;
        arr[s2.charCodeAt(i) - aCode]--;
        if (arr.every(e => !e)) return true;
    }
    return false;
};