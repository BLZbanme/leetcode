/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) {
        return [];
    }
    let one = [1];
    let result = [one];
    if (numRows === 1) {
        return result;
    }
    let level = 2;
    while (level <= numRows) {
        let tmp = [1];
        for (let i = 0; i < level - 2; i++) {
            tmp.push(result[level - 2][i] + result[level - 2][i + 1]);
        }
        tmp.push(1);
        result.push(tmp);
        level++;
    }
    return result;
};