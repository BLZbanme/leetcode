/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    if (!A || !A.length) {
        return 0;
    }
    const N = A.length;
    const dp = new Array(N);

    let max = 0;
    debugger
    for (let i = 0; i < N; i++) {
        if (i > 0 && dp[i - 1].len) {
            let preArray = dp[i - 1].indexs;
            let curArray = [];
            preArray.forEach(e => {
                if (e < N - 1 && B[e + 1] === A[i]) {
                    curArray.push(e + 1);
                }
            });
            let len = curArray.length ? (dp[i - 1].len + 1)  : 0; 
            dp[i] = {
                len,
                indexs: curArray     
            }
            max = Math.max(len, max);
            continue;
        }
        let indexArray = B.myFind(A[i]);
        let len = indexArray.length ? 1 : 0;
        dp[i] = {
            len,
            indexs: indexArray     
        }
        max = Math.max(len, max);
    }
    return max;
};

Array.prototype.myFind = function (value) {
    return Array.prototype.reduce.call(this, (pre, cur, index) => {
        if (cur === value) {
            return [...pre, index];
        }
        return [...pre];
    }, []);
}

var findLength = function(A, B) {
    const N = A.length;
    const M = B.length;
    const dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(M + 1).fill(0);
    }

    let max = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            max = Math.max(dp[i][j] , max);
        }
    }
    return max;
}

var findLength = function(A, B) {
    const N = A.length;
    const M = B.length;
    const dp = new Array(M + 1).fill(0);

    let max = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = M; j >= 1; j--) {
            if (A[i - 1] === B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            }
            max = Math.max(dp[j] , max);
        }
    }
    return max;
}

console.log(findLength([1,0,1,0,0,0,0,0,1,1], [1,1,0,1,1,0,0,0,0,0])); // 6

console.log(findLength([0,1,1,1,1],  [1,0,1,0,1])); // 2

console.log(findLength([0,0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,0,1,0,0])); // 9

console.log(findLength([5,14,53,80,48], [50,47,3,80,83])); // 1

console.log(findLength([1,2,3,2,1], [3,2,1,4,7])); // 3