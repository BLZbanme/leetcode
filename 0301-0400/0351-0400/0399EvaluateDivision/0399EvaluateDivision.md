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

#### 	我的思路：

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

#### 2021.01.24

##### redo

```typescript
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const N = equations.length;
    const ufww = new UnionFindWithWeight(2 * N);

    let idCount = 0;
    const val2Id = new Map<string, number>();
    for (let equation of equations) {
        const [x, y] = equation;
        val2Id.has(x) || val2Id.set(x, idCount++);
        val2Id.has(y) || val2Id.set(y, idCount++);
    }

    for (let i = 0; i < N; i++) {
        const [x, y] = equations[i];
        const value = values[i];
        ufww.union(val2Id.get(x)!, val2Id.get(y)!, value);
    }

    const result = [];

    for (let query of queries) {
        const [x, y] = query;
        result.push(ufww.isConnected(val2Id.get(x)!, val2Id.get(y)!))
    }
    return result;
};

class UnionFindWithWeight {
    parent: Array<number>
    weight: Array<number>

    constructor(n: number) {
        this.parent = Array(n).fill(-1);
        this.weight = Array(n).fill(1);
    }

    findRoot(x: number): number {
        if (this.parent[x] === -1) return x;
        let origin = this.parent[x];
        this.parent[x] = this.findRoot(this.parent[x]);
        this.weight[x] *= this.weight[origin];
        return this.parent[x];
    }

    union(x: number, y: number, value: number): boolean {
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) return false;
        this.parent[xRoot] = yRoot;
        this.weight[xRoot] = (this.weight[y] * value) / this.weight[x];
        return true;
    }

    isConnected(x: number, y: number): number {
        if (x === undefined || y === undefined) return -1.0;
        let xRoot = this.findRoot(x);
        let yRoot = this.findRoot(y);
        if (xRoot === yRoot) {
            return this.weight[x] / this.weight[y];
        }
        return -1.0;
    }
}
```





