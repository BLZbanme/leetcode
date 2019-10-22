/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const N1 = s.length;
    const N2 = t.length;
    if (N1 !== N2) {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < N1; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1);
        }
        else {
            map1.set(s[i], 1);
        }

        if (map2.has(t[i])) {
            map2.set(t[i], map2.get(t[i]) + 1);
        }
        else {
            map2.set(t[i], 1);
        }
    }

    for (let i = 0; i < N1; i++) {
        if (map1.get(s[i]) !== map2.get(t[i])) {
            return false;
        }
    }
    return true;
};

var isIsomorphic = function(s, t) {
    let m1 = new Array(256).fill(0);
    let m2 = new Array(256).fill(0);
    const N = s.length;
    for (let i = 0; i < N; i++) {
        if (m1[[s[i]]] !== m2[t[i]]) {
            return false;
        }
        m1[s[i]] = i + 1;
        m2[t[i]] = i + 1;
    }
    return true;
}

var isIsomorphic = function(s, t) {
    for (let i = 0, len = s.length; i < len; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
}

var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();
    for (let i = 0; i  < s.length; i++) {
        const sNow = mapS.get(s[i]);
        const tNow = mapT.get(t[i]);
        if ((sNow && sNow !== t[i]) || (tNow && tNow !== s[i])) {
            return false;
        }
        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
    }
    return true;
}

console.log(isIsomorphic("abba", "abab"));
console.log(isIsomorphic("aba", "baa"));