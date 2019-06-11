/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = [];
    for(let i = 0; i <= N; i++){
        res.push(S[i] == "I" ? min++ : max--);
    }
    return res;
};

var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = [];
    for(let i = 0; i < N; i++){
        res.push(S[i] == "I" ? min++ : max--);
    }
    res.push(min);
    return res;
};

var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = new Array(N + 1);
    for(let i = 0; i < N; i++){
        res[i] = S[i] == "I" ? min++ : max--;
    }
    res[N] = min;
    return res;
};

var diStringMatch = function(S) {
    let N = S.length;
    let min = 0, max = N;
    let res = new Array(N + 1);
    for(let i = 0; i < N; i++){
        res[i] = S.charAt(i) == "I" ? min++ : max--;
    }
    res[N] = min;
    return res;
};
diStringMatch("IDID")
diStringMatch("III")
diStringMatch("DDI")
diStringMatch("I")