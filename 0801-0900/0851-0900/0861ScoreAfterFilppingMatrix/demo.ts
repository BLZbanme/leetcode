function matrixScore(A: number[][]): number {
    const M = A.length;
    const N = A[0].length;
    let ret = M * (1 << (N - 1))
    for (let j = 1; j < N; j++) {
        let nOnes = 0;
        for (let i = 0; i < M; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            }
            else {
                nOnes += (1 - A[i][j]);
            }
        }
        const k = Math.max(nOnes, M - nOnes);
        ret += k * (1 << (N - j - 1));
    }
    return ret;
};

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]])) // 39