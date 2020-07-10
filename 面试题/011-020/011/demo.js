/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (numbers[mid] < numbers[lo]) {
            hi = mid;
        }
        else if (numbers[mid] > numbers[hi]) {
            lo = mid + 1;
        }
        else {
            hi--;
        }
    }
    return numbers[lo];
};

console.log(minArray([2,2,2,0,1])); //0