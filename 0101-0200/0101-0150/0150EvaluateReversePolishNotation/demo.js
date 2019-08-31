/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let set = new Set(["*", "/", "+", "-"]);
    tokens.forEach(v => {
        if (!set.has(v)) {
            stack.push(v);
        }
        else {
            let two = +stack.pop();
            let one = +stack.pop();
            stack.push(operation(one, two, v));
        }
    })
    return stack[0];
};

function operation(one, two, oper) {
    switch(oper) {
        case "+":
            return one + two;
        case "-":
            return one - two;
        case "*":
            return one * two;
        case "/":
            let tmp = one / two;
            return tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp);
        default:
            return;
    }
}

console.log(evalRPN(["4","-2","/","2","-3","-","-"]))

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

console.log(evalRPN(["2", "1", "+", "3", "*"]))

console.log(evalRPN(["4", "13", "5", "/", "+"]))

