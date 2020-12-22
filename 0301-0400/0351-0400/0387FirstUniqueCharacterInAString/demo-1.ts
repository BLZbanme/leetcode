function firstUniqChar(s: string): number {
    const arr = Array(26).fill(0)
    const aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    const set = new Set();
    for (let i  = 0; i < 26; i++) {
        if (arr[i] === 1) {
            set.add(String.fromCharCode(i + aCode));
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) return i;
    }
    return -1;
};