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

# 350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

**Note:**

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

**Follow up:**

- What if the given array is already sorted? How would you optimize your algorithm?
- What if *nums1*'s size is small compared to *nums2*'s size? Which algorithm is better?
- What if elements of *nums2* are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

##### 2019.11.21

#### 我的思路：

##### 方法1：

​		先排序，然后两个指针比

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    const N1 = nums1.length;
    const N2 = nums2.length;
    while (i < N1 && j < N2) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return result;
};
```

##### 方法2：

​		蠢蠢的map

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    const map1 = new Map();
    const map2 = new Map();
    nums1.forEach(e => {
        let tmp = map1.get(e);
        if (tmp) {
            map1.set(e, tmp + 1);
        }
        else {
            map1.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map2.get(e);
        if (tmp) {
            map2.set(e, tmp + 1);
        }
        else {
            map2.set(e, 1);
        }
    });

    map1.forEach((v, k) => {
        let v2 = map2.get(k) || 0;
        for (let i = 0; i < Math.min(v, v2); i++) {
            result.push(k);
        }
    })

    return result;
}
```

#### 别人的写法：

##### 给力的map：

```javascript
var intersect = function(nums1, nums2) {
    const result = [];
    const map = new Map();
    nums1.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp + 1);
        }
        else {
            map.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp - 1);
            result.push(e);
        }
    });

    return result;
}
```

