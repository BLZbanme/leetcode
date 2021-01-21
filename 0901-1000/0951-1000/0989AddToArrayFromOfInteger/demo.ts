function addToArrayForm1(A: number[], K: number): number[] {
    const KArr = K.toString().split('').map(e => +e);
    const N = Math.max(KArr.length, A.length);
    const result = Array(N);
    let flag = 0;
    for (let i = 0; i < N; i++) {
        let ACur = A.length - i - 1 >= 0 ? A[A.length - i - 1] : 0;
        let KCur = KArr.length - i - 1 >= 0 ? KArr[KArr.length - i - 1] : 0;
        let tmp = ACur + KCur + flag;
        result[N - i - 1] = tmp % 10;
        flag = Math.floor(tmp / 10);
    }
    if (flag) {
        result.unshift(flag);
    }
    return result;
};

function addToArrayForm(A: number[], K: number): number[] {
    const ALen = A.length;
    const result = [];
    let flag = K;
    for (let i = 0; i < ALen || flag > 0; i++, flag = Math.floor(flag / 10)) {
        if (i < ALen) {
            flag += A[ALen - 1 - i];
        }
        result.push(flag % 10);
    }
    result.reverse();
    return result;
};