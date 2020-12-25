function findContentChildren(g, s) {
    g.sort(function (a, b) { return a - b; });
    s.sort(function (a, b) { return a - b; });
    var result = 0;
    var i = 0;
    var j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            result++;
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    return result;
}
;
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); //2
console.log(findContentChildren([1, 2, 3], [1, 1])); //1
console.log(findContentChildren([1, 2], [1, 2, 3])); //2
