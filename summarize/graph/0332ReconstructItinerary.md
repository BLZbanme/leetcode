# 332. Reconstruct Itinerary

Given a list of airline tickets represented by pairs of departure and arrival airports `[from, to]`, reconstruct the itinerary in order. All of the tickets belong to a man who departs from `JFK`. Thus, the itinerary must begin with `JFK`.

**Note:**

1. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.
2. All airports are represented by three capital letters (IATA code).
3. You may assume all tickets form at least one valid itinerary.

**Example 1:**

```
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
```

**Example 2:**

```
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
```

##### 2020.01.04

##### 	我的思路：

​		我看出了这是求欧拉路径的问题，但是我图的算法不太熟，所以是自己强行写的方法。

1. 首先map中存的是每个结点的邻接链表，由于要按字典序，所以用的优先队列（js中没有现成的优先队列，我又懒得自己写，所以每插入一次排次序）
2. 然后dfs搜索每个结点（我的dfs和标准的深度优先遍历图有点区别，主要是因为我现在对图的算法不熟，所以强行写的），我判断的是出口方法是result数组中的长度等于tickets的长度加1，这样表示遍历了所有节点。又由于我为了标识已经遍历的节点，所以我用map2记录了每个节点的遍历数，极度麻烦！

```javascript
var findItinerary = function(tickets) {
    let map = new Map();
    let map2 = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
        if (map2.has(e[0] + e[1])) {
            map2.set(e[0] + e[1], map2.get(e[0] + e[1]) + 1);
        }
        else {
            map2.set(e[0] + e[1], 1);
        }
    })

    const COUNT = tickets.length;
    let start = 'JFK';
    let result = [];
    let tmp = [];

    function dfs(str) {
        if (result.length) {
            return;
        }
        tmp.push(str);
        if (tmp.length == COUNT + 1 && !result.length) {
            result = Array.from(tmp);
            return;
        }
        let arr = map.get(str);
        if (arr) {
            arr.forEach(e => {
                if (map2.get(str + e)) {
                    map2.set(str + e,  map2.get(str + e) - 1);
                    dfs(e);
                    map2.set(str + e,  map2.get(str + e) + 1);
                }
            })
        }
        tmp.pop();
    }

    dfs(start);
    return result;
};
```

##### 别人的写法：

​		标准的递归式dfs遍历图

```javascript
var findItinerary = function(tickets) {
    let map = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
    })

    let result = [];
    
    function dfs(str) {
        while(map.has(str) && map.get(str).length) {
            dfs(map.get(str).shift());
        }
        result.unshift(str);
    }

    dfs('JFK');
    return result;
}
```

​	标准的迭代式dfs遍历图

```javascript
var findItinerary = function(tickets) {
    let map = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
    })

    let result = [];
    let stack = ['JFK'];
    while (stack.length) {
        while (map.has(stack[stack.length - 1]) && map.get(stack[stack.length - 1]).length) {
            stack.push(map.get(stack[stack.length - 1]).shift());
        }
        result.unshift(stack.pop());
    }
    return result;
}
```