/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map([['}', '{'], [']', '['], [')', '(']]);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        }
        else {
            if (!stack.length || stack[stack.length - 1] !== map.get(s[i])) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false
console.log(isValid("{[]}")); //true