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

var partition = function(s) {
    let result = [];
    let arr = [];
    const N = s.length;

    function helper(array, start, end) {
        if (end > N) {
            return;
        }
        if (start === N) {
            result.push(Array.from(array));
            return;
        }
    
        let tmp = s.slice(start, end + 1);
        let palindrome = isPalindrome(tmp);
        if (palindrome) {
            helper(array, start, end + 1);
            array.push(tmp);
            helper(array, end + 1, end + 1);
            array.pop();
        }
        else {
            helper(array, start, end + 1);
            return;
        }
    }

    helper(arr, 0, 0);  
    return result;
};

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


var partition = function(s) {
    const N = s.length;
    let result = [];
    result[0] = [];
    result[0].push([]);
    let pair = new Array(N);
    for (let i = 0; i < N; i++) {
        pair[i] = new Array(N);
    }

    for (let i = 0; i < N; i++) {
        result[i + 1] = [];
        for (let left = 0; left <= i; left++) {
            if ((s[left] === s[i]) && (i - left <= 1 || pair[left + 1][i - 1])) {
                pair[left][i] = pair[left][i] = true;
                let str = s.substring(left, i + 1);
                for (let r of result[left]) {
                    let tmp = Array.from(r);
                    tmp.push(str);
                    result[i + 1].push(tmp);
                }
            }
        }
    }
    return result[N];
}

console.log(partition("efe"));

console.log(partition("aab"));