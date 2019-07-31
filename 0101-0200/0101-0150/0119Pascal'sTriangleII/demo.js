/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    for (let i = 1; i < rowIndex; i++) {
        result.push(Cmn(rowIndex, i));
    }
    result.push(1);
    return result;
};

function Cmn(m, n) {
    if (n > m / 2) {
        n = m - n;
    }
    let result = 1;
    let down = 1;
    while (n) {
        result *= m--;
        down *= n--;
    }
    return result / down;
}

// function Cmn(m, n) {
//     let result = 1;
//     let down = 1;
//     while (n) {
//         result *= m--;
//         down *= n--;
//     }
//     return result / down;
// }

var getRow = function(rowIndex) {
    if (!rowIndex) {
        return [1];
    }
    let pre = [1];
    let level = 1;
    while (level <= rowIndex) {
        let tmp = [1];
        for (let i = 0; i < level - 1; i++) {
            tmp.push(pre[i] + pre[i + 1]);
        }
        tmp.push(1);
        pre = tmp;
        level++;
    }
    return pre;
}

var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        result.unshift(1);
        for (let j = 1; j < result.length - 1; j++) {
            result[j] = result[j + 1] + result[j];
        }
    }
    return result;
}

Cmn(4, 1)
Cmn(4, 2)
Cmn(4, 3)