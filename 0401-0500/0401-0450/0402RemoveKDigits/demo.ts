function removeKdigits(num: string, k: number): string {
    const stack: Array<number> = [];
    for (let now of num) {
        while (stack.length && stack[stack.length - 1] > +now) {
            if (!k) {
                break;
            }
            stack.pop()
            k--;
        }
        stack.push(+now);
    }
    while (k--) {
        stack.pop();
    }
    while (stack.length) {
        if (stack[0] === 0) {
            stack.shift();
        }
        else {
            break;
        }
    }
    return stack.length ? stack.join('') : '0'
};

console.log(removeKdigits('1432219', 3)) //1219
console.log(removeKdigits('10200', 1)) //200
console.log(removeKdigits('10', 2)) //0