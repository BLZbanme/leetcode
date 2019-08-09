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
    if (start === length) {
        result.push(Array.from(array));
        return;
    }
    
    let i = 1;
    while (end + i <= length) {
        debugger
        let tmp = s.slice(start, end + i);
        let palindrome = isPalindrome(tmp);
        if (palindrome) {
            helper(array, start, end + i, length, s, result);
            array.push(tmp);
            helper(array, end + i, end + i, length, s, result);
            array.pop();
        }
        else {
            return;
        }
        i++;
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

console.log(partition("aab"));