# 207. Course Schedule

There are a total of *n* courses you have to take, labeled from `0` to `n-1`.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: `[0,1]`

Given the total number of courses and a list of prerequisite **pairs**, is it possible for you to finish all courses?

**Example 1:**

```
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
```

**Example 2:**

```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```

**Note:**

1. The input prerequisites is a graph represented by **a list of edges**, not adjacency matrices. Read more about [how a graph is represented](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs).
2. You may assume that there are no duplicate edges in the input prerequisites.

##### 2019.11.19

##### 	我的思路：

​		dfs，用栈实现拓扑排序

```javascript
var canFinish = function(numCourses, prerequisites) {
    const WHITE = 1;
    const GRAY = 2;
    const BLACK = 3;
    const adjList = new Map();
    const color = new Map();
    let isPossible = true;

    for (let i = 0; i < numCourses; i++) {
        color.set(i, WHITE);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let dest = prerequisites[i][1];
        let src = prerequisites[i][0];
        let list = adjList.get(src) || [];
        list.push(dest);
        adjList.set(src, list);
    }


    function dfs(node) {
        if (!isPossible) {
            return;
        }

        color.set(node, GRAY);
        let list = adjList.get(node) || [];
        for (let i = 0; i < list.length; i++) {
            let nowColor = color.get(list[i]);
            if (nowColor === WHITE) {
                dfs(list[i]);
            }
            else if (nowColor === GRAY) {
                isPossible = false;
            }
        }
        color.set(node, BLACK);
    }

    for (let i = 0; i < numCourses; i++) {
        if (color.get(i) === WHITE) {
            dfs(i);
        }
    }

    return isPossible;
};
```

​		bfs，用队列实现拓扑排序

```javascript
var canFinish = function(numCourses, prerequisites) {
    const queue = [];
    const inDegree = new Array(numCourses).fill(0);
    const adjList = new Map();
    const result = [];

    for (let i = 0; i < prerequisites.length; i++) {
        let dest = prerequisites[i][1];
        let src = prerequisites[i][0];
        inDegree[dest]++;
        let list = adjList.get(src) || [];
        list.push(dest);
        adjList.set(src, list);
    }


    for (let i = 0; i < numCourses; i++) {
        if (!inDegree[i]) {
            queue.push(i);
        }
    }

    while (queue.length) {
        let node = queue.shift();
        result.push(node);
        let list = adjList.get(node) || [];
        for (let adjNode of list) {
            inDegree[adjNode]--;
            if (!inDegree[adjNode]) {
                queue.push(Node);
            }
        }
    }

    return result.length === numCourses;
}
```

