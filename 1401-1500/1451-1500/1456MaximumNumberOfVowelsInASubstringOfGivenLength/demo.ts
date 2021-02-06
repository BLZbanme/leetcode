function maxVowels(s: string, k: number): number {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let cur = 0;
    for (let i = 0; i < k; i++) {
        set.has(s[i]) && (cur++);
    }
    let count = cur;
    for (let i = k; i < s.length; i++) {
        set.has(s[i - k]) && cur--;
        set.has(s[i]) && cur++;
        count = Math.max(cur, count);
    }
    return count;
};