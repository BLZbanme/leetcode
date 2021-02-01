function equalSubstring(s: string, t: string, maxCost: number): number {
    const n = s.length;

    let res = 0;
    let left = 0;
    let nowDiff = 0;
    for (let right = 0; right < n; right++) {
        nowDiff += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        if (nowDiff > maxCost) {
            nowDiff -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};

console.log(equalSubstring("pxezla", "loewbi", 25)) //4
console.log(equalSubstring('abcd', 'bcde', 0)) //0
console.log(equalSubstring('abcd', 'bcdf', 3)) //3
console.log(equalSubstring('abcd', 'cdef', 3)) //1
console.log(equalSubstring('abcd', 'acde', 0)) //1