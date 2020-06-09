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

##### 我的思路：

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

# 面试题46. 把数字翻译成字符串

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

##### 示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

提示：0 <= num < 2<sup>31</sup>

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

##### 2020.06.09

##### 我的思路：

​	自顶向下动态规划，可以很直接的发现到第i位的字符有多少划分方法等于到i-1步和i-2步的话，和走楼梯问题很像，只是把判断条件变成了一个值10-25的判断

```javascript
var translateNum = function(num) {
    let numStr = num.toString();
    const N = numStr.length;
    const dp = new Array(N + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1];
        let tmp = numStr.substr(i - 2, 2);
        if (+tmp <= 25 && +tmp > 9) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[N];
};
```

##### 注：这种递推关系的可以不借助dp数组来存储，用几个变量来存储更方便（这种写法我也写太多了，就懒得写了）

题外话，这种划分字符串的题还有很多会用递归回溯的方法来做，此题也可，但我感觉不太好，就没用。