# 785.Is Graph Bipartite?

Given an undirected `graph`, return `true` if and only if it is bipartite.

Recall that a graph is *bipartite* if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: `graph[i]` is a list of indexes `j` for which the edge between nodes `i` and `j` exists.  Each node is an integer between `0` and `graph.length - 1`.  There are no self edges or parallel edges: `graph[i]` does not contain `i`, and it doesn't contain any element twice.

```
Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.
```

 

**Note:**

- `graph` will have length in range `[1, 100]`.
- `graph[i]` will contain integers in range `[0, graph.length - 1]`.
- `graph[i]` will not contain `i` or duplicate values.
- The graph is undirected: if any element `j` is in `graph[i]`, then `i` will be in `graph[j]`.

##### 2020.07.16

##### 	我的思路：

广度优先遍历，set记录走过的点，如果每次循环暂存一次队列，队列里面的元素都是应该是在一个集合的，如果便利这次队列时，他们的邻接表里面有队列中的值，说明不是二分图。

```javascript
var isBipartite = function(graph) {
    let set = new Set();

    const queue = [];
    
    for (let i = 0; i < graph.length; i++) {
        if (set.has(i)) {
            continue;
        }
        queue.push(i);
        set.add(i);
        while (queue.length) {
            let tmp = Array.from(queue);
            let length = queue.length;
            while (length--) {
                let now = queue.shift();
                for (let i = 0; i < graph[now].length; i++) {
                    if (tmp.includes(graph[now][i])) {
                        return false;
                    }
    
                    if (!set.has(graph[now][i])) {
                        set.add(graph[now][i]);
                        queue.push(graph[now][i])
                    }
                }
            }
        }
    }

    return true;;
};
```
