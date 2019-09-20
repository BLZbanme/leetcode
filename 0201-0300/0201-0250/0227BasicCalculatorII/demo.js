/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s.replace(/\s*/g, "");
    let numStack = [];
    let operStack = [];
    let reg = /[+|\-|*|\/]/;
    let arr = s.split(reg);
    const N = s.length;
    let i = 0;
    while (i < N) {
        if (s[i] === "*") {
            let tmp = arr.shift();
            let first = numStack.pop();
            i += tmp.length + 1;
            numStack.push(first * +tmp);
        }
        else if (s[i] === "/") {
            let tmp = arr.shift();
            let first = numStack.pop();
            i += tmp.length + 1;
            numStack.push(Math.floor(first / +tmp));
        }
        else if (s[i] === "+" || s[i] === "-") {
            operStack.push(s[i++]);
        }
        else {
            let tmp = arr.shift();
            numStack.push(+tmp);
            i += tmp.length;
        }
    }

    let result = numStack[0];
    const N1 = numStack.length;
    const N2 = operStack.length;
    for (let i = 1, j = 0; i < N1 && j < N2; i++, j++) {
        if (operStack[j] === "+") {
            result += numStack[i];
        }
        else {
            result -= numStack[i];
        }
    }
    return result;
};

var calculate = function(s) {
    let N = s.length;
    if (!s) {
        return 0;
    }
    let stack = [];
    let num = 0;
    let sign = "+";
    for (let i = 0; i < N; i++) {
        if (s[i].match(/\d/)) {
            num = num * 10 + +s[i];
        }
        if ((!s[i].match(/\d/)) && (" " !== s[i]) || i === N - 1) {
            if (sign === "-") {
                stack.push(-num);
            }
            if (sign === "+") {
                stack.push(num);
            }
            if (sign === "*") {
                stack.push(stack.pop() * num);
            }
            if (sign === "/") {
                let tmp = stack.pop();
                if (tmp > 0) {
                    stack.push(Math.floor(tmp / num));
                }
                else {
                    stack.push(-Math.floor((-tmp) / num));
                }
            }
            sign = s[i];
            num = 0;
        }
    }
    let result = 0;
    for (let e of stack) {
        result += e;
    }
    return result;
}

console.log(calculate( "14-3/2"));

console.log(calculate("42"));

console.log(calculate("1+1+1"));

console.log(calculate("0-0"));

console.log(calculate("3+2*2"));

console.log(calculate(" 3/2"));

console.log(calculate(" 3+5 / 2 "));