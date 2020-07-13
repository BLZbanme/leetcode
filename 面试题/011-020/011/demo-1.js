/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        }
        else if (numbers[mid] < numbers[hi]) {
            hi = mid;
        }
        else {
            hi--;
        }
    }
    return numbers[lo];
};