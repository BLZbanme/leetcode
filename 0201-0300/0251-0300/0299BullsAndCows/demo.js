/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    if (!secret) {
        return '0A0B';
    }
    let map = new Map();
    const N = secret.length;
    let bulls = 0;
    let gArr = guess.split("");
    for (let i = 0; i < N; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
            gArr[i] = "*";
        }else {
            let tmp = map.get(secret[i]);
            map.set(secret[i], tmp ? tmp + 1 : 1);
        }
    }
    
    let cows = 0;
    for (let i = 0; i < N; i++) {
        let tmp = map.get(gArr[i]);
        if (tmp) {
            map.set(gArr[i], --tmp);
            cows++;
        }
    }
    return `${bulls}A${cows}B`;
};

var getHint = function(secret, guess) {
    let count = new Array(10).fill(0);
    let bulls = 0;
    let cows = 0;
    const N = secret.length;
    const zero = '0'.charCodeAt();
    for (let i = 0; i < N; i++) {
        let a = secret[i].charCodeAt() - zero;
        let b = guess[i].charCodeAt() - zero;
        if (a === b) {
            bulls++;
        }
        else {
            if (count[a] < 0) {
                cows++;
            }
            if (count[b] > 0) {
                cows++;
            }
            count[a]++;
            count[b]--;
        }
    }
    return `${bulls}A${cows}B`;
}

console.log(getHint("1122", "1222"))

console.log(getHint("1123", "0111"))

console.log(getHint("1122", "2211"))


console.log(getHint("1807", "7810"))
