/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(/\s+/).filter(e => e).length;
};

var countSegments = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " " && (i === 0 || s[i - 1] === " ")) {
            res++;
        }
    }
    return res;
}

console.log(countSegments(""))
console.log(countSegments("   "))

console.log(countSegments("Hello, my name is John"))