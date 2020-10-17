function sortedSquares1(A) {
    return A.sort(function (a, b) { return Math.abs(a) - Math.abs(b); }).map(function (e) { return Math.pow(e, 2); });
}
;
function sortedSquares(A) {
    var N = A.length;
    var i = 0;
    var j = N - 1;
    A = A.map(function (e) { return Math.abs(e); });
    var result = [];
    while (i <= j) {
        if (A[j] >= A[i]) {
            result.unshift(Math.pow(A[j], 2));
            j--;
        }
        else {
            result.unshift(Math.pow(A[i], 2));
            i++;
        }
    }
    return result;
}
;
console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
