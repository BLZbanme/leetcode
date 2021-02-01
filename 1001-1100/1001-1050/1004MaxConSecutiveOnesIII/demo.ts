function longestOnes1(A: number[], K: number): number {
    const n = A.length;
    if (n < 2) return n;
    
    let oneCount = 0;
    let oneMax = 0;
    let left = 0;
    let right = 0;
    while (right < n) {
        A[right] && oneCount++;
        oneMax = Math.max(oneMax, oneCount);
        if (right - left + 1 > oneCount + K) {
            A[left] && oneCount--;
            left++;
        }
        right++;
    }
    return right - left;
};

function longestOnes(A: number[], K: number): number {
    const n = A.length;
    if (n < 2) return n;
    
    let zeroCount = 0;
    let left = 0;
    let right = 0;
    let res = 0;
    while (right < n) {
        A[right] || zeroCount++;
        if (zeroCount >  K) {
            A[left] || zeroCount--;
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
};