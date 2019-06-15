/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let oddIndex = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            if(oddIndex.length != 0){
                let index = oddIndex.shift();
                let tmp = A[index];
                A[index] = A[i];
                A[i] = tmp;
                oddIndex.push(i);
            }
        }else{
            oddIndex.push(i);
        }
    }
    return A;
};

var sortArrayByParity = function(A) {
    return A.sort((a, b) => a % 2 - b % 2);
};

var sortArrayByParity = function(A) {
    let oddRes = [];
    let evenRes = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            evenRes.push(A[i]);
        }else{
            oddRes.push(A[i]);
        }
    }
    return evenRes.concat(oddRes);
}

var sortArrayByParity = function(A) {
    let res = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 == 0){
            res.unshift(A[i]);
        }else{
            res.push(A[i]);
        }
    }
    return res;
}

var sortArrayByParity = function(A) {
    let i = 0, j = A.length - 1;
    while(i < j){
        if(A[i] % 2 > A[j] %2){
            let tmp = A[j];
            A[j] = A[i];
            A[i] = tmp;
        }
        if(A[i] % 2 == 0){
            i++;
        }
        if(A[j] % 2 == 1){
            j--;
        }
    }
    return A;
}

sortArrayByParity([1, 0, 2]);
sortArrayByParity([3, 1, 2, 4]);