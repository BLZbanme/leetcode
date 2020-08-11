/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0;
    const N = s.length;

    let i = 0;
    while (i < N) {
        let tmp = s[i];
        let j = 0;
        while (i + j < N && s[i + j] == tmp) {
            j++;
        }
        if (i + 2 * j > N) {
            i++;
            continue;
        }

        let k = 0;
        while (k < j && s[i + j + k] != tmp) {
            k++;
        }
        count += k;
        i += j;
    }

    return count;
};

var countBinarySubstrings = function(s) {
    let arr = [];
    const N = s.length;
    let i = 0;

    while (i < N) {
        let tmp = s[i];
        let j = 1;
        while (i + j < N && s[i + j] == tmp) {
            j++;
        }
        arr.push(j);
        i += j;
    }

    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        count += Math.min(arr[i], arr[i + 1]);
    }
    return count;
}

console.log(countBinarySubstrings("00100")); //2
console.log(countBinarySubstrings("00001111")); //4
console.log(countBinarySubstrings("00110")); //3
console.log(countBinarySubstrings("10101")); //4
console.log(countBinarySubstrings("00110011")); //6