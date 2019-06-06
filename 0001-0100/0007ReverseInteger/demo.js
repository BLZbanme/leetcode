var reverse = function(x) {
    let result = '';
    let pos = '';
    if(x < 0){
        x = -x;
        pos = '-';
    }
    while(x >= 10){
        result += x % 10;
        x = Math.floor(x / 10);
    }
    result += x;
    let num = Number(pos + result);
    if(num > 2147483647 || num < -2147483648){
        return 0;
    }
    return num;
};


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
