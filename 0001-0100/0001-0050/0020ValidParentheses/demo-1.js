/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map([[')', '('], [']', '['], ['}', '{']]);
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (stack[stack.length - 1] === map.get(s[i])) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()')) //true
console.log(isValid('()[]{}')) //true
console.log(isValid('(]')) //false
console.log(isValid('([)]')) //false
console.log(isValid('{[]}')) //true