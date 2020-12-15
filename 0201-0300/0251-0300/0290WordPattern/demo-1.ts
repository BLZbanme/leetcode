function wordPattern(pattern: string, s: string): boolean {

    const arr = s.split(' ')
    const M = pattern.length;
    const N = arr.length;
    const p2s =  new Map();
    const set = new Set();
    if (M !== N) return false;
    for (let i = 0; i < N; i++) {
        if (p2s.has(pattern[i])) {
            if (arr[i] !== p2s.get(pattern[i])) return false;
        }
        else {
            if (set.has(arr[i])) return false;
            set.add(arr[i])
            p2s.set(pattern[i], arr[i])
        }
    }
    return true
};

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))