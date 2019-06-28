/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};


var addBinary = function(a, b) {
    let tmp = 0, res = "";
    let la = a.length - 1;
    let lb = b.length - 1;
    for(; la >= 0 && lb >= 0; la--, lb--){
        tmp += parseInt(a[la]) + parseInt(b[lb]);
        if(tmp > 1){
            res =  tmp % 2 + res;
            tmp = parseInt(tmp / 2);
        }else{
            res = tmp + res;
            tmp = 0;
        }
    }
    while(la >= 0){
        tmp += parseInt(a[la]);
        if(tmp > 1){
            res = tmp % 2 + res;
            tmp = parseInt(tmp / 2);
            la--;
        }else{
            return a.substring(0, la) + tmp + res;
        }
    }
    while(lb >= 0){
        tmp += parseInt(b[lb]);
        if(tmp > 1){
            res = tmp % 2 + res;
            tmp = parseInt(tmp / 2);
            lb--;
        }else{
            return b.substring(0, lb) + tmp + res;
        }
    }
    return tmp == 0 ? res : 1 + res;
};

var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, tmp = 0;
    let res = "";
    while(i >= 0 || j >= 0){
        if(i >= 0){
            tmp += parseInt(a[i--]);
        }
        if(j >= 0){
            tmp += parseInt(b[j--]);
        }
        res = tmp % 2 + res;
        tmp = parseInt(tmp / 2);
    }
    return tmp == 0 ? res : 1 + res;
}

console.log(addBinary("11", "1"));

console.log(addBinary("1010", "1011"));
console.log(addBinary("1010", "1"));
console.log(addBinary("1011", "1"));