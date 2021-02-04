function findSubstringInWraproundString1(p) {
    var left = 0;
    var n = p.length;
    var dp = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    for (var right = 0; right < n; right++) {
        if (!(left == right
            || (p[right] === 'a' && p[right - 1] === 'z') || (p.charCodeAt(right) - p.charCodeAt(right - 1) === 1))) {
            left = right;
        }
        dp[p.charCodeAt(right) - aCode] = Math.max(dp[p.charCodeAt(right) - aCode], right - left + 1);
    }
    return dp.reduce(function (cur, pre) { return cur + pre; });
}
;
function findSubstringInWraproundString(p) {
    var n = p.length;
    var dp = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    var pre = 0;
    for (var i = 0; i < n; i++) {
        if (i === 0
            || (p[i] === 'a' && p[i - 1] === 'z') || (p.charCodeAt(i) - p.charCodeAt(i - 1) === 1)) {
            pre++;
        }
        else {
            pre = 1;
        }
        dp[p.charCodeAt(i) - aCode] = Math.max(dp[p.charCodeAt(i) - aCode], pre);
    }
    return dp.reduce(function (cur, pre) { return cur + pre; });
}
;
console.log(findSubstringInWraproundString('a')); //1
console.log(findSubstringInWraproundString("cac")); //2
console.log(findSubstringInWraproundString("zab")); //6
