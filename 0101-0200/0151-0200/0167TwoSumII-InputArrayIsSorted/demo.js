/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let indexOne = 0;
    let indexTwo = numbers.length - 1;
    while (indexOne < indexTwo) {
        let tmp = numbers[indexOne] + numbers[indexTwo];
        if (tmp > target) {
            indexTwo--;
        }
        else if (tmp < target) {
            indexOne++;
        }
        else {
            return [indexOne + 1, indexTwo + 1];
        }
    }
};