# 839.Similar String Groups

Two strings `X` and `Y` are similar if we can swap two letters (in different positions) of `X`, so that it equals `Y`. Also two strings `X` and `Y` are similar if they are equal.

For example, `"tars"` and `"rats"` are similar (swapping at positions `0` and `2`), and `"rats"` and `"arts"` are similar, but `"star"` is not similar to `"tars"`, `"rats"`, or `"arts"`.

Together, these form two connected groups by similarity: `{"tars", "rats", "arts"}` and `{"star"}`.  Notice that `"tars"` and `"arts"` are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list `strs` of strings where every string in `strs` is an anagram of every other string in `strs`. How many groups are there?

 

**Example 1:**

```
Input: strs = ["tars","rats","arts","star"]
Output: 2
```

**Example 2:**

```
Input: strs = ["omv","ovm"]
Output: 1
```

 

**Constraints:**

- `1 <= strs.length <= 100`
- `1 <= strs[i].length <= 1000`
- `sum(strs[i].length) <= 2 * 104`
- `strs[i]` consists of lowercase letters only.
- All words in `strs` have the same length and are anagrams of each other.

#### 2021.01.31

##### 	我的思路：

我的union-find技术不谈了！

```javascript
function numSimilarGroups(strs: string[]): number {
    const n = strs.length;
    const uf = new UnionFind0839(n);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (check(strs[i], strs[j])) {
                uf.union(i, j);
            }
        }
    }
    return uf.setCount;
};

class UnionFind0839 {
    parent: Array<number>
    setCount: number

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.setCount = n;
    }

    find(x: number): number {
        if (this.parent[x] === -1) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const xRoot = this.find(x);
        const yRoot = this.find(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        this.setCount--;
        return true;
    }
}

function check(str1: string, str2: string): boolean {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;
    }
    if (count > 2) return false;
    return true;
}
```
