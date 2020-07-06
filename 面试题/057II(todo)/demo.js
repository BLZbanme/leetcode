/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    if (target === 1) {
        return [[1]];
    }
    for (let i = 2; i < target; i++) {
        let tmp = target % i;
        let n = Math.floor(target / i);
         
    }
};