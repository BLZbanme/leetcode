function equalSubstring(s, t, maxCost) {
    var n = s.length;
    var res = 0;
    var left = 0;
    var nowDiff = 0;
    for (var right = 0; right < n; right++) {
        debugger
        nowDiff += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        if (nowDiff > maxCost) {
            nowDiff -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
}
;
console.log(equalSubstring("pxezla", "loewbi", 25)); //4
console.log(equalSubstring('abcd', 'bcde', 0)); //0
console.log(equalSubstring('abcd', 'bcdf', 3)); //3
console.log(equalSubstring('abcd', 'cdef', 3)); //1
console.log(equalSubstring('abcd', 'acde', 0)); //1
// 4 + 9 + 0 + 3 + 10 + 8

// a 1
// b 2
// c 3 
// d 4
// e 5
// f 6
// g 7
// h 8
// i 9
// j 10
// k 11
// l 12
// m 13
// n 14
// o 15
// p 16
// q 17
// r 18
// s 19
// t 20
// u 21
// v 22
// w 23
// x 24
// y 25
// z 26