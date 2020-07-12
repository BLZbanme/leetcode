/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let i = 0;
    let j = 0;
    while (j < popped.length) {
        if (!stack.length || stack[stack.length - 1] != popped[j]) {
            if (i === pushed.length) {
                return false;
            }
            stack.push(pushed[i++]);
        }
        else {
            stack.pop();
            j++;
        }
    }

    return stack.length === 0;
};

var validateStackSequences = function(pushed, popped) {
    const stack = [];

    let i = 0;
    
    for (let push of pushed) {
        stack.push(push);
        while (stack.length && stack[stack.length - 1] == popped[i]) {
            stack.pop();
            i++;
        }
    }

    return stack.length === 0;
};

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])) //true
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])) //false