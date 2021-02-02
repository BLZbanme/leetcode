"use strict";
function addToArrayForm1(A, K) {
    var KArr = K.toString().split('').map(function (e) { return +e; });
    var N = Math.max(KArr.length, A.length);
    var result = Array(N);
    var flag = 0;
    for (var i = 0; i < N; i++) {
        var ACur = A.length - i - 1 >= 0 ? A[A.length - i - 1] : 0;
        var KCur = KArr.length - i - 1 >= 0 ? KArr[KArr.length - i - 1] : 0;
        var tmp = ACur + KCur + flag;
        result[N - i - 1] = tmp % 10;
        flag = Math.floor(tmp / 10);
    }
    if (flag) {
        result.unshift(flag);
    }
    return result;
}
;
function addToArrayForm(A, K) {
    var ALen = A.length;
    var result = [];
    var flag = K;
    for (var i = 0; i < ALen || flag > 0; i++, flag = Math.floor(flag / 10)) {
        if (i < ALen) {
            flag += A[ALen - 1 - i];
        }
        result.push(flag % 10);
    }
    result.reverse();
    return result;
}
;
