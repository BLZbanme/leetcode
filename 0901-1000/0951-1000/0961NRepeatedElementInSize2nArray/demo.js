/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = new Map();
    for(let e of A){
        if(map.has(e)){
            map.set(e, map.get(e) + 1);
        }else{
            map.set(e, 1);
        }
    }
    for(let a of map){
        if(a[1] == A.length / 2){
            return a[0];
        }
    }
};

var repeatedNTimes = function(A) {
    A.sort((a, b) => a - b);
    let length = A.length;
    if(A[0] == A[length / 2 - 1]){
        return A[0]
    }
    if(A[length / 2] == A[length - 1]){
        return A[length - 1];
    }
    return A[length / 2];
}

var repeatedNTimes = function(A) {
    let set = new Set();
    for(let e of A){
        if(!set.has(e)){
            set.add(e);
        }else{
            return e;
        }
    }
}

var repeatedNTimes = function(A) {
    for(let i = 2; i < A.length; i++){
        if(A[i] == A[i - 1] || A[i] == A[i - 2]){
            return A[i];
        }
    }
    return A[0];
}

repeatedNTimes([1,2,3,3]);
repeatedNTimes([2,1,2,5,3,2]);
repeatedNTimes([5,1,5,2,5,3,5,4]);