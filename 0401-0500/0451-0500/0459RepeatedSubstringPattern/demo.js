function repeatedSubstringPattern(s) {
    debugger
    for (var i = s.length >> 1; i > 0; i--) {
        var tmp = s.slice(0, i);
        var reg = new RegExp(tmp, 'g');
        if (s.replace(reg, "") === "") {
            return true;
        }
    }
    return false;
}
;

console.log(repeatedSubstringPattern('ab')) //false
console.log(repeatedSubstringPattern('abab')) //true
console.log(repeatedSubstringPattern('aba')) //false
console.log(repeatedSubstringPattern('abcabcabcabc')) //true
