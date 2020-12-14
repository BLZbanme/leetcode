function monotoneIncreasingDigits(N) {
    var strArr = N.toString().split('').map(function (e) { return +e; });
    var numMap = Array(10).fill(-1);
    var n = strArr.length;
    for (var i = 0; i < n - 1; i++) {
        numMap[strArr[i]] == -1 && (numMap[strArr[i]] = i);
        if (strArr[i] > strArr[i + 1]) {
            var j = numMap[strArr[i]];
            strArr[j]--;
            while (j + 1 < n) {
                strArr[j + 1] = 9;
                j++;
            }
            break;
        }
    }
    return +strArr.join('');
}
;

console.log(monotoneIncreasingDigits(10)); // 9
console.log(monotoneIncreasingDigits(1234)); // 1234
console.log(monotoneIncreasingDigits(332)); // 299
