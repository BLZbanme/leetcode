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
    let min = sentence.length;
    let set = new Set();

    function dfs(str) {

        if (set.size === dictionary.length) {
            min = Math.min(min, count(str));
            return;
        }
        
        for (let i = 0; i < dictionary.length; i++) {
            if (!set.has(dictionary[i])) {

                let tmp = str.replace(new RegExp(dictionary[i], 'g'), ' ');
                set.add(dictionary[i]);
                dfs(tmp, set);
                set.delete(dictionary[i]);
            } 
        }
    }

    dfs(sentence);

    return min;
};

function count(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            count++;
        }
    }
    return count;
}

var respace = function(dictionary, sentence) {
    const N = sentence.length;

    let root = new Trie();

    debugger

    for (let word of dictionary) {
        root.insert(word);
    }

   

    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i - 1] + 1;
        let cur = root;
        for (let j = i; j >= 1; j--) {
            let t = sentence[j - 1].charCodeAt() - 'a'.charCodeAt();
            if (!cur.next[t]) {
                break;
            }
            else if (cur.next[t].isEnd) {
                dp[i] = Math.min(dp[i], dp[j - 1]);
            }

            if (dp[i] == 0) {
                break;
            }

            cur = cur.next[t]; 
        }
    }

    return dp[N];
}

class Trie {

    constructor() {
        this.next = [];
        this.isEnd = false;
    }

    insert(s) {
        let cur = this;
        for (let i = s.length - 1; i >= 0; i--) {
            let t = s[i].charCodeAt() - 'a'.charCodeAt();
            if (!cur.next[t]) {
                cur.next[t] = new Trie();
            }

            cur = cur.next[t];
        }

        cur.isEnd = true;
    }
}

var respace = function(dictionary, sentence) {
    const N = sentence.length;

    const wordDict = new Set(dictionary);

    const dp = Array(N + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= N; i++) {
        
        for (let j = i - 1; j >= 0; j--) {
            let tmp = sentence.slice(j, i);
            if (wordDict.has(tmp)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
            else {
                dp[i] = Math.min(dp[i], dp[j] + i - j);
            }
        }
    }

    return dp[N];
}


console.log(respace(["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"));

console.log(respace(["patk","mk","bgmuaukzpbp","tpakjawagaakakmpkkikjpbmppiiazkkdko","apoggddaakoadudmw","mugaxmgwkbptxmbmt","tijagbkixiwzdddbbjjgpk","goaotk","kk","xambkwpozgouaaamzgtpkojgdbxuwkjz","gmwo","bkbpdptkjxjgatdkukxmxkabkjmiuotiikb","ad","babtgmz","kujuak","ikimadpozaxozoaikttzamjakk","jjumibouto"]
, "bgmuaukzpbpkujuakpatk"));



