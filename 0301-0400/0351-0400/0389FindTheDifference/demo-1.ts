function findTheDifference1(s: string, t: string): string {
    const map = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0)
    const N = s.length;
    for (let i = 0; i < N; i++) {
        map[s.charCodeAt(i) - aCode]--
        map[t.charCodeAt(i) - aCode]++
    }
    map[t.charCodeAt(N) - aCode]++
    for (let i = 0; i < 26; i++) {
        if (map[i]) {
            return String.fromCharCode(i + aCode)
        }
    }
    return ''
};

function findTheDifference(s: string, t: string): string {
    let ret = 0
    for (const ch of s) {
        ret ^= ch.charCodeAt(0)
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt(0)
    }
    return String.fromCharCode(ret)
};

console.log(findTheDifference('abcd', 'abcde')) //e