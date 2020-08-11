/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo < hi) {
        let tmp = numbers[lo] + numbers[hi];
        if (tmp < target) {
            lo++;
        }
        else if (tmp > target) {
            hi--;
        }
        else {
            return [lo + 1, hi + 1];
        }
    }
};