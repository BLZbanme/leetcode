/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    // debugger
    const dp = new Array(A.length);
    let res = 2;
    for (let j = 0; j < A.length; j++) {
        dp[j] = new Map();
        for (let i = 0; i < j; i++) {
            let d = A[j] - A[i];
            dp[j].set(d, (dp[i].get(d) || 1) + 1);
            res = Math.max(res, dp[j].get(d));
        }
    }
    return res;
};

var longestArithSeqLength = function(A) {
    const dp = new Array(A.length);
    let result = 1;
    for (let i = 0; i < A.length; i++) {
        dp[i] = new Map();
        for (let j = 0; j < i; j++) {
            let distance = A[i] - A[j];
            let tmp = (dp[j].get(distance) || 1) + 1;
            result = Math.max(result, tmp);
            dp[i].set(distance, tmp);
        }
    }
    return result;
}

console.log(longestArithSeqLength([3,6,9,12])) // 4
console.log(longestArithSeqLength([9,4,7,2,10])) // 3
console.log(longestArithSeqLength([20,1,15,3,10,5,8])) //4