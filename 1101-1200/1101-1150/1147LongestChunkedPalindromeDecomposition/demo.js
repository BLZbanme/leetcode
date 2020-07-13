/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    const N = text.length;
    let start = 0;
    let end = N;
    let i;
    let j;
    let count = 0;
    while (start < end) {
        i = start + 1;
        j = end - 1;
        while (text.slice(start, i) !== text.slice(j, end)) {
            i++;
            j--;
        }

        if (i > j) {
            break;
        }

        count += 2;
        start = i;
        end = j;
    }

    return count + (i === j ? 0 : 1);
};

console.log(longestDecomposition("elvtoelvto")); //2

console.log(longestDecomposition("a")); //1
console.log(longestDecomposition("ghiabcdefhelloadamhelloabcdefghi")); //7
console.log(longestDecomposition("merchant")); //1
console.log(longestDecomposition("antaprezatepzapreanta")); //11
console.log(longestDecomposition("aaa")); //3