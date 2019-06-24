/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let res = [];
    for(let j = l2; j >= 0; j--){
        for(let i = l1 ; i >= 0; i--){
            numBitAdd(res, (l1 - i + l2 - j), num1[i] * num2[j]);
        }
    }
    return res.reverse().join("");
};

function numBitAdd(arr, i, num){
    let pre = 0;
    if(num > 9){
        pre = parseInt(num / 10);
        num = num % 10;
    }
    if(!arr[i]){
        arr[i] = 0;
    }
    if(arr[i] + num > 9){
        arr[i] = arr[i] + num - 10;
        pre++;
    }else{
        arr[i] += num;
    }
    if(pre != 0){
        numBitAdd(arr, i + 1, pre);
    }
}

var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == "0"){
        return "0";
    }
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let res = new Array(l1 + l2 + 2).fill(0);
    for(let i = l1; i >= 0; i--){
        for(let j = l2; j >= 0; j--){
            let num = num1[i] * num2[j];
            let p1 = i + j, p2 = i + j + 1;
            let sum = num + res[p2];
            res[p1] += parseInt(sum / 10);
            res[p2] = sum % 10;
        }
    }
    let index = res.findIndex((value) => {
        return value != 0;
    })
    return res.slice(index).join("");
}

console.log(multiply("123456789","987654321"))
console.log(multiply("9", "99"))
console.log(multiply("123", "456"))

110711102121450369
106705432123450369
121932631112635269
121932631112635269
 98365432123456369