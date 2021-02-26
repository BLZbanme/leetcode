/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const n = s.length;
    const aCode = 'a'.charCodeAt();
    const dfs = (l, r) => {
        const map = Array(26).fill(0);
        for (let i = l; i <= r; i++) {
            map[s.charCodeAt(i) - aCode]++;
        }
        let split = 0;
        for (let i = 0; i < 26; i++) {
            if (map[i] > 0 && map[i] < k) {
                split = String.fromCharCode(i + aCode);
                break;
            }
        }
        if (split === 0) {
            return r - l + 1;
        }
        let i = l;
        let res = 0;
        while (i <= r) {
            while (i <= r && s[i] === split) {
                i++;
            }
            if (i > r) {
                break;
            }
            let start = i;
            while (i <= r && s[i] !== split) {
                i++;
            }
            const length = dfs(start, i - 1);
            res = Math.max(res, length);
        }
        return res;
    }

    return dfs(0, n - 1);
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const n = s.length;
    const aCode = 'a'.charCodeAt();

    let res = 0;
    for (let t = 1; t <= 26; t++) {
        let l = 0;
        let r = 0;
        const map = Array(26).fill(0);
        let tot = 0;
        let less = 0;
        while (r < n) {
            map[s.charCodeAt(r) - aCode]++;
            if (map[s.charCodeAt(r) - aCode] === 1) {
                tot++;
                less++;
            }
            if (map[s.charCodeAt(r) - aCode] === k) {
                less--;
            }
            while (tot > t) {
                map[s.charCodeAt(l) - aCode]--;
                if (map[s.charCodeAt(l) - aCode] === k - 1) {
                    less++;
                }
                if (map[s.charCodeAt(l) - aCode] === 0) {
                    tot--;
                    less--;
                }
                l++;
            }
            if (less === 0) {
                res = Math.max(res, r - l + 1);
            }
            r++;
        }
    }
    return res;
};