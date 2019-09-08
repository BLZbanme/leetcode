/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let result = [];
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 < N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            continue;
        }
        else {
            set.add(tmp);
            let index = s.lastIndexOf(tmp);
            if (index > i) {
                result.push(tmp);
            }
        }
    }
    return result;
};

var findRepeatedDnaSequences = function(s) {
    let result = new Set();
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 <= N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            if (!result.has(tmp)) {
                result.add(tmp);
            }
        }
        else {
            set.add(tmp);
        }
    }
    return Array.from(result);
};

var findRepeatedDnaSequences = function(s) {
    let result = new Set();
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 <= N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            result.add(tmp);
        }
        else {
            set.add(tmp);
        }
    }
    return Array.from(result);
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAA"))

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))