/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let res = 0;
    const n = customers.length;
    for (let i = 0; i < X; i++) {
        res += customers[i];
    }
    for (let i = X; i < n; i++) {
        grumpy[i] || (res += customers[i]);
    }

    let max = res;
    for (let i = X; i < n; i++) {
        grumpy[i] && (res += customers[i]);
        grumpy[i - X] && (res -= customers[i - X]);
        max = Math.max(res, max);
    }
    return max;
};

var maxSatisfied = (customers, grumpy, X) => {
    let res = 0;
    let max = 0;
    let tmp = 0;
    let left = 0;
    for (let right = 0; right < customers.length; right++) {
        grumpy[right] || (res += customers[right]);
        grumpy[right] && (tmp += customers[right]);
        if (right - left + 1 > X) {
            grumpy[left] && (tmp -= customers[left]);
            left++;
        }
        max = Math.max(max, tmp);
    }
    return res + max;
}

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)) //16