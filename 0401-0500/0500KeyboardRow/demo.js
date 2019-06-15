/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const one = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
    const two = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
    const three = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);
    return words.filter(arr => 
        {
            let charArr = arr.toLowerCase().split("");
            return charArr.every(e => one.has(e)) || charArr.every(e => two.has(e)) || charArr.every(e => three.has(e))
        }
    );
};

var findWords = function(words) {
    return words.filter(arr => /^[qwertyuiop]*$/i.test(arr) || /^[asdfghjkl]*$/i.test(arr) || /^[zxcvbnm]*$/i.test(arr));
};               
                                                                                         
findWords(["Hello", "Alaska", "Dad", "Peace"]);