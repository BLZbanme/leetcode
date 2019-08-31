/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ").reverse();
    return arr.filter(e => e).join(" ");
};

var reverseWords = function(s) {
    return s.split(/\s+/).filter(e => e).reverse().join(" ");
};

var reverseWords = function(s) {
    if (!s) {
        return null;
    }

    let arr = s.split("");
    const N = s.length;
    reverse(arr, 0, N - 1);
    reverseAllWords(arr, N);
    return cleanSpaces(arr, N);
}

function cleanSpaces(array, len) {
    let i = 0;
    let j = 0;
    while (j < len) {
        while (j < len && array[j] === " ") {
            j++;
        }

        while (j < len && array[j] !== " ") {
            array[i++] = array[j++];
        }

        while (j < len && array[j] === " ") {
            j++;
        }

        if (j < len) {
            array[i++] =  " ";
        }
    }
    return array.slice(0, i).join("");
}

function reverseAllWords(array, len) {
    let i = 0;
    let j = 0;
    while (i < len) {
        while (i < j || (i < len && array[i] === " ")) {
            i++;
        }
        while (j < i || (j < len && array[j] !== " ")) {
            j++;
        }
        reverse(array, i, j - 1);
    }
}

function reverse(array, start, end) {
    while (start < end) {
        [array[start++], array[end--]] = [array[end], array[start]];
    }
}

console.log(reverseWords("the sky is  blue"))

console.log(reverseWords("  hello world!  "))

console.log(reverseWords("a good   example"))