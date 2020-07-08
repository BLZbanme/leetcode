/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    const result = Array(k + 1);
    if (!k) {
        return result;
    }
    
    const tmp = shorter * k;
    const diff = longer - shorter;

    if (!diff) {
        return [tmp];
    }

    result[0] = tmp;
    let i = 1;
    while (i <= k) {
        result[i] = result[i - 1] + diff;
        i++;
    }

    return result;
};

console.log(divingBoard(1, 2, 3));