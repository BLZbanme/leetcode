function maxScore(cardPoints: number[], k: number): number {
    const sum = cardPoints.reduce((cur, pre) => cur + pre);
    const n = cardPoints.length;
    const diff = n - k;
    let min = sum;
    let cur = 0;
    for (let i = 0; i < n; i++) {
        if (i < diff) {
            cur += cardPoints[i];
            if (i === diff - 1) {
                min = cur;
            }
        }
        else {
            cur = cur - cardPoints[i - diff] + cardPoints[i];
            min = Math.min(min, cur);
        }
    }
    return sum - min
};