var rangeBitwiseAnd1 = function(m: number, n: number): number {
    let shift = 0;
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
}

var rangeBitwiseAnd = function(m: number, n: number): number {
    while (m < n) {
        n = n & (n - 1);
    }
    return n;
}