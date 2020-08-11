/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegrees = Array(numCourses).fill(0);
    const adj = [];
    for (let i = 0; i < numCourses; i++) {
        adj[i] = [];
    }

    const queue = [];

    for (let cp of prerequisites) {
        indegrees[cp[0]]++;
        adj[cp[1]].push(cp[0]);
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] == 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        let pre = queue.shift();
        numCourses--;
        for (let cur of adj[pre]) {
            if (--indegrees[cur] === 0) {
                queue.push(cur);
            }
        }
    }

    return numCourses == 0;
};


var canFinish = function(numCourses, prerequisites) {
    const adj = [];
    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }

    const dfs = (i) => {
        if (flags[i] == 1) {
            return false;
        }
        if (flags[i] == -1) {
            return true;
        }
        flags[i] = 1;
        for (let j of adj[i]) {
            if (!dfs(j)) {
                return false;
            }
        }
        flags[i] = -1;
        return true;
    }

    const flags = Array(numCourses);

    for (let cp of prerequisites) {
        adj[cp[1]].push(cp[0]);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
}

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))