function characterReplacement1(s: string, k: number): number {
    const n = s.length;
    if (n < 2) return n;

    let left = 0;
    let right = 0;

    let res = 0;
    let maxCount = 0;
    const arr = Array(26).fill(0);
    const ACode = 'A'.charCodeAt(0);
    while (right < n) {
        arr[s.charCodeAt(right) - ACode]++;
        maxCount = Math.max(maxCount, arr[s.charCodeAt(right) - ACode]);
        right++;
        if (right - left > maxCount + k) {
            arr[s.charCodeAt(left) - ACode]--;
            left++;
        }
        res = Math.max(res, right - left);
    }
    return res;
};

function characterReplacement(s: string, k: number): number {
    const n = s.length;
    if (n < 2) return n;

    let left = 0;
    let right = 0;
    let max = 0;
    const map = Array(26).fill(0);
    const ACode = 'A'.charCodeAt(0);
    while (right < n) {
        const index = s.charCodeAt(right) - ACode;
        map[index]++;
        max = Math.max(max, map[index]);
        if (right - left + 1 > max + k) {
            map[s.charCodeAt(left) - ACode]--;
            left++;
        }
        right++;
    }
    return right - left;
}