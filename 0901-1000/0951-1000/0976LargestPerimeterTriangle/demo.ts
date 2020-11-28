function largestPerimeter1(A: number[]): number {
    const N = A.length;
    A.sort((a, b) => b - a);
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (A[i] < A[j] + A[j + 1]) {
                max = Math.max(max, A[i] + A[j] + A[j + 1])
            }
        }
    }
    return max;
};

function largestPerimeter(A: number[]): number {
    const N = A.length;
    A.sort((a, b) => b - a);
    let max = 0;
    for (let i = 0; i < N - 2; i++) {
        if (A[i] < A[i + 1] + A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return max;
};

console.log(largestPerimeter([2, 1, 2])) //5
console.log(largestPerimeter([1, 2, 1])) //0
console.log(largestPerimeter([3, 2, 3, 4])) //10
console.log(largestPerimeter([3, 6, 2, 3])) //8