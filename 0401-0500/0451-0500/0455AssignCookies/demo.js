/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = 0, j = 0;
    const gLen = g.length;
    const sLen = s.length;
    let count = 0;
    while (i < gLen && j < sLen) {
        if (g[i] <= s[j]) {
            count++;
            i++;
            j++;
        }
        else if (g[i] > s[j]) {
            j++;
        }
    }
    return count;
};

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = 0, j = 0;
    const gLen = g.length;
    const sLen = s.length;
    while (i < gLen && j < sLen) {
        if (g[i] <= s[j]) {
            i++;
        }
        j++;
    }
    return i;
};


console.log(findContentChildren([1, 2, 3], [1, 1]))

console.log(findContentChildren([1, 2], [1, 2, 3]))