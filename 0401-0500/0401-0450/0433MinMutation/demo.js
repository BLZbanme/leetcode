function minMutation(start, end, bank) {
    var n = start.length;
    var set = new Set(bank);
    var arr = ['A', 'C', 'G', 'T'];
    var queue = [start];
    var depth = 0;
    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var cur = queue.shift();
            if (cur === end)
                return depth;
            var curArr = cur.split('');
            for (var j = 0; j < n; j++) {
                var tmp = curArr[j];
                for (var k = 0; k < 4; k++) {
                    if (arr[k] === tmp)
                        continue;
                    curArr[j] = arr[k];
                    var newStr = curArr.join('');
                    if (set.has(newStr)) {
                        queue.push(newStr);
                        set["delete"](newStr);
                    }
                }
                curArr[j] = cur[j];
            }
        }
        depth++;
    }
    return -1;
}
;
console.log(minMutation("AAAAAAAA", "CCCCCCCC", ["AAAAAAAA", "AAAAAAAC", "AAAAAACC", "AAAAACCC", "AAAACCCC", "AACACCCC", "ACCACCCC", "ACCCCCCC", "CCCCCCCA"])); //4
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGATT", "AACCGATA", "AAACGATA", "AAACGGTA"])); //4
console.log(minMutation('AACCGGTT', 'AACCGGTA', ["AACCGGTA"])); //1
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"])); //2
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC", "AAACCCCC", "AACCCCCC"])); //3
