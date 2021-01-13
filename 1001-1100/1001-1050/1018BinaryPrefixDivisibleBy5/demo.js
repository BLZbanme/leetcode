function prefixesDivBy5(A) {
    var N = A.length;
    var result = Array(N);
    let pre = 0;
    for (var i = 0; i < N; i++) {
        pre <<= 1;
        A[i] && (pre += 1)
        pre %= 10;
        result[i] = (pre === 0 || pre === 5);
    }
    return result;
}
;
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1])); //[true,false,false,false,true,false]