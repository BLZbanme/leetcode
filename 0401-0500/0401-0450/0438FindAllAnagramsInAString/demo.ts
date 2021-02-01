function findAnagrams(s: string, p: string): number[] {
    const winLen = p.length;
    const arr = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < winLen; i++) {
        arr[p.charCodeAt(i) - aCode]++;
        arr[s.charCodeAt(i) - aCode]--;
    }
    const result = [];
    arr.every(e => !e) && result.push(0);
    
    for (let i = winLen; i < s.length; i++) {
        arr[s.charCodeAt(i - winLen) - aCode]++;
        arr[s.charCodeAt(i) - aCode]--;
        arr.every(e => !e) && result.push(i - winLen + 1);
    }
    return result;
};

console.log(findAnagrams('cbaebabacd', 'abs'))//[0, 6]