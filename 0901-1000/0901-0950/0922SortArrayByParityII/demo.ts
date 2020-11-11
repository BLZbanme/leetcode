function sortArrayByParityII(A: number[]): number[] {
    const N = A.length;
    let j = 1;
    for (let i = 0; i < N; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            [A[i], A[j]] = [A[j], A[i]]
        }
    }
    return A;
};

console.log(sortArrayByParityII([4,2,5,7])) //[4, 5, 2, 7]