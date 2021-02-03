function maxSatisfied1(customers: number[], grumpy: number[], X: number): number {
    let cur = 0;
    const n = customers.length;
    for (let i = 0; i < n; i++) {
        if (i < X || i >= X && !grumpy[i]) {
            cur += customers[i];
        }
    }

    let max = cur;
    for (let i = X; i < customers.length; i++) {
        grumpy[i - X] && (cur -= customers[i - X]);
        grumpy[i] && (cur += customers[i]);
        max = Math.max(max, cur);
    }
    return max;
};

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
    let result = 0;
    let max = 0;
    let tmp = 0;
    let left = 0;
    for (let right = 0; right < customers.length; right++) {
        result += grumpy[right] ? 0 : customers[right];
        tmp += grumpy[right] && customers[right];
        if (right - left + 1 > X) {
            tmp -= grumpy[left] && customers[left];
            left++;
        }
        max = Math.max(max, tmp);
    }
    return result + max;
}