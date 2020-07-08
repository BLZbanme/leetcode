/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    dictionary.sort(compare);
    dictionary.forEach(e => {
        let regexp = new RegExp(e, 'g');
        sentence = sentence.replace(regexp, " ");
    })

    return sentence.split("").filter(e => e != ' ').length;
};

function compare(a, b) {
    if (a.indexOf(b) !== -1) {
        return -1;
    }
    else if (b.indexOf(a) !== -1) {
        return 1;
    }
    else {
        return 0;
    }
}

var respace = function(dictionary, sentence) {
    const N = sentence.length;
    const dp = Array(N + 1);
    dp[0] = 0;
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[j - 1], )
        }
    }
};

console.log(respace(["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"));
