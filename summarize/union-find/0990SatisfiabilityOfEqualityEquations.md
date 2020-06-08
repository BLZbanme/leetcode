# 990. Satisfiability of Equality Equations

Given an array equations of strings that represent relationships between variables, each string `equations[i]` has length `4` and takes one of two different forms: `"a==b"` or `"a!=b"`.  Here, `a` and `b` are lowercase letters (not necessarily different) that represent one-letter variable names.

Return `true` if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.

**Example 1:**

```
Input: ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.
```

**Example 2:**

```
Input: ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
```

**Example 3:**

```
Input: ["a==b","b==c","a==c"]
Output: true
```

**Example 4:**

```
Input: ["a==b","b!=c","c==a"]
Output: false
```

**Example 5:**

```
Input: ["c==c","b==d","x!=z"]
Output: true
```

**Note:**

1. `1 <= equations.length <= 500`
2. `equations[i].length == 4`
3. `equations[i][0]` and `equations[i][3]` are lowercase letters
4. `equations[i][1]` is either `'='` or `'!'`
5. `equations[i][2]` is `'='`

##### 2020.06.08

##### 	我的思路：

​	先排序，把等于的排到前面，然后把这些相等的放在同一个set中，同时遍历的时候合并一些set，最后在不等中判断是否存在问题。（我的这种思路，优化后就是并查集思想了！）

```javascript
var equationsPossible = function(equations) {
    const setList = [];
    equations.sort((e1, e2) => {
        if (e1[1] === "=") {
            return -1;
        }
        else if (e2[1] === "=") {
            return 1;
        }
        else {
            return 0;
        }
    })

    // debugger
    for (let e of equations) {
        if (e[1] === "=") {
            let theSet = null;
            for (let item in setList) {
                if (!setList[item]) {
                    continue;
                }
                if (setList[item].has(e[0]) || setList[item].has(e[3])) {
                    if (!theSet) {
                        setList[item].add(e[0]);
                        setList[item].add(e[3]);
                        theSet = setList[item];
                    }
                    else {
                        setList[item].forEach(e => {
                            theSet.add(e);
                        })
                        setList[item] = null;
                    }
                }
            }
            (theSet == null) && setList.push(new Set([e[0], e[3]]));
        }
        else {
            if (e[0] === e[3]) {
                return false;
            }
            for (let set of setList) {
                if (!set) {
                    continue;
                }
                if (set.has(e[0]) && set.has(e[3])) {
                    return false;
                }
            }
        }
    }

    return true;
};
```

##### 别人的方法：

​	并查集（[我在b站上看别人讲的并查集](https://www.bilibili.com/video/BV13t411v7Fs?p=1)）

```javascript
var equationsPossible = function(equations) {
    const parent = new Array(26);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    for (let str of equations) {
        if (str[1] === "=") {
            let index1 = str[0].charCodeAt() - aCode;
            let index2 = str[3].charCodeAt() - aCode;
            union(parent, index1, index2);
        }
    }

    for (let str of equations) {
        if (str[1] === '!') {
            let index1 = str[0].charCodeAt() - aCode;
            let index2 = str[3].charCodeAt() - aCode;
            if (find(parent, index1) == find(parent, index2)) {
                return false;
            }
        }
    }

    return true;
}

function union(parent, index1, index2) {
    parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
    while (parent[index] != index) {
        parent[index] = parent[parent[index]]
        index = parent[index];
    }
    return index;
}
```

