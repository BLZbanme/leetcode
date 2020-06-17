/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = -Infinity;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            max = Math.max(max, A[j] + A[i] + i - j);
        }
    }
    return max;
};

var maxScoreSightseeingPair = function(A) {
    let res = 0;
    let cur = 0;
    for (let a of A) {
        res = Math.max(res, cur + a);
        cur = Math.max(cur, a) - 1;
    }
    return res;
};

var maxScoreSightseeingPair = function(A) {
    let res = 0;
    let cur = A[0] + 0;
    
    for (let j = 1; j < A.length; j++) {
        res = Math.max(res, cur + A[j] - j);
        cur = Math.max(cur, A[j] + j)
    }
    return res;
};

console.log(maxScoreSightseeingPair([8,1,5,2,6]))