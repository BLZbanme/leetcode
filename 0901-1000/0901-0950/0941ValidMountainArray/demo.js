function validMountainArray1(A) {
    if (!A || !A.length) {
        return false;
    }
    var inc = false;
    var dec = false;
    var tmp = A[0];
    for (var i = 1; i < A.length; i++) {
        if (tmp === A[i]) {
            return false;
        }
        if (dec) {
            if (A[i] > tmp) {
                return false;
            }
        }
        else {
            if (A[i] > tmp) {
                inc = true;
            }
            else {
                dec = true;
            }
        }
        tmp = A[i];
    }
    return inc && dec;
}

function validMountainArray(A) {
    const N = A.length;
    let i = 0;
    let j = N - 1;
    while (i < N - 1 && A[i] < A[i + 1]) {
        i++;
    }
    while (j > i && A[j] < A[j - 1]) {
        j--;
    }

    return i === j && i !== 0 && j !== N - 1;
}
;
console.log(validMountainArray([1, 3,  2])); //true
console.log(validMountainArray([2, 1])); //false
console.log(validMountainArray([3, 5, 5])); //false
console.log(validMountainArray([0, 3, 2, 1])); //true
