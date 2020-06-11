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

# 399. Evaluate Division

Equations are given in the format `A / B = k`, where `A` and `B` are variables represented as strings, and `k` is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return `-1.0`.

**Example:**
Given `a / b = 2.0, b / c = 3.0.`
queries are: `a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .`
return `[6.0, 0.5, -1.0, 1.0, -1.0 ].`

The input is: `vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries `, where `equations.size() == values.size()`, and the values are positive. This represents the equations. Return `vector<double>`.

According to the example above:

```
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
```

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

##### 2020.06.10

#### 我的思路：

​		带边权的并查集问题。昨天每日一题写了[990. Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)，学习了并查集的使用，如果不懂并查集的思想，建议观看我昨天观看的[b站一个up主的视频](https://www.bilibili.com/video/BV13t411v7Fs?from=search&seid=16842576201933977814)，20分钟入门。

​		上述视频，利用parent数组来存储并查集间的指向关系。而针对此题，由于输入的equations的变量不像990. Satisfiability of Equality Equations题那样固定在小写字符，所以我采用parentMap来存储变量之间的映射关系，同时用valueMap存储各个变量之间的比例关系。

​		首先遍历equations和values，实现parentMap和valueMap的初始化。一般来说parentMap初始化时，并查集都单独的元素，每个结点都是根节点，可以选择结点在parentMap中指向空元素或者指向自己来表示为根节点。

​		但是此题中需要把queries中在equations不存在的变量全部用-1表示，所以我初始化的时候采用```parentMap.set(equations[i][0], equations[i][0]);```来表示为根节点，这样在find函数中的``` !parentMap.get(index) ```就可用判断queries中的该式子应该为-1.

​		find函数中，查找当前结点的根节点，同时用value来存储当前结点到根节点的边权重乘积。

​		union函数，把两个并查集合并，我实现的合并操作是永远都是让两个根合并，同时改变被合并的那个根结点在valueMap中的权重，具体值是```(value * tmp2.value) / tmp1.value```,value为对应的values数组中的比例值。

​		最后在遍历queries中判断它们的值，tmp1存储每个等式左边的项在并查集的根节点和路径权重乘积，tmp2贼存储右边，分三种情况

1. tmp1和tmp2中存在至少一个null，说明等式两边存在一个新变量，所以返回-1
2. tmp1.index === tmp2.index，说明tmp1和tmp2在同一个并查集中，所以返回它们各自的路径权重乘积的比例
3. tmp1.index !== tmp2.index，说明tmp1和tmp2不在同一个并查集中，所以返回-1

```javascript
var calcEquation = function(equations, values, queries) {
    let parentMap = new Map();
    let valueMap = new Map();

    for (let i = 0; i < equations.length; i++) {
        if (!parentMap.has(equations[i][0])) {
            parentMap.set(equations[i][0], equations[i][0]);
        }
        if (!parentMap.has(equations[i][1])) {
            parentMap.set(equations[i][1], equations[i][1]);
        }

        if (!valueMap.has(equations[i][0])) {
            valueMap.set(equations[i][0], 1);
        }
        if (!valueMap.has(equations[i][1])) {
            valueMap.set(equations[i][1], 1);
        }
        union(parentMap, valueMap, equations[i][0], equations[i][1], values[i]);
    }

    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let tmp1 = find(parentMap, valueMap, queries[i][0]);
        let tmp2 = find(parentMap, valueMap, queries[i][1]);
        if (!tmp1 || !tmp2) {
            result.push(-1.0);
            continue;
        }
        if (tmp1.index === tmp2.index) {
            result.push(tmp1.value / tmp2.value);
        }
        else {
            result.push(-1.0);
        }     
    }
    return result;
};

function union(parentMap, valueMap, index1, index2, value) {
    let tmp1 = find(parentMap, valueMap, index1);
    let tmp2 = find(parentMap, valueMap, index2);
    parentMap.set(tmp1.index, tmp2.index);
    valueMap.set(tmp1.index, (value * tmp2.value) / tmp1.value);
}

function find(parentMap, valueMap, index) {
    let value = 1;
    while (parentMap.get(index) && parentMap.get(index) !== index) {
        value *= valueMap.get(index);
        index = parentMap.get(index);
    }
    if (!parentMap.get(index)) {
        return null;
    }
    return {
        index,
        value
    };
}

console.log(calcEquation(
    [["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]],
    [3.0,0.5,3.4,5.6],
    [["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]
))

console.log(calcEquation(
    [["a","b"],["e","f"],["b","e"]],
    [3.4,1.4,2.3],
    [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]]
))

console.log(calcEquation([ ["a", "b"], ["b", "c"] ], [2.0, 3.0], [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]))
```

# 739. Daily Temperatures

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

##### 2020.06.11

##### 我的思路：

​	暴力循环，时间复杂度O(n<sup>2</sup>)，空间复杂度O(n)

```javascript
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = T.length - 1; i >= 0; i--) {
        let j = i + 1;
        for (; j < T.length; j++) {
            if (T[j] > T[i]) {
                break;
            }
        }
        result.unshift(j === T.length ? 0 : j - i);
    }
    return result;
};
```

##### 高手的写法

​	思路：单调栈。

​	维护一个存储下标的单调栈，从栈底到栈顶的下标对应的温度列表中的温度依次递减。如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标。

​	时间复杂度O(n)，空间复杂度O(n)

```javascript
var dailyTemperatures = T => {
    const result = new Array(T.length).fill(0);
    const stack = [];
    T.forEach((e, index) => {
        while (stack.length && T[stack[stack.length - 1]] < e) {
            let tmpIndex = stack.pop();
            result[tmpIndex] = index - tmpIndex;
        }
        stack.push(index);
    });
    return result;
}
```



