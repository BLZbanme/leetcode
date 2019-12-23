/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index = 0;
    let i = 0;
    const sLen = s.length;
    const tLen = t.length;
    while (index < sLen && i < tLen) {
        if (t[i] === s[index]) {
            index++;
        }
        i++;
    }
    return index === sLen;
};

var isSubsequence = function(s, t) {
    const aCode = 'a'.charCodeAt();
    let mapArr = new Array(26);
    const tLen = t.length;
    for (let i = 0; i < tLen; i++) {
        if (mapArr[t[i].charCodeAt() - aCode]) {
            mapArr[t[i].charCodeAt() - aCode].push(i);
        }
        else {
            mapArr[t[i].charCodeAt() - aCode] = [i];
        }
    }

    let index = 0;
    for (let i = 0, sLen = s.length; i < sLen; i++) {
        let indexArray = mapArr[s[i].charCodeAt() - aCode];
        if (!indexArray) {
            return false;
        }
        let lo = 0;
        let hi = indexArray.length;
        while (lo <= hi) {
            let mid = Math.floor(lo + Math.floor((hi - lo) / 2));
            if (indexArray[mid] < index) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        if (lo === indexArray.length) {
            return false;
        }
        index = indexArray[lo] + 1;
    }
    return true;
}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
