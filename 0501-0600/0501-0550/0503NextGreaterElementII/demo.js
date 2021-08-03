const nextGreaterElements = nums => {
    const n = nums.length;
    const result = Array(n).fill(-1);
    const stack = [];
    for (let i  = 0; i < (n << 1) - 1; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            result[stack[stack.length - 1]] = nums[i % n];
            stack.pop();
        }
        stack.push(i % n);
    }
    return result;
}