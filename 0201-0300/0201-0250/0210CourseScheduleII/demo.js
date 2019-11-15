/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if (!prerequisites.length) {
        let result = [];
        while (numCourses--) {
            result.push(numCourses);
        }
        return result;
    }
    let arr = new Array(numCourses);
    for (let i = 0; i <= numCourses; i++) {
        arr[i] = new Set();
    }

    let high = 0;
    for (let i = 0, len = prerequisites.length; i < len; i++) {
        let pre = prerequisites[i][1];
        let aft = prerequisites[i][0];
        let tmp = high;
        let pos = -Infinity;
        while (tmp >= 0) {
            if (arr[tmp].has(aft)) {
                pos = tmp;
            }
            if (arr[tmp].has(pre)) {
                arr[Math.max(pos, tmp + 1)].add(aft);
                high = Math.max(high, tmp + 1);
                while (--tmp >= 0) {
                    if (arr[tmp].has(aft)) {
                        return [];
                    }
                }
            }
            else if (!tmp) {
                arr[0].add(pre);
                arr[Math.max(pos, 1)].add(aft);
                high = Math.max(high, 1);
            }
            tmp--;
        }
    }

    let result = [];
    for (let i = 0; i < numCourses; i++) {
        Array.from(arr[i]).forEach(e => {
            result.push(e);
        });
    }
    return result;
};


var findOrder = function(numCourses, prerequisites) {
    const WHITE = 1;
    const GRAY = 2;
    const BLACK = 3;

    let isPossible = true;
    const color = new Map();
    const adjList = new Map();
    let result = []; 
    for (let i = 0; i < numCourses; i++) {
        color.set(i, WHITE);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let dest = prerequisites[i][0];
        let src = prerequisites[i][1];
        let tmp = adjList.get(src) || [];
        tmp.push(dest);
        adjList.set(src, tmp);
    }

    function dfs(node) {
        if (!isPossible) {
            return;
        }
        color.set(node, GRAY);
        let list = adjList.get(node) || [];
        for (let neighbor of list) {
            let nowColor = color.get(neighbor);
            if (nowColor === WHITE) {
                dfs(neighbor);
            }
            else if (nowColor === GRAY) {
                isPossible = false;
            }
        }
        color.set(node, BLACK);
        result.unshift(node);
    }

    for (let i = 0; i < numCourses; i++) {
        if (color.get(i) === WHITE) {
            dfs(i);
        }
    }

    return isPossible ? result : [];
}

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))

console.log(findOrder(1, []))
console.log(findOrder(2, []))


console.log(findOrder(2, [[1, 0]]))

console.log(findOrder(2, [[1, 0], [0, 1]]))