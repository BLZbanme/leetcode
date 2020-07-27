/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while (j < s.length && i < t.length) {
        if (s[j] === t[i]) {
            j++;
        }
        i++;
    }

    return j === s.length;
};

var isSubsequence = function(s, t) {
    const arr = Array(26);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        arr[i] = [];
    }
    for (let i = 0; i < t.length; i++) {
        arr[t[i].charCodeAt() - aCode].push(i);
    }
    let tmp = 0;
    let i = 0;

    while (i < s.length) {
        let tmpArr = arr[s[i].charCodeAt() - aCode];
        let index = binarySearch(tmpArr, tmp);
        if (index == -1 || index == tmpArr.length) {
            return false;
        }
        tmp = tmpArr[index] + 1;
        i++;
    }
    return true;
}

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}

var isSubsequence = function(s, t) {
    const N = s.length;
    const M = t.length;
    const aCode = 'a'.charCodeAt();

    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(26);
    }

    for (let i = 0; i < 26; i++) {
        dp[M][i] = M;
    }

    for (let i = M - 1; i >= 0; i--) {
        for (let j = 0; j < 26; j++) {
            if (t[i].charCodeAt() === j + aCode) {
                dp[i][j] = i;
            }
            else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    let add = 0;
    for (let i = 0; i < N; i++) {
        if (dp[add][s[i].charCodeAt() - aCode] === M) {
            return false;
        }
        add = dp[add][s[i].charCodeAt() - aCode] + 1;
    }
    return true;
}

console.log(isSubsequence("aaaaaa","bbaaaa")); //false
console.log(isSubsequence("acb","ahbgdc")); //false
console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false