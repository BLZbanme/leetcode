function fairCandySwap(A: number[], B: number[]): number[] {
    const set = new Set(B);
    const aSum = A.reduce((pre, cur) => pre + cur);
    const bSum = B.reduce((pre, cur) => pre + cur);

    const diff = ((aSum + bSum) >> 1) - aSum;
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i] + diff)) {
            return [A[i], A[i] + diff]
        }
    }
    return [];
};