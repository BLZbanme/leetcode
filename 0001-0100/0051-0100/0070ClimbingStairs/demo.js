/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3){
        return n;
    }else{
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};

var climbStairs = function(n) {
    const opt = [];
    opt[0] = 0;
    opt[1] = 1;
    opt[2] = 2;
    for(let i = 3; i <= n; i++){
        opt[i] = opt[i - 1] + opt[i - 2];
    } 
    return opt[n];
}

var climbStairs = function(n) {
    if(n < 3){
        return n;
    }
    let pre2 = 1;
    let pre1 = 2;
    let res;
    for(let i = 3; i <= n; i++) {
        res = pre2 + pre1;
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}

var climbStairs = function(n) {
    if(n == 0){
        return 0;
    }
    let f = [[1, 1], [1, 0]];
    let res = pow(f, n);
    return res[0][0];
}

function pow(arr, n){
    let res = [[1, 0], [0, 1]];
    while(n > 0) {
        if((n & 1) == 1) {
            res = multiply(res, arr);
        }
        n >>= 1;
        arr = multiply(arr, arr);
    }
    return res;
}

function multiply(a, b) {
    let c = [[], []];
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
}

var climbStairs = function(n) {
    let sqrt5 = Math.sqrt(5);
    let fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return parseInt(fibn / sqrt5);
}

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))