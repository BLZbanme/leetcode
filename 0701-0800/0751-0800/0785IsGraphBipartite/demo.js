/**
 * @param {number[][]} graph
 * @return {boolean}
 */
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

console.log(isBipartite([[4],[],[4],[4],[0,2,3]])) //true;

console.log(isBipartite([[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]])); //false

console.log(isBipartite([[1,3], [0,2], [1,3], [0,2]])); //true;
console.log(isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]])); //false;