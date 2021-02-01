433. Minimum Genetic Mutation

A gene string can be represented by an 8-character long string, with choices from `"A"`, `"C"`, `"G"`, `"T"`.

Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

For example, `"AACCGGTT"` -> `"AACCGGTA"` is 1 mutation.

Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

**Note:**

1. Starting point is assumed to be valid, so it might not be included in the bank.
2. If multiple mutations are needed, all mutations during in the sequence must be valid.
3. You may assume start and end string is not the same.

 

**Example 1:**

```
start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

return: 1
```

 

**Example 2:**

```
start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

return: 2
```

 

**Example 3:**

```
start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

return: 3
```

#### 2021.02.01

#### 	我的思路：

```javascript
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
```
