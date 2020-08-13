/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    if (!s) {
        return '';
    }

    let arr = s.split('');
    for (let i = 0; i < s.length; i++) {
        let j = i;
        while (indices[j] !== j) {
            [arr[j], arr[indices[j]]] = [arr[indices[j]], arr[j]];
            let tmp = indices[j];
            [indices[tmp], indices[j]] = [indices[j], indices[tmp]];
            j = indices[j];
        }
    }
    return arr.join('');
};

var restoreString = function(s, indices) {
    if (!s) {
        return '';
    }

    let arr = s.split('');
    for (let i = 0; i < s.length; i++) {
        while (indices[i] !== i) {
            [arr[i], arr[indices[i]]] = [arr[indices[i]], arr[i]];
            [indices[i], indices[indices[i]]] = [indices[indices[i]], indices[i]];
        }
    }
    return arr.join('');
};


console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3])); //'leetcode'
console.log(restoreString('abc', [0,1,2])); //'abc'
console.log(restoreString('aiohn', [3,1,4,2,0])); //'nihao'
console.log(restoreString('aaiougrt', [4,0,2,6,7,3,1,5])); //'arigatou'
console.log(restoreString('art', [1,0,2])); //'rat'