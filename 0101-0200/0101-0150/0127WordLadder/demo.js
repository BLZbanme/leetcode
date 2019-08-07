/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let beginOneDiffIndex = -Infinity;
    let beginIndex = -Infinity;
    let endOneDiffIndex = Infinity;
    let endIndex = Infinity;
    let len = Infinity;
    debugger
    wordList.forEach((e, i) => {
        let beginDiffNum = diffNum(e, beginWord);
        let endDiffNum = diffNum(e, endWord);
        if (beginDiffNum === 0) {
            beginIndex = i;
        }
        if (beginDiffNum === 1) {
            beginOneDiffIndex = i;
        }
        if (endDiffNum === 0) {
            endIndex = i;
        }
        if (endDiffNum === 1) {
            endOneDiffIndex = i;
        }
        len = Math.min(...[len, endOneDiffIndex - beginIndex,
            endIndex - beginOneDiffIndex]);
    })
    return len === Infinity ? 0 : len;
};

function diffNum(word, pattern) {
    let times = 0;
    const N1 = word.length;
    const N2 = pattern.length;
    for (let i = 0; i < N1 && i < N2; i++) {
        if (word[i] !== pattern[i]) {
            if (++times > 1) {
                return false;
            }
        }
    }
    return times;
}

var ladderLength = function(beginWord, endWord, wordList) {
    let beginSet = new Set();
    let endSet = new Set();

    let len = 1;
    let visited = new Set();
    let a = 'a'.charCodeAt();
    let z = 'z'.charCodeAt();

    beginSet.add(beginWord);
    endSet.add(endWord);
    while (!beginSet.size && !endSet.size) {
        if (beginSet.size > endSet.size) {
            let set = beginSet;
            beginSet = endSet;
            endSet = set;
        }

        let tmp = new Set();
        for (let word of beginSet) {
            let chs = word.split("");
            for (let i = 0; i < chs.length; i++) {
                for (let c = a; c <= z; c++) {
                    let old = chs[i];
                    debugger
                    chs[i] = c.toString();
                    let target = chs.join("");
                    if (endSet.has(target)) {
                        return len + 1;
                    }
                    if (!visited.has(target) && wordList.indexOf(target) !== -1) {
                        tmp.add(target);
                        visited.add(target);
                    }
                    chs[i] = old;
                }
            }
        }
        beginSet = tmp;
        len++;
    }
    return 0;
}

console.log(ladderLength("a", "c", ["a","b","c"]))
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))