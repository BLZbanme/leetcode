/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let arr = [];
    helper(arr, 0, 0, s.length, s, result);  
    return result;
};

function helper(array, start, end, length, s, result) {
    if (end > length) {
        return;
    }
    if (start === length) {
        result.push(Array.from(array));
        return;
    }
        // debugger
    let tmp = s.slice(start, end + 1);
    let palindrome = isPalindrome(tmp);
    if (palindrome) {
        helper(array, start, end + 1, length, s, result);
        array.push(tmp);
        helper(array, end + 1, end + 1, length, s, result);
        array.pop();
    }
    else {
        helper(array, start, end + 1, length, s, result);
        return;
    }
}

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}

console.log(partition("efe"));

console.log(partition("aab"));