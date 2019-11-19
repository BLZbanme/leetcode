/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
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

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))