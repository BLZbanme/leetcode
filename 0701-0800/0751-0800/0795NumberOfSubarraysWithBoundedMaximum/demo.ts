function numSubarrayBoundedMax1(A: number[], L: number, R: number): number {
    const n = A.length;

    const smallK = (k: number): number => {
        let left = 0;
        let result = 0;
        for (let right = 0; right < n; right++) {
            if (A[right] > k) {
                left = right + 1;
            }
            else {
                result += right - left + 1;
            }
        }
        return result;
    }

    return smallK(R) - smallK(L - 1);
};

function numSubarrayBoundedMax(A: number[], L: number, R: number): number {
    const n = A.length;

    const smallK = (k: number): number => {
        let result = 0;
        let pre = 1;
        for (let right = 0; right < n; right++) {
            if (A[right] > k) {
                pre = 1;
            }
            else {
                result += pre++;
            }
        }
        return result;
    }

    return smallK(R) - smallK(L - 1);
};