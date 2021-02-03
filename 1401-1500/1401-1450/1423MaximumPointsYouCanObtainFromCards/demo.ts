function maxScore(cardPoints: number[], k: number): number {
    let sum = cardPoints.reduce((cur, pre) => cur + pre);
    const n = cardPoints.length;
    let nDiffKSum = 0;
    for (let i = 0; i < n - k; i++) {
        nDiffKSum += cardPoints[i];
    }
    let min = nDiffKSum;
    for (let i = n - k; i < n; i++) {
        nDiffKSum = nDiffKSum - cardPoints[i - n + k] + cardPoints[i];
        min = Math.min(min, nDiffKSum);
    }
    return sum - min;
};