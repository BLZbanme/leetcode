function validMountainArray(A: number[]): boolean {
    if (!A || !A.length) {
        return false;
    }
    let inc = false;
    let dec = false;
    let flag = false;
    let tmp = A[0];
    for (let i = 1; i < A.length; i++) {
        if (tmp === A[i]) {
            return false;
        }
        if (flag) {
            if (A[i] < tmp) {
                dec = true;
            }
            else {
                return false;
            }
        }
        else {
            if (A[i] > tmp) {
                inc = true;
            }
            else {
                flag = true;
            }   
        }
        tmp = A[i];
    }

    return inc && dec;
};

console.log(validMountainArray([2, 1])) //false
console.log(validMountainArray([3, 5, 5])) //false
console.log(validMountainArray([0, 3, 2, 1])) //true