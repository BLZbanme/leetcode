/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const N = words.length;
    const result = [];

    const dfs = (index) => {
        if (index === N) {
            return;
        }
        let now = words[index];
        for (let i = index + 1; i < N; i++) {
            if (isPalindrome(now + words[i])) {
                result.push([index, i]);
            }
            if (isPalindrome(words[i] + now)) {
                result.push([i, index]);
            }
        }
        dfs(index + 1);
    }

    dfs(0);

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

var palindromePairs = function(words) {
    const reversedMap = new Map();
    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split('').reverse().join('');
        reversedMap.set(reversed, i);
    }

    const res = [];

    for (let i = 0; i < words.length; i++) {
        const curWord = words[i];
        if (isPalindrome(curWord) && reversedMap.has('') && curWord !== '') {
            res.push([reversedMap.get(''), i]);
          }
      
        for (let j = 0; j < curWord.length; j++) {
            const left = curWord.substring(0, j);
            const right = curWord.substring(j);
            if (isPalindrome(left) && reversedMap.has(right) && reversedMap.get(right) !== i) {
                res.push([reversedMap.get(right), i]);
            }

            if (isPalindrome(right) && reversedMap.has(left) && reversedMap.get(left) !== i) {
                res.push([i, reversedMap.get(left)]);
            }
        }
    }

    return res;
}

console.log(palindromePairs(
    ["abcd","dcba","lls","s","sssll"]
)) //[[0,1],[1,0],[3,2],[2,4]] 

console.log(palindromePairs(
    ["bat","tab","cat"]
)) //[[0,1],[1,0]] 