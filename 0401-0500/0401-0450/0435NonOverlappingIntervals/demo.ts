function eraseOverlapIntervals1(intervals: number[][]): number {
    if (!intervals.length) {
        return 0
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const N = intervals.length;
    const f = Array(N).fill(1);
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
    }
    return N - Math.max(...f);
};

function eraseOverlapIntervals(intervals: number[][]): number { 
    if (!intervals.length) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    const N = intervals.length;
    let right = intervals[0][1];
    let ans = 1;
    for (let i = 1; i < N; i++) {
        if (intervals[i][0] >= right) {
            ++ans;
            right = intervals[i][1];
        }
    }
    return N - ans;
}