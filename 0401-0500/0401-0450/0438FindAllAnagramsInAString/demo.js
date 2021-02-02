function findAnagrams(s, p) {
    var winLen = p.length;
    var arr = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    
    for (var i = 0; i < winLen; i++) {
        arr[p.charCodeAt(i) - aCode]++;
        arr[s.charCodeAt(i) - aCode]--;
    }
    var result = [];
    
    arr.every(function (e) { return !e; }) && result.push(0);
    for (var i = winLen; i < s.length; i++) {
        debugger
        arr[s.charCodeAt(i - winLen) - aCode]++;
        arr[s.charCodeAt(i) - aCode]--;
        arr.every(function (e) { return !e; }) && result.push(i - winLen + 1);
    }
    return result;
}
;
console.log(findAnagrams('cbaebabacd', 'abc')); //[0, 6]
