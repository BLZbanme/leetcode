function equalSubstring(s: string, t: string, maxCost: number): number {
    const n = s.length;
    let left = 0;
    let result = 0;
    let cost = 0;
    for (let right = 0; right < n; right++) {
        cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        if (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
};