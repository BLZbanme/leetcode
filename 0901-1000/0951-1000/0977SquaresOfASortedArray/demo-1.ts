function sortedSquares1(A: number[]): number[] {
    return A.sort((a, b) => Math.abs(a) - Math.abs(b)).map(e => e ** 2);
};

function sortedSquares2(A: number[]): number[] {
    const N = A.length;
    let i = 0;
    let j = N - 1;
    A = A.map(e => Math.abs(e));
    const result = [];
    while (i <= j) {
        if (A[j] >= A[i]) {
            result.unshift(A[j] ** 2);
            j--;
        }
        else {
            result.unshift(A[i] ** 2);
            i++;
        }
    }
    return result;
};

function sortedSquares(A: number[]): number[] {
    const N = A.length;
    let i = 0;
    let j = N - 1;
    const result = [];
    while (i <= j) {
        if (A[j] ** 2 >= A[i] ** 2) {
            result.unshift(A[j] ** 2);
            j--;
        }
        else {
            result.unshift(A[i] ** 2);
            i++;
        }
    }
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); //[0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); //[4,9,9,49,121]