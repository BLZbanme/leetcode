/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let queue = [node];
    let copyQueue = [new Node(node.val)];
    while (queue.length) {
        let tmp = queue.shift();
        let tmpCopy = copyQueue.shift();
        if (!tmp.visited) {
            let tmpArray = tmp.neighbors;
            let newNeighbors = [];
            for (let e of tmpArray) {
                if (!e.visited) {
                    queue.push(e);
                    
                }
                newNeighbors
            }
        }
    }
};

var cloneGraph = function(node) {
    let queue = [node];
    let resNode = new Node(node.val, []);
    let copyQueue = [resNode];
    let map = new Map();
    map.set(node, resNode);
    while (queue.length) {
        let tmp = queue.shift();
        let tmpCopy = copyQueue.shift();
        let tmpNeighbors = tmp.neighbors;
        for (let e of tmpNeighbors) {
            if (map.has(e)) {
                tmpCopy.neighbors.push(map.get(e));
            }
            else {
                let newNode = new Node(e.val, []);
                tmpCopy.neighbors.push(newNode);
                map.set(e, newNode);
                queue.push(e);
                copyQueue.push(newNode);
            }
        }
    }

    return resNode;
};

var cloneGraph = function(node) {
    let map = new Map();

    function dfsClone(node) {
        if (!node) {
            return null;
        }

        if (map.has(node.val)) {
            return map.get(node.val);
        }
        else {
            let cloneNode = new Node(node.val, []);
            map.set(node.val, cloneNode);
            for (let i = 0, len = node.neighbors.length; i < len; i++) {
                cloneNode.neighbors.push(dfsClone(node.neighbors[i]));
            }
            return cloneNode;
        }
    }

    return dfsClone(node);
}

var cloneGraph = function(node) {
    let map = new Map();

    function dfsClone(node) {
        if (!node) {
            return null;
        }

        if (map.has(node)) {
            return map.get(node);
        }
        else {
            let cloneNode = new Node(node.val, []);
            map.set(node, cloneNode);
            for (let i = 0, len = node.neighbors.length; i < len; i++) {
                cloneNode.neighbors.push(dfsClone(node.neighbors[i]));
            }
            return cloneNode;
        }
    }

    return dfsClone(node);
}