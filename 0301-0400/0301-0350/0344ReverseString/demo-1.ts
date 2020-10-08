function reverseString(s: string[]): void {
    let lo = 0, hi = s.length - 1;
    while (lo < hi) {
        [s[lo++], s[hi--]] = [s[hi], s[lo]];
    }
    return;
};