function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    }
    const N = s.length;
    const arr = Array(26).fill(0);

    const aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < N; i++) {
        arr[s.charCodeAt(i) - aCode]++;
        arr[t.charCodeAt(i) - aCode]--;
    }
    return arr.every(e => !e)
};