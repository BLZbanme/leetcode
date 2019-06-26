/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return x ** n;
};

var myPow = function(x, n) {
    let res = 1;
    while(n != 0){
        if(n < 0){
            res /= x;
            n++;
        }else{
            res *= x;
            n--;
        }
    }
    return res.toFixed(5);
};

var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n < 0){
        n = -n;
        x = 1 / x;
    }
    return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, parseInt(n / 2));
}

var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    let res = myPow(x, parseInt(n / 2));
    return (n % 2 == 0) ? res * res : n < 0 ? res * res * (1 / x) : res * res * x;
}

var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n == -2147483648){
        x = Math.abs(x);
        n = 2147483647;
        let res = 1;
        while(n > 0){
            if(n & 1){
                res *= x;
            }
            x *= x;
            n >>= 1;
        }
        return 1 / (res * x);
    }
    if(n < 0){
        n = -n;
        x = 1 / x;
    }
    let res = 1;
    while(n > 0){
        if(n & 1){
            res *= x;
        }
        x *= x;
        n >>= 1;
    }
    return res;
}

var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n == -2147483648){
        x = Math.abs(x);
        n = 2147483647;
        let res = 1;
        while(n > 0){
            if(n & 1){
                res *= x;
            }
            x *= x;
            n >>= 1;
        }
        return 1 / (res * x);
    }
    let N = Math.abs(n);
    let res = 1;
    while(N > 0){
        if(N & 1){
            res *= x;
        }
        x *= x;
        N >>= 1;
    }
    return n < 0 ? 1 / res : res;
}

var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    let N = Math.abs(n);
    let res = 1;
    while(N > 0){
        if(N & 1){
            res *= x;
        }
        x *= x;
        N >>= 1;
    }
    return n < 0 ? 1 / res : res;
}

console.log(myPow(2.00000, -2147483648))

console.log(myPow(1.00000, -2147483648))

console.log(myPow(2.00000, 10))
console.log(myPow(2.10000, 3))
console.log(myPow(2.00000, -2))