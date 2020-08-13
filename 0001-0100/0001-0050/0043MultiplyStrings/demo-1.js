/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (!num1 || !num2){
        return '';
    }

    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    const strArr = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        strArr.push(helper(num1, num2, i));
    }
    return add(strArr);
};

function add(strArr) {
    
    let length = Math.max(...strArr.map(e => e.length));
    let sum = '';
    let carry = 0;
    for (let i = 0 ; i < length; i++) {
        let tmp = 0;
        strArr.forEach(e => {
            tmp += e.length > i ? +e[e.length - i - 1] : 0;
        })
        
        tmp += carry;
        carry = Math.floor(tmp / 10);
        sum = tmp % 10 + sum;
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
};


function helper(num1, num2, index) {
    
    if (index < 0) {
        return 0;
    }
    let num2Now = +num2[index];
    let sum = '';
    let carry = 0;
    const N = num1.length - 1;
    for (let i = 0; N - i >= 0; i++) {
        let tmp = +num1[N - i] * num2Now + carry;
        carry = Math.floor(tmp / 10);
        sum = tmp % 10 + sum; 
    }
    if (carry) {
        sum = carry + sum;
    }
    while (index < num2.length - 1) {
        index++;
        sum += '0';
    }
    return sum;
}

console.log(multiply("9", "9")); //81

console.log(multiply("2", "3")); //6
console.log(multiply("123", "456")); //56088