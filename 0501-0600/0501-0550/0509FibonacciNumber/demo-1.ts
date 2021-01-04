function fib(n: number): number {
    if (n < 2) return n;
    let p = 0;
    let q = 1;
    for (let i = 2; i <= n; i++) {
        let tmp = p + q;
        p = q;
        q = tmp;
    }
    return q;
};