/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {

    const result = [];
    let lo = 1;
    let hi = 2;
    const arr = [lo, hi];
    let sum = lo + hi;
    let middle = target >> 1;
    while (lo <= middle) {
        
        if (sum <= target) {
            if (sum === target) {
                result.push(Array.from(arr));
            }
            hi++;
            sum += hi;
            arr.push(hi);
        }
        else {
            sum -= lo;
            lo++;
            arr.shift();
        }
    }

    return result;
};

console.log(findContinuousSequence(15));