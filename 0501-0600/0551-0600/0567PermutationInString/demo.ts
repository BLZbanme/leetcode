function checkInclusion(s1: string, s2: string): boolean {
    const arr = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    const m = s1.length;
    const n = s2.length;
    for (let i = 0; i < m; i++) {
        arr[s1.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < n; i++) {
        if (i < m) {
            arr[s2.charCodeAt(i) - aCode]--;
            if (i == m - 1) {
                if (arr.every(e => !e)) return true;
            }
        }
        else {
            arr[s2.charCodeAt(i - m) - aCode]++;
            arr[s2.charCodeAt(i) - aCode]--;
            if (arr.every(e => !e)) return true;
        }
    }
    return false;
};