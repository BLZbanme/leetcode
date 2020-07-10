/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = new Set();

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.add(str);
            return;
        }

        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i]) {
                continue;
            }
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return Array.from(result);
};

var permutation = function(s) {
    const result = [];
    let strArr = s.split("");

    dfs(0);
    
    function dfs(index) {

        if (index === s.length - 1) {
            result.push(strArr.join(""));
            return;
        }

        const set = new Set();

        for (let i = index; i < s.length; i++) {
            if (set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i]);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
            dfs(index + 1);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
        }
    }

    return result;
};

var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = [];

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.push(str);
            return;
        }

        const set = new Set();
        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i] || set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i])
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return result;
};

console.log(permutation("abca"));

console.log(permutation("abc"));



