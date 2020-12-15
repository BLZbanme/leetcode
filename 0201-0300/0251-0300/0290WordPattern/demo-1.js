function wordPattern(pattern, s) {
    var arr = s.split(' ');
    var M = pattern.length;
    var N = arr.length;
    var p2s = new Map();
    var set = new Set();
    if (M !== N)
        return false;
    for (var i = 0; i < N; i++) {
        if (p2s.has(pattern[i])) {
            if (arr[i] !== p2s.get(pattern[i]))
                return false;
        }
        else {
            if (set.has(arr[i]))
                return false;
            set.add(arr[i]);
            p2s.set(pattern[i], arr[i]);
        }
    }
    return true;
}
;
console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
