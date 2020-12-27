function isIsomorphic(s: string, t: string): boolean {
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }
        else {
            if (set.has(t[i])) return false;
            map.set(s[i], t[i]);
            set.add(t[i])
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add')) //true
console.log(isIsomorphic('foo', 'bar')) //false
console.log(isIsomorphic('paper', 'title')) //true