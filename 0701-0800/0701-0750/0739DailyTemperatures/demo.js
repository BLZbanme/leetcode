/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = T.length - 1; i >= 0; i--) {
        let j = i + 1;
        for (; j < T.length; j++) {
            if (T[j] > T[i]) {
                break;
            }
        }
        result.unshift(j === T.length ? 0 : j - i);
    }
    return result;
};

const dailyTemperatures = T => {
    const result = new Array(T.length);
    const stack = [];
    T.forEach((e, index) => {
        let tmp = stack.length ? T[stack[stack.length - 1]] : Infinity;
        while (tmp < e) {
            let tmpIndex = stack.pop();
            result[tmpIndex] = index - tmpIndex;
            tmp = stack.length ? T[stack[stack.length - 1]] : Infinity;
        }
        stack.push(index);
    });
    while (stack.length) {
        result[stack.pop()] = 0;
    }
    return result;
}

var dailyTemperatures = T => {
    const result = new Array(T.length).fill(0);
    const stack = [];
    T.forEach((e, index) => {
        while (stack.length && T[stack[stack.length - 1]] < e) {
            let tmpIndex = stack.pop();
            result[tmpIndex] = index - tmpIndex;
        }
        stack.push(index);
    });
    return result;
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) //[1, 1, 4, 2, 1, 1, 0, 0]