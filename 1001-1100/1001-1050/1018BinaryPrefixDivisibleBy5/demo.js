function prefixesDivBy51(A) {
    var N = A.length;
    var result = Array(N);
    var pre = 0;
    for (var i = 0; i < N; i++) {
        pre <<= 1;
        pre = (pre + A[i]) % 10;
        result[i] = (pre === 0 || pre === 5);
    }
    return result;
}
;
function prefixesDivBy5(A) {
    var N = A.length;
    var result = Array(N);
    var pre = 0;
    for (var i = 0; i < N; i++) {
        pre = ((pre << 1) + A[i]) % 5;
        result[i] = !pre;
    }
    return result;
}
;
console.log(prefixesDivBy5([0, 1, 1, 1, 1])); //[true,false,false,false,true,false]
//0000
//0101
//1010
//1111
