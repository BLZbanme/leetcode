function minMutation(start: string, end: string, bank: string[]): number {
    const n = start.length;
    const set = new Set(bank);
    const arr = ['A', 'C', 'G', 'T'];
    const queue = [start];
    let depth = 0;
    
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()!;
            if (cur === end) return depth;
            const curArr = cur.split('');
            for (let j = 0; j < n; j++) {
                const tmp = curArr[j];
                for (let k = 0; k < 4; k++) {
                    if (arr[k] === tmp) continue;
                    curArr[j] = arr[k];
                    const newStr = curArr.join('');
                    if (set.has(newStr)) {
                        queue.push(newStr);
                        set.delete(newStr);
                    }
                }
                curArr[j] = cur[j];
            }
        }
        depth++;
    }

    return -1;
};

console.log(minMutation("AAAAAAAA", "CCCCCCCC", ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA"])); //4
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"])); //4
console.log(minMutation('AACCGGTT', 'AACCGGTA', ["AACCGGTA"]))//1
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA", "AACCGCTA", "AAACGGTA"]))//2
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC", "AAACCCCC", "AACCCCCC"]))//3
